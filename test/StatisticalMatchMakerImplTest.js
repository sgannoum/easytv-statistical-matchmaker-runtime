/**
 * 
 */
const assert = require('assert');

var user_profile1 = JSON.parse("{\"user_preferences\": {\"default\": {\"preferences\": {\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/audioSubtitles\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/track\": \"CA\",\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/speed\": 38,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/textDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\": \"#ee6243\",\r\n" + 
		"    \"http://registry.easytv.eu/common/subtitles\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/color\": \"#b23b41\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale\": 94,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/signLanguage\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/language\": \"GR\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\": \"#39dc2\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/type\": \"serif\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/background\": \"#18d4dc\",\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/language\": \"ES\",\r\n" + 
		"    \"http://registry.easytv.eu/common/displayContrast\": 52,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/volume\": 24,\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/volume\": 80,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/volume\": 39,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\": 58,\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/size\": 23,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/audioQuality\": 90,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/faceDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/audioDescription\": false\r\n" + 
		"}}}}");


var user_profile2 = JSON.parse("{\"user_preferences\": {\"default\": {\"preferences\": {\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/audioSubtitles\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/track\": \"ES\",\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/speed\": 67,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/textDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\": \"#98cf15\",\r\n" + 
		"    \"http://registry.easytv.eu/common/subtitles\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/color\": \"#cf375\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale\": 71,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/signLanguage\": \"GR\",\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/language\": \"GR\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\": \"#81efd\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/type\": \"fantasy\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/background\": \"#d62fec\",\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/language\": \"GR\",\r\n" + 
		"    \"http://registry.easytv.eu/common/displayContrast\": 75,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/volume\": 44,\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/volume\": 35,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/volume\": 17,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\": 63,\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/size\": 25,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/audioQuality\": 60,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/faceDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/audioDescription\": false\r\n" + 
		"}}}}");


var user_profile3 = JSON.parse("{\"user_preferences\": {\"default\": {\"preferences\": {\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/audioSubtitles\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/track\": \"ES\",\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/speed\": 27,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/textDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\": \"#a27b52\",\r\n" + 
		"    \"http://registry.easytv.eu/common/subtitles\": \"ES\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/color\": \"#79ff8\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale\": 88,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": \"GR\",\r\n" + 
		"    \"http://registry.easytv.eu/common/signLanguage\": \"IT\",\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/language\": \"IT\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\": \"#d8a0af\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/type\": \"sans-serif\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/background\": \"#9f54e5\",\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/language\": \"CA\",\r\n" + 
		"    \"http://registry.easytv.eu/common/displayContrast\": 11,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/volume\": 25,\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/volume\": 61,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/volume\": 64,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\": 6,\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/size\": 24,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/audioQuality\": 79,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/faceDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/audioDescription\": false\r\n" + 
		"}}}}");

var user_profile4 = JSON.parse("{\"user_preferences\": {\"default\": {\"preferences\": {\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/audioSubtitles\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/track\": \"CA\",\r\n" +  
		"    \"http://registry.easytv.eu/application/cs/accessibility/textDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\": \"#ee6243\",\r\n" + 
		"    \"http://registry.easytv.eu/common/subtitles\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/color\": \"#b23b41\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale\": 94,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/language\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/signLanguage\": \"EN\",\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/language\": \"GR\",\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\": \"#39dc2\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/type\": \"serif\",\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/background\": \"#18d4dc\",\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/language\": \"ES\",\r\n" + 
		"    \"http://registry.easytv.eu/common/displayContrast\": 52,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/volume\": 24,\r\n" + 
		"    \"http://registry.easytv.eu/common/content/audio/volume\": 80,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/volume\": 39,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\": 58,\r\n" + 
		"    \"http://registry.easytv.eu/common/display/screen/enhancement/font/size\": 23,\r\n" + 
		"    \"http://registry.easytv.eu/application/tts/audioQuality\": 90,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/accessibility/faceDetection\": false,\r\n" + 
		"    \"http://registry.easytv.eu/application/cs/audio/audioDescription\": false\r\n" + 
		"}}}}");


var clusters = [user_profile1, user_profile2, user_profile3]

var StatisticalMatchMakerImpl = require('../lib/StatisticalMatchMakerImpl')

