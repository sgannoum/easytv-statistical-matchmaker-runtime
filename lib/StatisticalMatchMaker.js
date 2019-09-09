/*!
EasyTV Statistical Matchmaker 

Copyright 2017-2020 Center for Research & Technology - HELLAS

Licensed under the New BSD License. You may not use this file except in
compliance with this licence.

You may obtain a copy of the licence at
https://github.com/REMEXLabs/GPII-Statistical-Matchmaker/blob/master/LICENSE.txt


The research leading to these results has received funding from 
the European Union's H2020-ICT-2016-2, ICT-19-2017 Media and content convergence 
under grant agreement no. 761999.
*/



var fluid = require("gpii-universal"),
easytv = fluid.registerNamespace("easytv");

var matchMaker = fluid.registerNamespace("easytv.matchMaker");
var stat = fluid.registerNamespace("easytv.matchMaker.statistical");
var statMatch = fluid.registerNamespace("easytv.matchMaker.statistical.match");

// Specify kettel.app invocation path and invocation method
fluid.defaults("easytv.statisticalMatchmaker", {
	gradeNames: ["kettle.app", "autoInit"],
        requestHandlers: {
            postMatchHandler: {
                "type": "easytv.matchMaker.statistical.postMatchHandler",
                "route": "/STMM/runtime/match",
                "method": "post"
            },
            getMatchtHandler: {
                "type": "easytv.matchMaker.statistical.getMatchtHandler",
                "route": "/STMM/runtime/match",
                "method": "get"
            },
            optionMatchHandler: {
                "type": "easytv.matchMaker.statistical.optionMatchHandler",
                "route": "/STMM/runtime/match",
                "method": "options"
            },
            postContentAdaptation: {
                "type": "easytv.matchMaker.statistical.postContentAdaptation",
                "route": "/STMM/runtime/content",
                "method": "post"
            },
            getContentAdaptation: {
                "type": "easytv.matchMaker.statistical.getContentAdaptation",
                "route": "/STMM/runtime/content",
                "method": "get"
            },
            postUserClusters: {
                "type": "easytv.matchMaker.statistical.postUserClusters",
                "route": "/STMM/runtime/clusters",
                "method": "post"
            },
            gettUserClusters: {
                "type": "easytv.matchMaker.statistical.gettUserClusters",
                "route": "/STMM/runtime/clusters",
                "method": "get"
            },
            postDimensionsHandlers: {
                "type": "easytv.matchMaker.statistical.postDimensionsHandlers",
                "route": "/STMM/runtime/dimensions",
                "method": "post"
            }
        }
});

// Specify invoker for post match
fluid.defaults("easytv.matchMaker.statistical.postMatchHandler", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.postMatchHandler"
    }
});

//Specify invoker get match
fluid.defaults("easytv.matchMaker.statistical.getMatchtHandler", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.getMatchtHandler"
    }
});

//Specify invoker for option match
fluid.defaults("easytv.matchMaker.statistical.optionMatchHandler", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.optionMatchHandler"
    }
});

//Specify invoker for get content adaptation
fluid.defaults("easytv.matchMaker.statistical.getContentAdaptation", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.getContentAdaptation"
    }
});

//Specify invoker for post content adaptation
fluid.defaults("easytv.matchMaker.statistical.postContentAdaptation", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.postContentAdaptation"
    }
});

//Specify invoker for post users profiles clusters
fluid.defaults("easytv.matchMaker.statistical.postUserClusters", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.postUserClusters"
    }
});

//Specify invoker for get users profiles clusters
fluid.defaults("easytv.matchMaker.statistical.gettUserClusters", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.gettUserClusters"
    }
});

//Specify invoker for post dimensions handlers
fluid.defaults("easytv.matchMaker.statistical.postDimensionsHandlers", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.postDimensionsHandlers"
    }
});

fluid.require("./StatisticalMatchMakerData.js", require);
var url = require('url')
var StatisticalMatchMakerImpl = require('../lib/StatisticalMatchMakerImpl')
var stmmImpl = new StatisticalMatchMakerImpl(stat.dimensionsHandlers);

/**
 * A HTTP POST handler for route /match
 */
statMatch.postMatchHandler = function (request) {
	try 
	{
		var radius = 1000
		var user_profile = request.req.body
		var query = url.parse(request.req.url, true).query 
		
		if('radius' in query) radius = query.radius

		// Rejection tests
		if (!("user_preferences" in user_profile)) { fluid.log("Invalid SMM payload: 'user_preferences' missing."); 
													 request.events.onError({message: "Invalid SMM payload: 'user_preferences' missing."}); 
													 return;
													 };
		
		request.res.header('Access-Control-Allow-Origin', '*');
		request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		request.res.header('Access-Control-Allow-Headers', 'Content-Type');
		
		//infer profiles
		var new_user_profile = stmmImpl.infer(user_profile, stat.clusters, radius);
		
		request.events.onSuccess.fire(new_user_profile);
		
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		console.log(err);
		fluid.log("====== SMM ERROR ======");
		request.events.onError(err);
	}
}

