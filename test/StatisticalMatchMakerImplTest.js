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
				+ "	        \"http://registry.easytv.eu/context/time\": \"08:07:45\""
				+ "	    },"
				+ "	    \"user_content\": {"
				+ "			   \"http://registry.easytv.eu/common/content/audio/language\": [ \"CA\", \"GR\" ],\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": [\"GR\"],\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/face\": true,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/text\":  true,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/sound\": true,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/character\": true"
				+ "	    },"
				+ "	    \"user_id\": 1,"
				+ "	    \"user_profile\":{\"user_preferences\": {\"default\": {\"preferences\": {"
				+ "    \"http://registry.easytv.eu/application/cs/cc/audioSubtitles\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/track\": \"CA\","
				+ "    \"http://registry.easytv.eu/application/tts/speed\": 38,"
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/textDetection\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\": \"#ee6243\","
				+ "    \"http://registry.easytv.eu/common/subtitles\": \"EN\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/color\": \"#b23b41\","
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale\": 94,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": \"EN\","
				+ "    \"http://registry.easytv.eu/common/signLanguage\": \"EN\","
				+ "    \"http://registry.easytv.eu/common/content/audio/language\": \"GR\","
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\": \"#39dc2\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/type\": \"serif\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/background\": \"#18d4dc\","
				+ "    \"http://registry.easytv.eu/application/tts/language\": \"ES\","
				+ "    \"http://registry.easytv.eu/common/displayContrast\": 52,"
				+ "    \"http://registry.easytv.eu/application/tts/volume\": 24,"
				+ "    \"http://registry.easytv.eu/common/content/audio/volume\": 80,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/volume\": 39,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\": 58,"
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/size\": 23,"
				+ "    \"http://registry.easytv.eu/application/tts/audioQuality\": 90,"
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/faceDetection\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/audioDescription\": false"
				+ "}}}}}");

var user_profile2 = JSON
		.parse("{"
				+ "	    \"user_context\": {"
				+ "	        \"http://registry.easytv.eu/context/device\": \"tablet\","
				+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
				+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
				+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
				+ "	        \"http://registry.easytv.eu/context/time\": \"08:07:45\""
				+ "	    },"
				+ "	    \"user_content\": {"
				+ "			   \"http://registry.easytv.eu/common/content/audio/language\": [ \"CA\", \"GR\" ],\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": [\"GR\"],\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/face\": true,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/text\":  false,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/sound\": true,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/character\": false"
				+ "	    },"
				+ "	    \"user_id\": 2,"
				+ "	    \"user_profile\":{\"user_preferences\": {\"default\": {\"preferences\": {"
				+ "    \"http://registry.easytv.eu/application/cs/cc/audioSubtitles\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/track\": \"ES\","
				+ "    \"http://registry.easytv.eu/application/tts/speed\": 67,"
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/textDetection\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\": \"#98cf15\","
				+ "    \"http://registry.easytv.eu/common/subtitles\": \"EN\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/color\": \"#cf375\","
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale\": 71,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": \"EN\","
				+ "    \"http://registry.easytv.eu/common/signLanguage\": \"GR\","
				+ "    \"http://registry.easytv.eu/common/content/audio/language\": \"GR\","
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\": \"#81efd\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/type\": \"fantasy\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/background\": \"#d62fec\","
				+ "    \"http://registry.easytv.eu/application/tts/language\": \"GR\","
				+ "    \"http://registry.easytv.eu/common/displayContrast\": 75,"
				+ "    \"http://registry.easytv.eu/application/tts/volume\": 44,"
				+ "    \"http://registry.easytv.eu/common/content/audio/volume\": 35,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/volume\": 17,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\": 63,"
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/size\": 25,"
				+ "    \"http://registry.easytv.eu/application/tts/audioQuality\": 60,"
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/faceDetection\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/audioDescription\": false"
				+ "}}}}}");

var user_profile3 = JSON
		.parse("{"
				+ "	    \"user_context\": {"
				+ "	        \"http://registry.easytv.eu/context/device\": \"tablet\","
				+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
				+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
				+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
				+ "	        \"http://registry.easytv.eu/context/time\": \"08:07:45\""
				+ "	    },"
				+ "	    \"user_content\": {"
				+ "			   \"http://registry.easytv.eu/common/content/audio/language\": [ \"CA\", \"GR\" ],\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": [\"GR\"],\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/face\": false,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/text\":  true,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/sound\": false,\r\n"
				+ "			   \"http://registry.easytv.eu/application/cs/accessibility/detection/character\": true"
				+ "	    },"
				+ "	    \"user_id\": 3,"
				+ "	    \"user_profile\":{\"user_preferences\": {\"default\": {\"preferences\": {"
				+ "    \"http://registry.easytv.eu/application/cs/cc/audioSubtitles\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/track\": \"ES\","
				+ "    \"http://registry.easytv.eu/application/tts/speed\": 27,"
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/textDetection\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\": \"#a27b52\","
				+ "    \"http://registry.easytv.eu/common/subtitles\": \"ES\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/color\": \"#79ff8\","
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale\": 88,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": \"GR\","
				+ "    \"http://registry.easytv.eu/common/signLanguage\": \"IT\","
				+ "    \"http://registry.easytv.eu/common/content/audio/language\": \"IT\","
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\": \"#d8a0af\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/type\": \"sans-serif\","
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/background\": \"#9f54e5\","
				+ "    \"http://registry.easytv.eu/application/tts/language\": \"CA\","
				+ "    \"http://registry.easytv.eu/common/displayContrast\": 11,"
				+ "    \"http://registry.easytv.eu/application/tts/volume\": 25,"
				+ "    \"http://registry.easytv.eu/common/content/audio/volume\": 61,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/volume\": 64,"
				+ "    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\": 6,"
				+ "    \"http://registry.easytv.eu/common/display/screen/enhancement/font/size\": 24,"
				+ "    \"http://registry.easytv.eu/application/tts/audioQuality\": 79,"
				+ "    \"http://registry.easytv.eu/application/cs/accessibility/faceDetection\": false,"
				+ "    \"http://registry.easytv.eu/application/cs/audio/audioDescription\": false"
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
