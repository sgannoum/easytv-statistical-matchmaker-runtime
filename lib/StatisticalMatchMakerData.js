/*!

EasyTV Statistical Matchmaker 

Copyright 2017-2020 Center for Research & Technology - HELLAS

Licensed under the New BSD License. You may not use this file except in
compliance with this licence.

You may obtain a copy of the licence at
https://github.com/REMEXLabs/GPII-Statistical-Matchmaker/blob/master/LICENSE.txt

The research leading to these results has received funding from
the European Union's H2020-ICT-2016-2, ICT-19-2017 Media and content convergence
under grant agreement no. 761999
*/

//Generated 03 Jul 18:31:23

var stat = {}

var Numeric = require("./DimensionHandlers").Numeric
var IntegerNumeric = require("./DimensionHandlers").IntegerNumeric
var Nominal = require("./DimensionHandlers").Nominal
var Ordinal = require("./DimensionHandlers").Ordinal
var SymmetricBinary = require("./DimensionHandlers").SymmetricBinary
var Color = require("./DimensionHandlers").Color

stat.dimensionsHandlers = new Map();
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/content/audio/volume", new Numeric(95.0, 7.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/content/audio/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/font/size", new Numeric(26.0, 23.0, 1.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/font/type", new Nominal(["fantasy","monospace","sans-serif","serif","cursive"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/font/color", new Color(new IntegerNumeric(242.0, 7.0, -1.0 ),new IntegerNumeric(248.0, 16.0, -1.0 ),new IntegerNumeric(248.0, 36.0, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/background", new Color(new IntegerNumeric(236.0, 0.0, -1.0 ),new IntegerNumeric(231.0, 32.0, -1.0 ),new IntegerNumeric(236.0, 71.0, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/subtitles", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/signLanguage", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/displayContrast", new Numeric(94.0, 1.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/speed", new Numeric(98.0, 12.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/volume", new Numeric(90.0, 5.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/audioQuality", new Numeric(90.0, 20.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale", new Numeric(94.0, 1.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/textDetection", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/faceDetection", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/volume", new Numeric(80.0, 12.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/track", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/audioDescription", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/audioSubtitles", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/fontSize", new Numeric(95.0, 4.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/fontColor", new Color(new IntegerNumeric(216.0, 3.0, -1.0 ),new IntegerNumeric(251.0, 30.0, -1.0 ),new IntegerNumeric(253.0, 19.0, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor", new Color(new IntegerNumeric(243.0, 18.0, -1.0 ),new IntegerNumeric(243.0, 73.0, -1.0 ),new IntegerNumeric(205.0, 21.0, -1.0 )));

stat.clusters = [
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "CA",
    "http://registry.easytv.eu/application/tts/speed": 38,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#ee6243",
    "http://registry.easytv.eu/common/subtitles": "EN",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#b23b41",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 94,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "EN",
    "http://registry.easytv.eu/common/signLanguage": "EN",
    "http://registry.easytv.eu/common/content/audio/language": "GR",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#39dc2",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "serif",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#18d4dc",
    "http://registry.easytv.eu/application/tts/language": "ES",
    "http://registry.easytv.eu/common/displayContrast": 52,
    "http://registry.easytv.eu/application/tts/volume": 24,
    "http://registry.easytv.eu/common/content/audio/volume": 80,
    "http://registry.easytv.eu/application/cs/audio/volume": 39,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 58,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 23,
    "http://registry.easytv.eu/application/tts/audioQuality": 90,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "ES",
    "http://registry.easytv.eu/application/tts/speed": 67,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#98cf15",
    "http://registry.easytv.eu/common/subtitles": "EN",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#cf375",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 71,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "EN",
    "http://registry.easytv.eu/common/signLanguage": "GR",
    "http://registry.easytv.eu/common/content/audio/language": "GR",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#81efd",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "fantasy",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#d62fec",
    "http://registry.easytv.eu/application/tts/language": "GR",
    "http://registry.easytv.eu/common/displayContrast": 75,
    "http://registry.easytv.eu/application/tts/volume": 44,
    "http://registry.easytv.eu/common/content/audio/volume": 35,
    "http://registry.easytv.eu/application/cs/audio/volume": 17,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 63,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 25,
    "http://registry.easytv.eu/application/tts/audioQuality": 60,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "ES",
    "http://registry.easytv.eu/application/tts/speed": 27,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#a27b52",
    "http://registry.easytv.eu/common/subtitles": "ES",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#79ff8",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 88,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "GR",
    "http://registry.easytv.eu/common/signLanguage": "IT",
    "http://registry.easytv.eu/common/content/audio/language": "IT",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#d8a0af",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "sans-serif",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#9f54e5",
    "http://registry.easytv.eu/application/tts/language": "CA",
    "http://registry.easytv.eu/common/displayContrast": 11,
    "http://registry.easytv.eu/application/tts/volume": 25,
    "http://registry.easytv.eu/common/content/audio/volume": 61,
    "http://registry.easytv.eu/application/cs/audio/volume": 64,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 6,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 24,
    "http://registry.easytv.eu/application/tts/audioQuality": 79,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "IT",
    "http://registry.easytv.eu/application/tts/speed": 12,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#12a382",
    "http://registry.easytv.eu/common/subtitles": "CA",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#bf60d4",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 2,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "IT",
    "http://registry.easytv.eu/common/signLanguage": "EN",
    "http://registry.easytv.eu/common/content/audio/language": "GR",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#10fbea",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "cursive",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#45ad98",
    "http://registry.easytv.eu/application/tts/language": "IT",
    "http://registry.easytv.eu/common/displayContrast": 1,
    "http://registry.easytv.eu/application/tts/volume": 85,
    "http://registry.easytv.eu/common/content/audio/volume": 43,
    "http://registry.easytv.eu/application/cs/audio/volume": 80,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 26,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 24,
    "http://registry.easytv.eu/application/tts/audioQuality": 80,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "ES",
    "http://registry.easytv.eu/application/tts/speed": 62,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#2dac6a",
    "http://registry.easytv.eu/common/subtitles": "GR",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#f298df",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 57,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "EN",
    "http://registry.easytv.eu/common/signLanguage": "IT",
    "http://registry.easytv.eu/common/content/audio/language": "CA",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#73f191",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "serif",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#ac2f63",
    "http://registry.easytv.eu/application/tts/language": "ES",
    "http://registry.easytv.eu/common/displayContrast": 3,
    "http://registry.easytv.eu/application/tts/volume": 68,
    "http://registry.easytv.eu/common/content/audio/volume": 89,
    "http://registry.easytv.eu/application/cs/audio/volume": 74,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 50,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 24,
    "http://registry.easytv.eu/application/tts/audioQuality": 63,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "IT",
    "http://registry.easytv.eu/application/tts/speed": 91,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#6fca4d",
    "http://registry.easytv.eu/common/subtitles": "GR",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#b4104f",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 1,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "GR",
    "http://registry.easytv.eu/common/signLanguage": "ES",
    "http://registry.easytv.eu/common/content/audio/language": "CA",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#21bb3b",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "monospace",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#ec59e2",
    "http://registry.easytv.eu/application/tts/language": "GR",
    "http://registry.easytv.eu/common/displayContrast": 94,
    "http://registry.easytv.eu/application/tts/volume": 24,
    "http://registry.easytv.eu/common/content/audio/volume": 7,
    "http://registry.easytv.eu/application/cs/audio/volume": 53,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 4,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 26,
    "http://registry.easytv.eu/application/tts/audioQuality": 20,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "CA",
    "http://registry.easytv.eu/application/tts/speed": 42,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#f3f39a",
    "http://registry.easytv.eu/common/subtitles": "ES",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#c7f824",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 37,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "CA",
    "http://registry.easytv.eu/common/signLanguage": "CA",
    "http://registry.easytv.eu/common/content/audio/language": "GR",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#1135e1",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "serif",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#2047",
    "http://registry.easytv.eu/application/tts/language": "ES",
    "http://registry.easytv.eu/common/displayContrast": 37,
    "http://registry.easytv.eu/application/tts/volume": 59,
    "http://registry.easytv.eu/common/content/audio/volume": 95,
    "http://registry.easytv.eu/application/cs/audio/volume": 78,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 71,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 23,
    "http://registry.easytv.eu/application/tts/audioQuality": 81,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "CA",
    "http://registry.easytv.eu/application/tts/speed": 98,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#3f8fcd",
    "http://registry.easytv.eu/common/subtitles": "CA",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#c9a6ca",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 1,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "CA",
    "http://registry.easytv.eu/common/signLanguage": "GR",
    "http://registry.easytv.eu/common/content/audio/language": "IT",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#379848",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "fantasy",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#58e7cc",
    "http://registry.easytv.eu/application/tts/language": "GR",
    "http://registry.easytv.eu/common/displayContrast": 28,
    "http://registry.easytv.eu/application/tts/volume": 90,
    "http://registry.easytv.eu/common/content/audio/volume": 47,
    "http://registry.easytv.eu/application/cs/audio/volume": 44,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 95,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 23,
    "http://registry.easytv.eu/application/tts/audioQuality": 56,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "CA",
    "http://registry.easytv.eu/application/tts/speed": 81,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#1e786e",
    "http://registry.easytv.eu/common/subtitles": "CA",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#622bd3",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 53,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "GR",
    "http://registry.easytv.eu/common/signLanguage": "ES",
    "http://registry.easytv.eu/common/content/audio/language": "GR",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#df413",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "monospace",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#a9487",
    "http://registry.easytv.eu/application/tts/language": "IT",
    "http://registry.easytv.eu/common/displayContrast": 36,
    "http://registry.easytv.eu/application/tts/volume": 28,
    "http://registry.easytv.eu/common/content/audio/volume": 37,
    "http://registry.easytv.eu/application/cs/audio/volume": 12,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 77,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 24,
    "http://registry.easytv.eu/application/tts/audioQuality": 67,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "EN",
    "http://registry.easytv.eu/application/tts/speed": 72,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#e2dc73",
    "http://registry.easytv.eu/common/subtitles": "GR",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#8c099",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 74,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "GR",
    "http://registry.easytv.eu/common/signLanguage": "CA",
    "http://registry.easytv.eu/common/content/audio/language": "IT",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#c3cfce",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "fantasy",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#42aa57",
    "http://registry.easytv.eu/application/tts/language": "IT",
    "http://registry.easytv.eu/common/displayContrast": 3,
    "http://registry.easytv.eu/application/tts/volume": 61,
    "http://registry.easytv.eu/common/content/audio/volume": 15,
    "http://registry.easytv.eu/application/cs/audio/volume": 49,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 6,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 25,
    "http://registry.easytv.eu/application/tts/audioQuality": 60,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}},
{"user_preferences": {"default": {"preferences": {
    "http://registry.easytv.eu/application/cs/cc/audioSubtitles": false,
    "http://registry.easytv.eu/application/cs/audio/track": "GR",
    "http://registry.easytv.eu/application/tts/speed": 51,
    "http://registry.easytv.eu/application/cs/accessibility/textDetection": false,
    "http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor": "#1c49a2",
    "http://registry.easytv.eu/common/subtitles": "IT",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/color": "#a067d3",
    "http://registry.easytv.eu/application/cs/accessibility/imageMagnification/scale": 80,
    "http://registry.easytv.eu/application/cs/cc/subtitles/language": "EN",
    "http://registry.easytv.eu/common/signLanguage": "IT",
    "http://registry.easytv.eu/common/content/audio/language": "ES",
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontColor": "#8ee9c7",
    "http://registry.easytv.eu/common/display/screen/enhancement/font/type": "cursive",
    "http://registry.easytv.eu/common/display/screen/enhancement/background": "#c73d85",
    "http://registry.easytv.eu/application/tts/language": "GR",
    "http://registry.easytv.eu/common/displayContrast": 76,
    "http://registry.easytv.eu/application/tts/volume": 5,
    "http://registry.easytv.eu/common/content/audio/volume": 27,
    "http://registry.easytv.eu/application/cs/audio/volume": 60,
    "http://registry.easytv.eu/application/cs/cc/subtitles/fontSize": 7,
    "http://registry.easytv.eu/common/display/screen/enhancement/font/size": 26,
    "http://registry.easytv.eu/application/tts/audioQuality": 25,
    "http://registry.easytv.eu/application/cs/accessibility/faceDetection": false,
    "http://registry.easytv.eu/application/cs/audio/audioDescription": false
}}}}

];

module.exports = stat;