/**
 * A HTTP GET handler for route /match
 */
statMatch.getMatchtHandler = function (request) {

	request.res.header('Access-Control-Allow-Origin', '*');
	request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	request.res.header('Access-Control-Allow-Headers', 'Content-Type');
	request.events.onSuccess.fire({message: "To match a user file do: HTTP POST /match?[radius=number][distance_measure=euclidean|canberra|chebyshev|manhattan][dimensions=[general|visual|auditory|all]+]"});
		
}

/**
 * A HTTP Options handler for route /match
 * Handler of CORS
 */
statMatch.optionMatchHandler = function (request) {

	request.res.header('Access-Control-Allow-Origin', '*');
	request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	request.res.header('Access-Control-Allow-Headers', 'Content-Type');
	request.events.onSuccess.fire({message: "To match a user file do: HTTP POST /match?[radius=number][distance_measure=euclidean|canberra|chebyshev|manhattan][dimensions=[general|visual|auditory|all]+]"});
		
}

/**
 * A HTTP POST handler for route /match
 */
statMatch.getContentAdaptation = function (request) {
	try 
	{
		request.res.header('Access-Control-Allow-Origin', '*');
		request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		request.res.header('Access-Control-Allow-Headers', 'Content-Type');
		request.events.onSuccess.fire({message: "Content apdatation for a user profile do: HTTP POST /content with body { \'MPD\': {URL of the MPD file}, \'user_profile\': {JSON of the use profile} }"});	
		
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		console.log(err);
		fluid.log("====== SMM ERROR ======");
		request.events.onError(err);
	}
}

/**
 * A HTTP POST handler for route /match
 */
statMatch.postContentAdaptation = function (request) {
	try 
	{
		var radius = 1000
		var body = request.req.body
		var query = url.parse(request.req.url, true).query 
		
		if('radius' in query) radius = query.radius

		// Rejection tests
		if (!("user_preferences" in body)) { fluid.log("Invalid SMM payload: 'user_preferences' missing."); 
													 request.events.onError({message: "Invalid SMM payload: 'user_preferences' missing."}); 
													 return;
													 };
													 
		// Rejection tests
		if (!("MPD" in body)) { fluid.log("Invalid SMM payload: 'MPD file accessibility services' missing."); 
													 request.events.onError({message: "Invalid SMM payload: 'MPD file accessibility services' missing."}); 
													 return;
													 };
		
		request.res.header('Access-Control-Allow-Origin', '*');
		request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		request.res.header('Access-Control-Allow-Headers', 'Content-Type');
		
		//infer profiles
		var new_user_profile = stmmImpl.infer(body.profile, body.MPD, stat.clusters, radius);
		
		request.events.onSuccess.fire(new_user_profile);
		
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		console.log(err);
		fluid.log("====== SMM ERROR ======");
		request.events.onError(err);
	}
}

/**
 * A HTTP POST handler for loading users profile clusters
 */
statMatch.postUserClusters = function (request) {
	try 
	{
		var body = request.req.body											 
		
		request.res.header('Access-Control-Allow-Origin', '*');
		request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		request.res.header('Access-Control-Allow-Headers', 'Content-Type');
		
		//delete clusters
		delete stat.clusters;
		
		//load new clusters
		stat.clusters = body
		
		request.events.onSuccess.fire("clusters has been loaded successfully");
		
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		console.log(err);
		fluid.log("====== SMM ERROR ======");
		request.events.onError(err);
	}
}

/**
 * A HTTP GET handler for getting users profiles clusters
 */
statMatch.gettUserClusters = function (request) {
	try 
	{		
		
		request.res.header('Access-Control-Allow-Origin', '*');
		request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		request.res.header('Access-Control-Allow-Headers', 'Content-Type');
		
		request.events.onSuccess.fire(JSON.stringify(stat.clusters));
		
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		console.log(err);
		fluid.log("====== SMM ERROR ======");
		request.events.onError(err);
	}
}

/**
 * A HTTP GET handler for getting users profiles clusters
 */
statMatch.postDimensionsHandlers = function (request) {
	try 
	{		
		
		var body = request.req.body											 
		
		request.req.setEncoding('utf8');
		request.req.text = ""
		request.req.on('data', function(chunk) { request.req.text += chunk });
		request.req.on('end', function(chunk) {
			stmmImpl.loadHandlers(request.req.text);
			request.events.onSuccess.fire("Dimensions handlers has been loaded successfully");
		});
		
		request.res.header('Access-Control-Allow-Origin', '*');
		request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		request.res.header('Access-Control-Allow-Headers', 'Content-Type');

		
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		console.log(err);
		fluid.log("====== SMM ERROR ======");
		request.events.onError(err);
	}
}