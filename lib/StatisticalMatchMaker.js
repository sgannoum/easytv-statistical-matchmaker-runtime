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



var fluid = require("C:\\Users\\salgan\\git\\universal\\node_modules\\infusion"),
easytv = fluid.registerNamespace("easytv");

var matchMaker = fluid.registerNamespace("easytv.matchMaker");
var stat = fluid.registerNamespace("easytv.matchMaker.statistical");
var statMatch = fluid.registerNamespace("easytv.matchMaker.statistical.match");

// Specify kettel.app invocation path and invocation method
fluid.defaults("easytv.statisticalMatchmaker", {
	gradeNames: ["kettle.app", "autoInit"],
        requestHandlers: {
            postHandler: {
                "type": "easytv.matchMaker.statistical.postHandler",
                "route": "/match",
                "method": "post"
            },
            gettHandler: {
                "type": "easytv.matchMaker.statistical.gettHandler",
                "route": "/match",
                "method": "get"
            },
            optiontHandler: {
                "type": "easytv.matchMaker.statistical.optiontHandler",
                "route": "/match",
                "method": "options"
            }
        }
});

// Specify invoker for post match
fluid.defaults("easytv.matchMaker.statistical.postHandler", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.postHandler"
    }
});

//Specify invoker get match
fluid.defaults("easytv.matchMaker.statistical.gettHandler", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.getHandler"
    }
});

//Specify invoker for option match
fluid.defaults("easytv.matchMaker.statistical.optiontHandler", {
    gradeNames: "kettle.request.http",
    invokers: {
        handleRequest: "easytv.matchMaker.statistical.match.optionHandler"
    }
});

fluid.require("./StatisticalMatchMakerData.js", require);
var StatisticalMatchMakerImpl = require('../lib/StatisticalMatchMakerImpl')
var url = require('url')

/**
 * A HTTP POST handler for route /match
 */
statMatch.postHandler = function (request) {
	try 
	{
		var radius = 1000
		var dimensions = ['ALL']
		var distance_measure = 'euclidean'
		var user_profile = request.req.body
		var query = url.parse(request.req.url, true).query 
		
		if('radius' in query) radius = query.radius
		if('dimensions' in query) dimensions = query.dimensions.split(',')
		if('distanceMeasure' in query) distance_measure = query.distanceMeasure

		// Rejection tests
		if (!("general" in user_profile)) { fluid.log("Invalid SMM payload: 'general' missing."); request.events.onError({message: "Invalid SMM payload: 'general' missing."}); return;};
		if (!("visual" in user_profile)) { fluid.log("Invalid SMM payload: 'visual' missing."); request.events.onError({message: "Invalid SMM payload: 'visual' missing."}); return; };
		if (!("auditory" in user_profile)) { fluid.log("Invalid SMM payload: 'auditory' missing."); request.events.onError({message: "Invalid SMM payload: 'auditory' missing."}); return; };
		if (!("user_preferences" in user_profile)) { fluid.log("Invalid SMM payload: 'user_preferences' missing."); request.events.onError({message: "Invalid SMM payload: 'user_preferences' missing."}); return;};
		
		request.res.header('Access-Control-Allow-Origin', '*');
		request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		request.res.header('Access-Control-Allow-Headers', 'Content-Type');
		
		var new_user_profile = StatisticalMatchMakerImpl.infer(user_profile, stat.clusters, dimensions, radius, distance_measure);
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
statMatch.getHandler = function (request) {

	request.res.header('Access-Control-Allow-Origin', '*');
	request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	request.res.header('Access-Control-Allow-Headers', 'Content-Type');
	request.events.onSuccess.fire({message: "To match a user file do: HTTP POST /match?[radius=number][distance_measure=euclidean|canberra|chebyshev|manhattan][dimensions=[general|visual|auditory|all]+]"});
		
}

/**
 * A HTTP Options handler for route /match
 * Handler of CORS
 */
statMatch.optionHandler = function (request) {

	request.res.header('Access-Control-Allow-Origin', '*');
	request.res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	request.res.header('Access-Control-Allow-Headers', 'Content-Type');
	request.events.onSuccess.fire({message: "To match a user file do: HTTP POST /match?[radius=number][distance_measure=euclidean|canberra|chebyshev|manhattan][dimensions=[general|visual|auditory|all]+]"});
		
}

