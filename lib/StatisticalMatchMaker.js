/*!
GPII/Cloud4all Statistical Matchmaker 

Copyright 2012-2015 Hochschule der Medien (HdM) / Stuttgart Media University

Licensed under the New BSD License. You may not use this file except in
compliance with this licence.

You may obtain a copy of the licence at
https://github.com/REMEXLabs/GPII-Statistical-Matchmaker/blob/master/LICENSE.txt


The research leading to these results has received funding from 
the European Union's Seventh Framework Programme (FP7/2007-2013) 
under grant agreement no. 289016.
*/



var fluid = require("infusion"),
	gpii = fluid.registerNamespace("gpii");

var matchMaker = fluid.registerNamespace("gpii.matchMaker");
var stat = fluid.registerNamespace("gpii.matchMaker.statistical");

fluid.defaults("gpii.statisticalMatchmaker", {
	gradeNames: ["kettle.app", "autoInit"],
	handlers: {
		matchPost: {
			route: "/match",
			type: "post"
		}
	}
});

fluid.defaults("kettle.requests.request.handler.matchPost", {
	gradeNames: ["autoInit", "fluid.littleComponent"],
	invokers: {
		handle: {
			funcName: "gpii.matchMaker.statistical.match",
			args: ["{requestProxy}", "{request}.req.body"]
		}
	}
});






fluid.require("./StatisticalMatchMakerData.js", require);

stat.match = function (requestProxy, payload) {
	// Rejection tests
	if (!("deviceContext" in payload)) { fluid.log("Invalid SMM payload: 'deviceContext' missing."); };
	if (!("solutions" in payload.deviceContext)) { fluid.log("Invalid SMM payload: 'deviceContext.solutions' missing."); };
	var solutions = payload.deviceContext.solutions;
	if (!("preferences" in payload)) { fluid.log("Invalid SMM payload: 'preferences' missing."); };
	if (!("contexts" in payload.preferences)) { fluid.log("Invalid SMM payload: 'preferences.contexts' missing."); };
	var contexts = payload.preferences.contexts;
	// Preprocess contexts
	contexts = stat.preprocess(contexts);
	// Iterate over contexts
	var result = {};
	result.inferredConfiguration = {};
	fluid.each(contexts, function(context, contextKey) {
		var clustered = stat.infer(context.preferences);
		result.inferredConfiguration[contextKey] = stat.filterPreferences(clustered.preferences, solutions);
		// Add conditions to output if present
		if ("conditions" in context) {
			result.inferredConfiguration[contextKey].conditions = context.conditions;
		}
	});
	// If we arrived here, all is fine
	result.status = {};
	result.status.type = "success";
	requestProxy.events.onSuccess.fire(result);
}

stat.preprocess = function (contexts) {
	// Restructure preferences
	fluid.each(contexts, function(context, contextKey) {
		if ("preferences" in context) {
			fluid.each(context.preferences, function(appPrefs, appKey) {
				var appPrefsType = typeof appPrefs;
				if (!(appPrefsType == "object")) {
					var split = appKey.split("/");
					var newPrefName = split[split.length - 1];
					var newPrefKey = appKey.replace("/" + newPrefName, "");
					if (!(newPrefKey in context.preferences)) context.preferences[newPrefKey] = {};
					context.preferences[newPrefKey][newPrefName] = appPrefs;
				}
			});
		}
	});
	
	// Fuse base contexts
	if ("gpii-default" in contexts) {
		var baseContext = stat.getBaseContext(contexts);
		contexts["gpii-default"] = stat.fuseContextsByPreference(contexts["gpii-default"], baseContext);
	}
	return contexts;
}

stat.getBaseContext = function (contexts) {
	var result = {};
	fluid.each(contexts, function(context, contextKey) {
		if (!("conditions" in context))
			result = stat.fuseContextsByPreference(result, context);
	});
	return result;
}

stat.fuseContextsByPreference = function (contextA, contextB) {
	var result = contextA;
	if (!("preferences" in result)) result.preferences = {};
	// Add contextB
	if ("preferences" in contextB) {
		fluid.each(contextB.preferences, function(appPrefs, appKey) {
			var appPrefsType = typeof appPrefs;
			if (appPrefsType == "object") {
				if (!(appKey in result.preferences)) result.preferences[appKey] = {};
				fluid.each(appPrefs, function(prefValue, prefKey){
					if (!(prefKey in result.preferences[appKey])) result.preferences[appKey][prefKey] = prefValue;
				});
			} else {
				if (!(appKey in result.preferences)) result.preferences[appKey] = appPrefs;
			}
		});
	}
	return result;
}

