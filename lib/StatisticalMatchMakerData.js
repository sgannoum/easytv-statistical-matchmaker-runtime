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

//Generated 11 Oct 17:59:54


var Numeric = require("./DimensionHandlers").Numeric
var IntegerNumeric = require("./DimensionHandlers").IntegerNumeric
var Nominal = require("./DimensionHandlers").Nominal
var Ordinal = require("./DimensionHandlers").Ordinal
var SymmetricBinary = require("./DimensionHandlers").SymmetricBinary
var Color = require("./DimensionHandlers").Color

var stat = {}
stat.entryCount = 0;
stat.dimensionsHandlers = new Map();
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/font/size", new IntegerNumeric(4.9E-324, 1.7976931348623157E308, 1.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/font/type", new Nominal(["fantasy","monospace","sans-serif","serif","cursive"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/font/color", new Color(new IntegerNumeric(4.9E-324, 1.7976931348623157E308, -1.0 ),new IntegerNumeric(4.9E-324, 1.7976931348623157E308, -1.0 ),new IntegerNumeric(4.9E-324, 1.7976931348623157E308, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/background", new Color(new IntegerNumeric(4.9E-324, 1.7976931348623157E308, -1.0 ),new IntegerNumeric(4.9E-324, 1.7976931348623157E308, -1.0 ),new IntegerNumeric(4.9E-324, 1.7976931348623157E308, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/content/audio/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/cursor/Size", new Numeric(1.5, 1.0, -1.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/audio/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/audio/speed", new IntegerNumeric(3.0, 0.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/audio/volume", new IntegerNumeric(90.0, 13.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/audio/voice", new Nominal(["male","female"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/tts/audio/quality", new IntegerNumeric(4.9E-324, 1.7976931348623157E308, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/font/size", new IntegerNumeric(12.0, 12.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/font/color", new Color(new IntegerNumeric(255.0, 255.0, -1.0 ),new IntegerNumeric(255.0, 255.0, -1.0 ),new IntegerNumeric(255.0, 255.0, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/subtitles/background/color", new Color(new IntegerNumeric(4.9E-324, 0.0, -1.0 ),new IntegerNumeric(4.9E-324, 0.0, -1.0 ),new IntegerNumeric(4.9E-324, 0.0, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/cc/audio/subtitle", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/ui/audioAssistanceBasedOnTTS", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/ui/text/size", new Nominal(["16","20","24"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/ui/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/ui/vibration/touch", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/ui/text/magnification/scale", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/eq/bass", new IntegerNumeric(10.0, -4.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/eq/mids", new IntegerNumeric(5.0, -8.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/eq/highs", new IntegerNumeric(5.0, -12.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/volume", new IntegerNumeric(33.0, 13.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/audio/track", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/control/gaze", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/control/voice", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/control/csGazeAndGestureControlType", new Nominal(["none","gaze_control","gesture_control"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/display/screen/enhancement/cursor/color", new Color(new IntegerNumeric(255.0, 255.0, -1.0 ),new IntegerNumeric(255.0, 255.0, -1.0 ),new IntegerNumeric(255.0, 255.0, -1.0 )));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiTextSize", new Numeric(1.5, 1.0, -1.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiLanguage", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/enhancement/image/type", new Nominal(["none","face-detection","image-magnification"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/audio/description", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/detection/sound", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/detection/text", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/detection/face", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/detection/character", new SymmetricBinary(-1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/magnification/scale", new Numeric(2.5, 2.0, -1.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/application/cs/accessibility/sign/language", new Nominal(["en","es","ca","gr","it"], -1.0));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/volume", new IntegerNumeric(90.0, 13.0, 0.0 ));
stat.dimensionsHandlers.set("http://registry.easytv.eu/common/contrast", new IntegerNumeric(100.0, 100.0, 0.0 ));

stat.clusters = [
{           
			"user_preferences": {
                "default": {
                    "preferences": {
                        "http://registry.easytv.eu/common/volume": 36,
                        "http://registry.easytv.eu/common/contrast": 100,
                        "http://registry.easytv.eu/application/control/voice": true,
                        "http://registry.easytv.eu/application/cs/audio/track": "en",
                        "http://registry.easytv.eu/application/cs/ui/language": "en",
                        "http://registry.easytv.eu/application/cs/audio/volume": 27,
                        "http://registry.easytv.eu/application/cs/ui/text/size": "20",
                        "http://registry.easytv.eu/application/tts/audio/speed": 3,
                        "http://registry.easytv.eu/application/tts/audio/voice": "female",
                        "http://registry.easytv.eu/application/cs/audio/eq/bass": 10,
                        "http://registry.easytv.eu/application/cs/audio/eq/mids": -8,
                        "http://registry.easytv.eu/application/tts/audio/volume": 21,
                        "http://registry.easytv.eu/application/cs/audio/eq/highs": 5,
                        "http://registry.easytv.eu/common/content/audio/language": "ca",
                        "http://registry.easytv.eu/application/tts/audio/language": "en",
                        "http://registry.easytv.eu/application/cs/cc/audio/subtitle": true,
                        "http://registry.easytv.eu/application/cs/ui/vibration/touch": true,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/language": "ca",
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/size": 12,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/color": "#ffffff",
                        "http://registry.easytv.eu/application/cs/accessibility/sign/language": "es",
                        "http://registry.easytv.eu/application/cs/ui/text/magnification/scale": true,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/text": true,
                        "http://registry.easytv.eu/application/cs/ui/audioAssistanceBasedOnTTS": true,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/sound": true,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/background/color": "#000000",
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/Size": 1.5,
                        "http://registry.easytv.eu/application/cs/accessibility/audio/description": true,
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/color": "#ffffff",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlType": "gaze_control",
                        "http://registry.easytv.eu/application/cs/accessibility/detection/character": true,
                        "http://registry.easytv.eu/application/cs/accessibility/magnification/scale": 2,
                        "http://registry.easytv.eu/application/cs/accessibility/enhancement/image/type": "face-detection",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiLanguage": "ca",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiTextSize": 1.5
                    }
                }
            }
},
{
            "user_preferences": {
                "default": {
                    "preferences": {
                        "http://registry.easytv.eu/common/volume": 90,
                        "http://registry.easytv.eu/common/contrast": 100,
                        "http://registry.easytv.eu/application/control/voice": true,
                        "http://registry.easytv.eu/application/cs/audio/track": "ca",
                        "http://registry.easytv.eu/application/cs/ui/language": "en",
                        "http://registry.easytv.eu/application/cs/audio/volume": 33,
                        "http://registry.easytv.eu/application/cs/ui/text/size": "20",
                        "http://registry.easytv.eu/application/tts/audio/speed": 0,
                        "http://registry.easytv.eu/application/tts/audio/voice": "male",
                        "http://registry.easytv.eu/application/cs/audio/eq/bass": -4,
                        "http://registry.easytv.eu/application/cs/audio/eq/mids": 5,
                        "http://registry.easytv.eu/application/tts/audio/volume": 90,
                        "http://registry.easytv.eu/application/cs/audio/eq/highs": -12,
                        "http://registry.easytv.eu/common/content/audio/language": "en",
                        "http://registry.easytv.eu/application/tts/audio/language": "en",
                        "http://registry.easytv.eu/application/cs/cc/audio/subtitle": false,
                        "http://registry.easytv.eu/application/cs/ui/vibration/touch": true,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/language": "en",
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/size": 12,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/color": "#ffffff",
                        "http://registry.easytv.eu/application/cs/accessibility/sign/language": "en",
                        "http://registry.easytv.eu/application/cs/ui/text/magnification/scale": true,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/text": true,
                        "http://registry.easytv.eu/application/cs/ui/audioAssistanceBasedOnTTS": true,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/sound": true,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/background/color": "#000000",
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/Size": 1,
                        "http://registry.easytv.eu/application/cs/accessibility/audio/description": false,
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/color": "#ffffff",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlType": "gesture_control",
                        "http://registry.easytv.eu/application/cs/accessibility/detection/character": true,
                        "http://registry.easytv.eu/application/cs/accessibility/magnification/scale": 2,
                        "http://registry.easytv.eu/application/cs/accessibility/enhancement/image/type": "face-detection",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiLanguage": "en",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiTextSize": 1
                    }
                }
            }
},
{        
            "user_preferences": {
                "default": {
                    "preferences": {
                        "http://registry.easytv.eu/common/volume": 13,
                        "http://registry.easytv.eu/common/contrast": 100,
                        "http://registry.easytv.eu/application/control/voice": true,
                        "http://registry.easytv.eu/application/cs/audio/track": "en",
                        "http://registry.easytv.eu/application/cs/ui/language": "en",
                        "http://registry.easytv.eu/application/cs/audio/volume": 13,
                        "http://registry.easytv.eu/application/cs/ui/text/size": "16",
                        "http://registry.easytv.eu/application/tts/audio/speed": 0,
                        "http://registry.easytv.eu/application/tts/audio/voice": "male",
                        "http://registry.easytv.eu/application/cs/audio/eq/bass": 0,
                        "http://registry.easytv.eu/application/cs/audio/eq/mids": 0,
                        "http://registry.easytv.eu/application/tts/audio/volume": 13,
                        "http://registry.easytv.eu/application/cs/audio/eq/highs": 0,
                        "http://registry.easytv.eu/common/content/audio/language": "en",
                        "http://registry.easytv.eu/application/tts/audio/language": "en",
                        "http://registry.easytv.eu/application/cs/cc/audio/subtitle": false,
                        "http://registry.easytv.eu/application/cs/ui/vibration/touch": false,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/language": "en",
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/size": 12,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/color": "#ffffff",
                        "http://registry.easytv.eu/application/cs/accessibility/sign/language": "en",
                        "http://registry.easytv.eu/application/cs/ui/text/magnification/scale": false,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/text": true,
                        "http://registry.easytv.eu/application/cs/ui/audioAssistanceBasedOnTTS": false,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/sound": true,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/background/color": "#000000",
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/Size": 1,
                        "http://registry.easytv.eu/application/cs/accessibility/audio/description": false,
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/color": "#ffffff",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlType": "gesture_control",
                        "http://registry.easytv.eu/application/cs/accessibility/detection/character": true,
                        "http://registry.easytv.eu/application/cs/accessibility/magnification/scale": 2.5,
                        "http://registry.easytv.eu/application/cs/accessibility/enhancement/image/type": "image-magnification",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiLanguage": "en",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiTextSize": 1
                    }
                }
            }
        
},
{        
            "user_preferences": {
                "default": {
                    "preferences": {
                        "http://registry.easytv.eu/common/volume": 22,
                        "http://registry.easytv.eu/common/contrast": 100,
                        "http://registry.easytv.eu/application/control/voice": true,
                        "http://registry.easytv.eu/application/cs/audio/track": "en",
                        "http://registry.easytv.eu/application/cs/ui/language": "en",
                        "http://registry.easytv.eu/application/cs/audio/volume": 22,
                        "http://registry.easytv.eu/application/cs/ui/text/size": "16",
                        "http://registry.easytv.eu/application/tts/audio/speed": 3,
                        "http://registry.easytv.eu/application/tts/audio/voice": "male",
                        "http://registry.easytv.eu/application/cs/audio/eq/bass": 0,
                        "http://registry.easytv.eu/application/cs/audio/eq/mids": 0,
                        "http://registry.easytv.eu/application/tts/audio/volume": 32,
                        "http://registry.easytv.eu/application/cs/audio/eq/highs": 0,
                        "http://registry.easytv.eu/common/content/audio/language": "gr",
                        "http://registry.easytv.eu/application/tts/audio/language": "en",
                        "http://registry.easytv.eu/application/cs/cc/audio/subtitle": false,
                        "http://registry.easytv.eu/application/cs/ui/vibration/touch": false,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/language": "en",
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/size": 12,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/font/color": "#ffffff",
                        "http://registry.easytv.eu/application/cs/accessibility/sign/language": "en",
                        "http://registry.easytv.eu/application/cs/ui/text/magnification/scale": false,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/text": false,
                        "http://registry.easytv.eu/application/cs/ui/audioAssistanceBasedOnTTS": false,
                        "http://registry.easytv.eu/application/cs/accessibility/detection/sound": false,
                        "http://registry.easytv.eu/application/cs/cc/subtitles/background/color": "#000000",
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/Size": 1,
                        "http://registry.easytv.eu/application/cs/accessibility/audio/description": false,
                        "http://registry.easytv.eu/common/display/screen/enhancement/cursor/color": "#ffffff",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlType": "gesture_control",
                        "http://registry.easytv.eu/application/cs/accessibility/detection/character": false,
                        "http://registry.easytv.eu/application/cs/accessibility/magnification/scale": 2,
                        "http://registry.easytv.eu/application/cs/accessibility/enhancement/image/type": "none",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiLanguage": "en",
                        "http://registry.easytv.eu/application/control/csGazeAndGestureControlCursorGuiTextSize": 1
                    }
                }
            }
        
}

];

module.exports = stat;