/**
 * Taken from the auto generated file
 */
	var Numeric = require("../lib/DimensionHandlers").Numeric
	var Nominal = require("../lib/DimensionHandlers").Nominal
	var Ordinal = require("../lib/DimensionHandlers").Ordinal
	var SymmetricBinary = require("../lib/DimensionHandlers").SymmetricBinary
	var Color = require("../lib/DimensionHandlers").Color
	
	var myMap = new Map();
	myMap.set("http://registry.easytv.eu/common/content/audio/volume", new Numeric(95.0, 7.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/common/content/audio/language", new Nominal(["en","es","ca","gr","it"], -1.0));
	myMap.set("http://registry.easytv.eu/common/display/screen/enhancement/font/size", new Numeric(26.0, 23.0, 1.0 ));
	myMap.set("http://registry.easytv.eu/common/display/screen/enhancement/font/type", new Nominal(["fantasy","monospace","sans-serif","serif","cursive"], -1.0));
	myMap.set("http://registry.easytv.eu/common/display/screen/enhancement/font/color", new Color(new Numeric(242.0, 7.0, -1.0 ),new Numeric(248.0, 16.0, -1.0 ),new Numeric(248.0, 36.0, -1.0 )));
	myMap.set("http://registry.easytv.eu/common/display/screen/enhancement/background", new Color(new Numeric(236.0, 0.0, -1.0 ),new Numeric(231.0, 32.0, -1.0 ),new Numeric(236.0, 71.0, -1.0 )));
	myMap.set("http://registry.easytv.eu/common/subtitles", new Nominal(["en","es","ca","gr","it"], -1.0));
	myMap.set("http://registry.easytv.eu/common/signLanguage", new Nominal(["en","es","ca","gr","it"], -1.0));
	myMap.set("http://registry.easytv.eu/common/displayContrast", new Numeric(94.0, 1.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/application/tts/speed", new Numeric(98.0, 12.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/application/tts/volume", new Numeric(90.0, 5.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/application/tts/language", new Nominal(["en","es","ca","gr","it"], -1.0));
	myMap.set("http://registry.easytv.eu/application/tts/audioQuality", new Numeric(90.0, 20.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale", new Numeric(94.0, 1.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/application/cs/accessibility/textDetection", new SymmetricBinary(-1.0));
	myMap.set("http://registry.easytv.eu/application/cs/accessibility/faceDetection", new SymmetricBinary(-1.0));
	myMap.set("http://registry.easytv.eu/application/cs/audio/volume", new Numeric(80.0, 12.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/application/cs/audio/track", new Nominal(["en","es","ca","gr","it"], -1.0));
	myMap.set("http://registry.easytv.eu/application/cs/audio/audioDescription", new SymmetricBinary(-1.0));
	myMap.set("http://registry.easytv.eu/application/cs/cc/audioSubtitles", new SymmetricBinary(-1.0));
	myMap.set("http://registry.easytv.eu/application/cs/cc/subtitles/language", new Nominal(["en","es","ca","gr","it"], -1.0));
	myMap.set("http://registry.easytv.eu/application/cs/cc/subtitles/fontSize", new Numeric(95.0, 4.0, 0.0 ));
	myMap.set("http://registry.easytv.eu/application/cs/cc/subtitles/fontColor", new Color(new Numeric(216.0, 3.0, -1.0 ),new Numeric(251.0, 30.0, -1.0 ),new Numeric(253.0, 19.0, -1.0 )));
	myMap.set("http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor", new Color(new Numeric(243.0, 18.0, -1.0 ),new Numeric(243.0, 73.0, -1.0 ),new Numeric(205.0, 21.0, -1.0 )));
	/**
 * 
 */

var stmmImpl = new StatisticalMatchMakerImpl(myMap)


function test_getPreferencesPoints() {
	var actualPoints = stmmImpl.getPerferencePoints(user_profile1);
	var expectedPoints = stmmImpl.getPerferencePoints(user_profile1);
	
	assert (actualPoints.length == expectedPoints.length)
	assert (actualPoints.every(function(u, i) {
		        return u === expectedPoints[i];
		    }), "Preferences points are not equals " + actualPoints);
	
	console.log("test_getPreferencesPoints PASS");
}

function test_toJSON_StringProfile() {
	var actualProf = stmmImpl.toJSON(user_profile1, null, 4)
	var expectedProf = JSON.stringify(user_profile1, null, 4)
	
	assert (actualProf == expectedProf, "profiles are not equals expected" + expectedProf+ " but found "+ actualProf);
	
	console.log("test_toJSON_StringProfile PASS");
}


function test_getClusterDistance() {
	var actualDist = stmmImpl.getClusterDistance(user_profile1, user_profile2);
	var expectedDist = 0.6577663685112631
	assert (actualDist == expectedDist, "Distance is not equals (" + actualDist +" != " + expectedDist+")");
	
	console.log("test_getClusterDistance PASS");
}


function test_infer() {
	var actual_user_profile = stmmImpl.infer(user_profile4, clusters, 10)
	
	//most relevant profile is user_profile1
	var expectedProf = JSON.stringify(user_profile1, null, 4)
	
	//console.log(JSON.stringify(user_profile4));
	//console.log("==============after inference================");
	//console.log(actual_user_profile);
	
	//check the profile assigned value
	assert (actual_user_profile["http://registry.easytv.eu/application/tts/speed"] == expectedProf["http://registry.easytv.eu/application/tts/speed"], "profiles are not equals expected" + expectedProf+ " but found "+ actual_user_profile);

	console.log("test_infer PASS");
}

//run test_getPoints
test_getPreferencesPoints();
test_getClusterDistance();

//run test_toJSON
test_toJSON_StringProfile();

//run test_infer()
test_infer();