stat.infer = function (preferences) {
	var result = {};
	result.preferences = {};
	try {
		// Additive Clusters
		var relevantClusters = stat.getRelevantClusters(preferences);
		relevantClusters.sort(function(a, b){return stat.getClusterDistance(preferences, a) - stat.getClusterDistance(preferences, b)});
		fluid.each(relevantClusters, function(curCluster){
			fluid.each(curCluster, function(settings, application){
				if (!(application in result.preferences)) {
					result.preferences[application] = {};
					stat.setSettings(result, application, settings);
				}
			});
		});
		/*
		// Generalized Clusters
		var cluster;
		if ("applications" in preferences) {
			cluster = stat.getClosestCluster(preferences.applications);
		} else {
			cluster = stat.clusters[0];
		}
		fluid.each(cluster, function(settings, application){
			if (!(application in preferences.applications)) {
				preferences.applications[application] = {};
				preferences.applications[application]["id"] = application;
				stat.setSettings(preferences, application, settings)
			}
		});
		*/
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		fluid.log("====== SMM ERROR ======");
	}
    return result;
}

stat.getRelevantClusters = function (preferences) {
	var result = [];
	fluid.each(stat.clusters, function(curCluster){
		if (stat.getClusterDistance(preferences, curCluster) != stat.entryCount) {
			result.push(stat.clone(curCluster));
		}
	});
	return result;
}

stat.getClosestCluster = function (preferences) {
	var distance = Infinity;
	var cluster;
	fluid.each(stat.clusters, function(curCluster){
		var curDistance = stat.getClusterDistance(preferences, curCluster);
		if (curDistance < distance) {
			cluster = stat.clone(curCluster);
			distance = curDistance;
		};
	});
	return cluster;
}

stat.getClusterDistance = function (preferences, cluster) {
	var result = stat.entryCount;
	fluid.each(preferences, function(prefValues, prefKey){
		fluid.each(prefValues, function(prefValue, prefValueKey){
			// Noise tolerant distance measure
			if ((prefKey in cluster) && (prefValueKey in cluster[prefKey])) {
				var clusterValue = cluster[prefKey][prefValueKey];
				if (prefValue == clusterValue) {
					result -= 1;
				} else {
					var statType = stat.preferenceTypes[prefKey][prefValueKey];
					if (typeof prefValue == "object" && prefValue != null) {
						prefValue = prefValue["value"];
					}
					if (statType["isEnum"]) {
						result -= (1 - Math.max(Math.min( 1 / statType["max"] ,1),0));
					} else if (statType["min"] != statType["max"]) {
						result -= (1 - Math.max(Math.min( Math.abs( (prefValue - clusterValue) / (statType["max"] - statType["min"]) ) ,1),0));
					}
				}
			}
			/*
			// Conventional distance measure
			if (!(prefKey in cluster)) {
				result = result + 0.5;
			} else if (!(prefValueKey in cluster[prefKey])) {
				result = result + 0.5;
			} else if (prefValue != cluster[prefKey][prefValueKey]) {
				var clusterValue = cluster[prefKey][prefValueKey];
				var statType = stat.preferenceTypes[prefKey][prefValueKey];
				if (typeof prefValue == "object" && prefValue != null) {
					prefValue = prefValue["value"];
				}
				if (statType["isEnum"]) {
					result -= Math.max(Math.min( 1 / statType["max"] ,1),0);
				} else if (statType["min"] != statType["max"]) {
					result -= Math.max(Math.min( Math.abs( (prefValue - statType["min"]) / (statType["max"] - statType["min"]) - (clusterValue - statType["min"]) / (statType["max"] - statType["min"]) ) ,1),0);
				}
			};
			*/
		});
	});
	return result;
}

stat.setSettings = function (preferences, application, settings) {
	preferences["preferences"][application] = settings;
}

stat.filterPreferences = function (context, solutions) {
	var result = {};
	result.applications = {};
	fluid.each(context, function(prefValues, prefKey) {
		var found = false;
		fluid.each(solutions, function(solution) {
			if (prefKey.indexOf(solution.id) > -1) {
				found = true;
			}
		});
		var outPrefKey = prefKey.replace("http://registry.gpii.net/applications/", "");
		if (found) {
			var finalPreferences = context[prefKey];
			result.applications[outPrefKey] = {};
			if ("_disabled" in finalPreferences) {
				if (finalPreferences["_disabled"] != "unknown") {
					result.applications[outPrefKey].active = !finalPreferences["_disabled"];
				}
				delete finalPreferences["_disabled"];
			} else {
				result.applications[outPrefKey].active = true;
			}
			result.applications[outPrefKey].settings = {};
			result.applications[outPrefKey].settings[prefKey] = finalPreferences;
		}
	});
	return result;
}


stat.clone = function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
