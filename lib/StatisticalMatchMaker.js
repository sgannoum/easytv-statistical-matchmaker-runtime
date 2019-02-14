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



var fluid = require("C:\\Users\\salgan\\git\\universal\\node_modules\\infusion"),
easytv = fluid.registerNamespace("easytv");

var matchMaker = fluid.registerNamespace("easytv.matchMaker");
var stat = fluid.registerNamespace("easytv.matchMaker.statistical");


// Specify kettel.app invocation path and invocation method
fluid.defaults("easytv.statisticalMatchmaker", {
	gradeNames: ["kettle.app", "autoInit"],
        requestHandlers: {
            postHandler: {
                "type": "easytv.matchMaker.statistical.handler",
                "route": "/match",
                "method": "post"
            }
        }
});

// Specify invoker
fluid.defaults("easytv.matchMaker.statistical.handler", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match"
    }
});


fluid.require("./StatisticalMatchMakerData.js", require);
var StatisticalMatchMakerImpl = require('../lib/StatisticalMatchMakerImpl')
var url = require('url')

easytv.matchMaker.statistical.match = function (request) {
	try 
	{
		var radius = 1000
		var dimensions = ['ALL']
		var distance_measure = 'euclidean'
		var user_profile = request.req.body
		var query = url.parse(request.req.url, true).query 
		
		if('radius' in query) radius = query.radius
		if('dimensions' in query) dimensions = query.dimensions
		if('distanceMeasure' in query) distance_measure = query.distanceMeasure

		// Rejection tests
		if (!("general" in user_profile)) { fluid.log("Invalid SMM payload: 'general' missing."); request.events.onError({message: "Invalid SMM payload: 'general' missing."}); return;};
		if (!("visual" in user_profile)) { fluid.log("Invalid SMM payload: 'visual' missing."); request.events.onError({message: "Invalid SMM payload: 'visual' missing."}); return; };
		if (!("auditory" in user_profile)) { fluid.log("Invalid SMM payload: 'auditory' missing."); request.events.onError({message: "Invalid SMM payload: 'auditory' missing."}); return; };
		if (!("user_preferences" in user_profile)) { fluid.log("Invalid SMM payload: 'user_preferences' missing."); request.events.onError({message: "Invalid SMM payload: 'user_preferences' missing."}); return;};
		
		var new_user_profile = StatisticalMatchMakerImpl.infer(user_profile, stat.clusters, dimensions, radius, distance_measure);
		request.events.onSuccess.fire(new_user_profile);
		
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		fluid.log("====== SMM ERROR ======");
	}
}

