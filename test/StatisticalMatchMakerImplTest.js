/**
 * 
 */
console.log("\nStatisticalMatchMakerImplTest....")
const assert = require('assert');

var user_profile1 = JSON
		.parse("{"
				+ "	    \"user_context\": {"
				+ "	        \"http://registry.easytv.eu/context/device\": \"tablet\","
				+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
				+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
				+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
				+ "	        \"http://registry.easytv.eu/context/time\": \"08:07:45\","
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/width\": 720,"  
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/height\": 1344," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/diameter\": 5.5," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/xdpi\": 257.5769958496094," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/ydpi\": 283.53399658203125," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityValue\": 2," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityBucket\": \"xhdpi\"" 
				+ "	    },"
				+ "	    \"user_content\": {"
				+ "			   \"http://registry.easytv.eu/common/content/audio/language\": [ \"CA\", \"GR\" ],"
				+ "			   \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": [\"GR\"],"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/face\": true,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/text\":  true,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/sound\": true,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/character\": true"
				+ "	    },"
				+ "	    \"user_id\": 1,"
				+ "	    \"user_profile\":{\"user_preferences\": {\"default\": {\"preferences\": {" +
				"				\"http://registry.easytv.eu/common/volume\": 5," + 
				"				\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2," + 
				"				\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"," + 
				"				\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" 
				+ "}}}}}");

var user_profile2 = JSON
		.parse("{"
				+ "	    \"user_context\": {"
				+ "	        \"http://registry.easytv.eu/context/device\": \"tablet\","
				+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
				+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
				+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
				+ "	        \"http://registry.easytv.eu/context/time\": \"08:07:45\","
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/width\": 720,"  
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/height\": 1344," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/diameter\": 5.5," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/xdpi\": 257.5769958496094," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/ydpi\": 283.53399658203125," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityValue\": 2," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityBucket\": \"xhdpi\"" 
				+ "	    },"
				+ "	    \"user_content\": {"
				+ "			   \"http://registry.easytv.eu/common/content/audio/language\": [ \"CA\", \"GR\" ],"
				+ "			   \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": [\"GR\"],"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/face\": true,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/text\":  false,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/sound\": true,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/character\": false"
				+ "	    },"
				+ "	    \"user_id\": 2,"
				+ "	    \"user_profile\":{\"user_preferences\": {\"default\": {\"preferences\": {" +
				"				\"http://registry.easytv.eu/common/volume\": 2," + 
				"				\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 0.8," + 
				"				\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"slow\"," + 
				"				\"http://registry.easytv.eu/application/cs/ui/text/size\": \"15\"" 
				+ "}}}}}");

var user_profile3 = JSON
		.parse("{"
				+ "	    \"user_context\": {"
				+ "	        \"http://registry.easytv.eu/context/device\": \"tablet\","
				+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
				+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
				+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
				+ "	        \"http://registry.easytv.eu/context/time\": \"08:07:45\","
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/width\": 720,"  
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/height\": 1344," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/diameter\": 5.5," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/xdpi\": 257.5769958496094," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/ydpi\": 283.53399658203125," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityValue\": 2," 
				+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityBucket\": \"xhdpi\"" 
				+ "	    },"
				+ "	    \"user_content\": {"
				+ "			   \"http://registry.easytv.eu/common/content/audio/language\": [ \"CA\", \"GR\" ],"
				+ "			   \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": [\"GR\"],"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/face\": false,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/text\":  true,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/sound\": false,"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/character\": true"
				+ "	    },"
				+ "	    \"user_id\": 3,"
				+ "	    \"user_profile\":{\"user_preferences\": {\"default\": {\"preferences\": {"+
				"				\"http://registry.easytv.eu/common/volume\": 5," + 
				"				\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 11.2," + 
				"				\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"slow\"," + 
				"				\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" 
				+ "}}}}}");


var clusters = [user_profile1, user_profile2, user_profile3]
var stmmImpl = require('../lib/StatisticalMatchMakerImpl').stmmImpl
var StatisticalMatchMakerImpl = require('../lib/StatisticalMatchMakerImpl').StatisticalMatchMakerImpl
var current_instance = new StatisticalMatchMakerImpl(clusters)

/**
 * Test the all dimensions similarity functions
 * @returns
 */
function test_get_relevant_profile_1() {
	console.log("test_get_relevant_profile_1...");
	var relevantClusters = stmmImpl.get_relevant_profile(user_profile1.user_profile, clusters);
	
	var bestMatch = relevantClusters[0].cluster
	assert(bestMatch.user_id == 1, bestMatch.user_id+ " != "+ 1)
	
	console.log("PASS");
}

function test_get_relevant_profile_2() {
	console.log("test_get_relevant_profile_2...");
	var relevantClusters = stmmImpl.get_relevant_profile(user_profile2.user_profile, clusters);
	
	var bestMatch = relevantClusters[0].cluster
	assert(bestMatch.user_id == 2, bestMatch.user_id+ " != "+ 1)
	
	console.log("PASS");
}

function test_get_relevant_profile_3() {
	console.log("test_get_relevant_profile_3...");
	var relevantClusters = stmmImpl.get_relevant_profile(user_profile3.user_profile, clusters);
	
	var bestMatch = relevantClusters[0].cluster
	assert(bestMatch.user_id == 3, bestMatch.user_id+ " != "+ 1)
	
	console.log("PASS");
}

/**
 * Test the all dimensions similarity functions
 * @returns
 */
function test_get_relevant_context_1() {
	console.log("test_get_relevant_context_1...");

	var relevantClusters = stmmImpl.get_relevant_context(user_profile1.user_profile, user_profile1.user_context, clusters);
	
	var bestMatch = relevantClusters[0].cluster
	assert(bestMatch.user_id == 1, bestMatch.user_id+ " != "+ 1)
	
	console.log("PASS");
}

function test_get_relevant_context_2() {
	console.log("test_get_relevant_context_2...");

	var relevantClusters = stmmImpl.get_relevant_context(user_profile2.user_profile, user_profile2.user_context, clusters);
	
	var bestMatch = relevantClusters[0].cluster
	assert(bestMatch.user_id == 2, bestMatch.user_id+ " != "+ 2)
	
	console.log("PASS");
}

function test_get_relevant_context_3() {
	console.log("test_get_relevant_context_3...");

	var relevantClusters = stmmImpl.get_relevant_context(user_profile3.user_profile, user_profile3.user_context, clusters);
	
	var bestMatch = relevantClusters[0].cluster
	assert(bestMatch.user_id == 3, bestMatch.user_id+ " != "+ 3)
	
	console.log("PASS");
}


function test_get_relevant_content_1() {
	console.log("test_get_relevant_content_1...");

	var user_content = {'http://registry.easytv.eu/common/content/audio/language': [ 'CA', 'GR' ],
				   		'http://registry.easytv.eu/application/cs/cc/subtitles/language': ['GR'],
				   		'http://registry.easytv.eu/application/cs/accessibility/detection/face': true,
				   		'http://registry.easytv.eu/application/cs/accessibility/detection/text':  true,
				   		'http://registry.easytv.eu/application/cs/accessibility/detection/sound': true,
				   		'http://registry.easytv.eu/application/cs/accessibility/detection/character': true};
	
	var relevantClusters = stmmImpl.get_relevant_content(user_profile1.user_profile, user_profile1.user_context, user_content, clusters)
	
	var bestMatch = relevantClusters[0].cluster
	assert(bestMatch.user_id == 1, bestMatch.user_id+ " != "+ 1)
	
	console.log("PASS");
}

/**
 * Test the all dimensions similarity functions
 * @returns
 */
function test_personalize_profile_1() {
	console.log("test_personalize_profile_1...");
	var bestMatch = current_instance.personalize_profile(user_profile1.user_id, user_profile1.user_profile);
	
	assert(bestMatch != undefined)
	
	//console.log(JSON.stringify(bestMatch))
	
	console.log("PASS");
}

test_personalize_profile_1();

//test the similarity value of the user profile to the others clusters
test_get_relevant_profile_1();
test_get_relevant_profile_2();
test_get_relevant_profile_3();

test_get_relevant_context_1();
test_get_relevant_context_2();
test_get_relevant_context_3();

test_get_relevant_content_1();
