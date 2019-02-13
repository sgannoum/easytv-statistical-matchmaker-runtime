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

//Generated 07 okt 12:12:40
var fluid = fluid || require("universal");
var stat = fluid.registerNamespace("gpii.matchMaker.statistical");
stat.entryCount = 202;
stat.clusters = [
	{
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"sayAllStyle": 1,
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/common": {
			"readingUnit": "line"
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 80,
			"auditoryOutLanguage": "en"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 25,
			"speech.espeak.pitch": 50
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 0,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "en-westindies",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 25,
			"voices.default.average-pitch": 50
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 50,
			"punctuationVerbosity": "none",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 20,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 5
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "en"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 375
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 80,
			"tts_default_pitch": 250
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 80,
			"auditoryOutLanguage": "en"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-wi",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 55,
			"speech.espeak.pitch": 60,
			"presentation.reportTooltips": false
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 0,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "en-westindies",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 55,
			"voices.default.average-pitch": 60,
			"presentToolTips": false
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 80,
			"auditoryOutLanguage": "en",
			"speakTutorialMessages": false
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-wi",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 40,
			"speech.espeak.pitch": 70,
			"presentation.reportHelpBalloons": false
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 0,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "en-westindies",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 4,
			"voices.default.average-pitch": 70,
			"enableTutorialMessages": false
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 90,
			"auditoryOutLanguage": "de"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 10,
			"speech.espeak.pitch": 90
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 625,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 10,
			"voices.default.average-pitch": 90
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 90,
			"punctuationVerbosity": "most",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 225,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 9,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "de"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 150
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 90,
			"tts_default_pitch": 450
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 90,
			"auditoryOutLanguage": "de"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 25,
			"speech.espeak.pitch": 100,
			"presentation.reportTooltips": true
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 625,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 25,
			"voices.default.average-pitch": 100,
			"presentToolTips": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 90,
			"auditoryOutLanguage": "de"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 10,
			"speech.espeak.pitch": 10,
			"presentation.reportHelpBalloons": false
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 625,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 1,
			"voices.default.average-pitch": 10,
			"enableTutorialMessages": false
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 100,
			"auditoryOutLanguage": "de"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 6,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 95,
			"speech.espeak.pitch": 20
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 125,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 95,
			"voices.default.average-pitch": 20
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 100,
			"punctuationVerbosity": "all",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 25,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 2,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "de_de"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 1425
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 100,
			"tts_default_pitch": 100
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 100,
			"auditoryOutLanguage": "de"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 6,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 95,
			"speech.espeak.pitch": 30,
			"presentation.reportTooltips": false
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 125,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 95,
			"voices.default.average-pitch": 30,
			"presentToolTips": false
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 100,
			"auditoryOutLanguage": "de",
			"speakTutorialMessages": true
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 645,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 80,
			"speech.espeak.pitch": 40,
			"presentation.reportHelpBalloons": true
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 125,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 8,
			"voices.default.average-pitch": 40,
			"enableTutorialMessages": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 120,
			"auditoryOutLanguage": "el"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 13,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 80,
			"speech.espeak.pitch": 50
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 25,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 8,
			"voices.default.average-pitch": 50
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "el",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "el",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 120,
			"punctuationVerbosity": "none",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 3,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 5,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "el"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 12
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 120,
			"tts_default_pitch": 250
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 120,
			"auditoryOutLanguage": "el"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 13,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 65,
			"speech.espeak.pitch": 60,
			"presentation.reportTooltips": true
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 25,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 65,
			"voices.default.average-pitch": 60,
			"presentToolTips": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 120,
			"auditoryOutLanguage": "el",
			"speakTutorialMessages": true
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 13,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 50,
			"speech.espeak.pitch": 70,
			"presentation.reportHelpBalloons": true
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 25,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 5,
			"voices.default.average-pitch": 70,
			"enableTutorialMessages": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 135,
			"auditoryOutLanguage": "es"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 18,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 65,
			"speech.espeak.pitch": 80
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 3438,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 65,
			"voices.default.average-pitch": 80
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "es",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "es",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 135,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 338,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 8,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "es"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 975
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 135,
			"tts_default_pitch": 400
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 135,
			"auditoryOutLanguage": "es"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 18,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 35,
			"speech.espeak.pitch": 90,
			"presentation.reportTooltips": false
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 3438,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 35,
			"voices.default.average-pitch": 90,
			"presentToolTips": false
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 135,
			"auditoryOutLanguage": "es",
			"speakTutorialMessages": false
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 18,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 20,
			"speech.espeak.pitch": 100,
			"presentation.reportHelpBalloons": false
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 3438,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 2,
			"voices.default.average-pitch": 100,
			"enableTutorialMessages": false
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 150,
			"auditoryOutLanguage": "es"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 23,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 50,
			"speech.espeak.pitch": 10
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 4375,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 5,
			"voices.default.average-pitch": 10
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "es",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "es",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 150,
			"punctuationVerbosity": "most",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 375,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 5,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "es_es"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 75
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 150,
			"tts_default_pitch": 100
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 160,
			"auditoryOutLanguage": "fr"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 26,
			"speech.espeak.voice": "fr",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 35,
			"speech.espeak.pitch": 40
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 50,
			"voices.default.family.locale": "fr",
			"voices.default.family.name": "french",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 35,
			"voices.default.average-pitch": 40
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "fr",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "fr",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 99,
			"punctuationVerbosity": "all",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 403,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 4,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "fr"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 525
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 160,
			"tts_default_pitch": 200
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 173,
			"auditoryOutLanguage": "it"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 30,
			"speech.espeak.voice": "it",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 20,
			"speech.espeak.pitch": 50
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 5433,
			"voices.default.family.locale": "it",
			"voices.default.family.name": "italian",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 2,
			"voices.default.average-pitch": 50
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "it",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "it",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 1075,
			"punctuationVerbosity": "none",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 433,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 5,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "it"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 3
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 173,
			"tts_default_pitch": 250
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 184,
			"auditoryOutLanguage": "nl"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 34,
			"speech.espeak.voice": "nl",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 5,
			"speech.espeak.pitch": 60
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 58,
			"voices.default.family.locale": "nl",
			"voices.default.family.name": "dutch",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 5,
			"voices.default.average-pitch": 60
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "nl",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "nl",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 1145,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 46,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 6,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "no"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 75
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 184,
			"tts_default_pitch": 300
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 200,
			"auditoryOutLanguage": "zh"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 39,
			"speech.espeak.voice": "zh",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 90,
			"speech.espeak.pitch": 70
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 6333,
			"voices.default.family.locale": "zh",
			"voices.default.family.name": "mandarin",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 9,
			"voices.default.average-pitch": 70
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "zh",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "zh",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 125,
			"punctuationVerbosity": "most",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 5,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 7,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "zh_cn"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 135
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 200,
			"tts_default_pitch": 350
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 220,
			"auditoryOutLanguage": "en"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 45,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 75,
			"speech.espeak.pitch": 80
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 70,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "default",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 75,
			"voices.default.average-pitch": 80
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "en",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "en",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 1376,
			"punctuationVerbosity": "all",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 55,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 8,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "en"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 1125
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 220,
			"tts_default_pitch": 400
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 250,
			"auditoryOutLanguage": "en"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 55,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 60,
			"speech.espeak.pitch": 90
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 80,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 6,
			"voices.default.average-pitch": 90
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "en",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "en",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 157,
			"punctuationVerbosity": "none",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 625,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 9,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "en_gb"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 9
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 250,
			"tts_default_pitch": 450
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 280,
			"auditoryOutLanguage": "en-us"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 65,
			"speech.espeak.voice": "en\\en-us",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 45,
			"speech.espeak.pitch": 10
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 90,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english-us",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 45,
			"voices.default.average-pitch": 100
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "en",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "en",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 176,
			"punctuationVerbosity": "some",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 7,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 10,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "en_us"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 675
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 280,
			"tts_default_pitch": 500
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 310,
			"auditoryOutLanguage": "de"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 74,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 30,
			"speech.espeak.pitch": 10
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 3,
			"voices.default.average-pitch": 10
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 195,
			"punctuationVerbosity": "most",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 775,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 1,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "de"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 45
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 310,
			"tts_default_pitch": 50
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 320,
			"auditoryOutLanguage": "de"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 77,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 15,
			"speech.espeak.pitch": 20
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 15,
			"voices.default.average-pitch": 20
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "de",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 202,
			"punctuationVerbosity": "all",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 8,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 2,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "de_de"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 225
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 320,
			"tts_default_pitch": 100
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 360,
			"auditoryOutLanguage": "el"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 90,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 100,
			"speech.espeak.pitch": 30
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 10,
			"voices.default.average-pitch": 30
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "el",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "el",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 360,
			"punctuationVerbosity": "none",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 9,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 3,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "el"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 15
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 2275,
			"tts_default_pitch": 150
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 390,
			"auditoryOutLanguage": "es"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 100,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 85,
			"speech.espeak.pitch": 40
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 85,
			"voices.default.average-pitch": 40
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
			"locale": "es",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "es",
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 2475,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 975,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 4,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "es"
		},
		"http://registry.gpii.net/applications/com.android.audioManager": {
			"STREAM_MUSIC": 1275
		},
		"http://registry.gpii.net/applications/com.android.settings.secure": {
			"tts_default_rate": 390,
			"tts_default_pitch": 200
		}
	},
	{
		"http://registry.gpii.net/common": {
			"speechRate": 492,
			"auditoryOutLanguage": "en"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 27,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 70,
			"speech.espeak.pitch": 50,
			"speech.espeak.rateBoost": true
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 7,
			"voices.default.average-pitch": 50
		}
	},
	{
		"http://registry.gpii.net/applications/com.tpvision.gpiitvproxy": {
			"audioDescription": 1
		},
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 200,
			"highContrastEnabled": true,
			"highContrastTheme": "yellow-black",
			"cursorSize": 3,
			"punctuationVerbosity": "all"
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3871,
			"speech.symbolLevel": 300
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableSpeech": true,
			"voices.default.rate": 6333,
			"verbalizePunctuationStyle": 0
		},
		"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
			"contrastTheme": "yellow-black"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani"
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"cloud4allVoiceProfile-GlobalContext.Speed": 12875,
			"cloud4allVoiceProfile-GlobalContext.Punctuation": 3,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 20
		}
	},
	{
		"http://registry.gpii.net/applications/com.tpvision.gpiitvproxy": {
			"audioDescription": 1
		},
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 189,
			"highContrastEnabled": true,
			"highContrastTheme": "yellow-black",
			"cursorSize": 5,
			"punctuationVerbosity": "all",
			"fontSize": 24
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3516,
			"speech.symbolLevel": 300
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableSpeech": true,
			"voices.default.rate": 5967,
			"verbalizePunctuationStyle": 0
		},
		"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
			"fontSize": "big",
			"contrastTheme": "yellow-black",
			"buttonSize": "big"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani"
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"cloud4allVoiceProfile-GlobalContext.Speed": 11500,
			"cloud4allVoiceProfile-GlobalContext.Punctuation": 3,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 29,
			"text-scaling-factor": 18
		}
	},
	{
		"http://registry.gpii.net/applications/com.tpvision.gpiitvproxy": {
			"audioDescription": 1
		},
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 230,
			"highContrastEnabled": true,
			"highContrastTheme": "white-black",
			"cursorSize": 5,
			"mouseTrailing": 5,
			"punctuationVerbosity": "some",
			"fontSize": 24
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 4839,
			"speech.symbolLevel": 100
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"enableSpeech": true,
			"voices.default.rate": 7333,
			"verbalizePunctuationStyle": 2
		},
		"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
			"fontSize": "big",
			"contrastTheme": "yellow-black",
			"buttonSize": "big"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani"
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"cloud4allVoiceProfile-GlobalContext.Speed": 16625,
			"cloud4allVoiceProfile-GlobalContext.Punctuation": 1,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 29,
			"text-scaling-factor": 18
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"fontSize": "medium",
			"highContrastEnabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"_disabled": true,
			"invertColours": false,
			"magnifierEnabled": true,
			"magnification": 11
		},
		"http://registry.gpii.net/common": {
			"invertColours": false
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 110,
			"MagnificationMode": 2,
			"Invert": false
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 11,
			"invert-lightness": false,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		}
	},
	{
		"http://registry.gpii.net/common": {
			"cursorSize": 2
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 24,
			"text-scaling-factor": 10
		}
	},
	{
		"http://registry.gpii.net/common": {
			"cursorSize": 67
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 32,
			"text-scaling-factor": 13
		}
	},
	{
		"http://registry.gpii.net/common": {
			"cursorSize": 9
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow_xl.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_xl.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_xl.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_xl.ani",
			"No": "%systemroot%\\cursors\\aero_unavail_xl.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_xl.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_xl.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_xl.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_xl.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_xl.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_xl.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up_xl.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_xl.ani"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 42,
			"text-scaling-factor": 17
		}
	},
	{
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 26,
			"text-scaling-factor": 116
		},
		"http://registry.gpii.net/common": {
			"fontSize": 14
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"fontSize": "large"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"fontSize": 19
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 116
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 28
		},
		"http://registry.gpii.net/applications/eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal"
		}
	},
	{
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 32,
			"text-scaling-factor": 125
		},
		"http://registry.gpii.net/common": {
			"fontSize": 15
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"fontSize": "large"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"fontSize": 20
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 125
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 30
		},
		"http://registry.gpii.net/applications/eu.singularlogic.pixelsense.sociable": {
			"fontSize": "large"
		}
	},
	{
		"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"cursor-size": 40,
			"text-scaling-factor": 166
		},
		"http://registry.gpii.net/common": {
			"fontSize": 20
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"fontSize": "x-large"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"fontSize": 27
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 166
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 40
		},
		"http://registry.gpii.net/applications/eu.singularlogic.pixelsense.sociable": {
			"fontSize": "large"
		}
	},
	{
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"language": "english",
			"fontSize": "large",
			"theme": "black-white"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"_disabled": true,
			"highContrastTheme": "black-yellow",
			"language": "en"
		},
		"http://registry.gpii.net/common": {
			"highContrastEnabled": true,
			"language": "en"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"text-scaling-factor": 10,
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast"
		},
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"highContrastEnabled": true,
			"highContrastTheme": "black-yellow"
		},
		"http://registry.gpii.net/applications/net.opendirective.maavis": {
			"theme": "hc"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"highContrastEnabled": true,
			"screenReaderTTSEnabled": false,
			"fontSize": "normal"
		}
	},
	{
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"_disabled": true,
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "fullscreen"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 160,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 16,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 16
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 384,
			"map.string.iconsize.$t": 105
		},
		"http://registry.gpii.net/common": {
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "fullscreen"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"_disabled": true,
			"magnifierEnabled": true,
			"magnification": 320,
			"magnifierPosition": "fullscreen"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 320,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 320
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50,
			"map.string.iconsize.$t": 105
		},
		"http://registry.gpii.net/common": {
			"magnifierEnabled": true,
			"magnification": 320,
			"magnifierPosition": "fullscreen"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"_disabled": true,
			"magnifierEnabled": true,
			"magnification": 20,
			"magnifierPosition": "bottomhalf"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 200,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 20,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 20
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 48
		},
		"http://registry.gpii.net/common": {
			"magnifierEnabled": true,
			"magnification": 20,
			"magnifierPosition": "bottomhalf"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 1,
			"_disabled": true,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 160,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 160
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"http://registry.gpii.net/common": {
			"magnifierEnabled": true,
			"magnification": 160,
			"magnifierPosition": "bottomhalf"
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 160,
			"magnifierPosition": "bottomhalf"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"_disabled": true,
			"magnifierEnabled": true,
			"magnification": 25,
			"magnifierPosition": "lens"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 250,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 25,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 25
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"http://registry.gpii.net/common": {
			"magnifierEnabled": true,
			"magnification": 25,
			"magnifierPosition": "lens"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"_disabled": true,
			"magnifierEnabled": true,
			"magnification": 175,
			"magnifierPosition": "lens"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 175,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 175,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 175
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 42
		},
		"http://registry.gpii.net/common": {
			"magnifierEnabled": true,
			"magnification": 175,
			"magnifierPosition": "lens"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 3,
			"_disabled": true,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 160,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"fontScale": 160
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"http://registry.gpii.net/common": {
			"magnifierEnabled": true,
			"magnification": 160,
			"magnifierPosition": "lens"
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 160,
			"magnifierPosition": "lens"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
			"locale": "en",
			"fontScale": 10
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"language": "english",
			"volume": 50,
			"fontSize": "medium",
			"theme": "black-white",
			"hapticFeedback": 2
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"_disabled": true,
			"language": "en"
		},
		"http://registry.gpii.net/common": {
			"highContrastEnabled": false,
			"language": "en"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"text-scaling-factor": 10,
			"gtk-theme": "adwaita",
			"icon-theme": "gnome"
		},
		"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 24,
			"map.string.theme.$t": "none",
			"map.string.iconsize.$t": 70
		},
		"http://registry.gpii.net/applications/net.opendirective.maavis": {
			"theme": "colour"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"highContrastEnabled": false,
			"screenReaderTTSEnabled": false,
			"fontSize": "normal"
		}
	},
	{
		"http://registry.gpii.net/applications/org.nvda-project": {
			"speech.espeak.voice": "de",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "de",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"language": "german",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/common": {
			"language": "de"
		},
		"http://registry.gpii.net/applications/eu.gpii.olb": {
			"_disabled": "unknown",
			"language": "de"
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"_disabled": "unknown",
			"voices.default.family": "de"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouse": {
			"_disabled": "unknown",
			"language": "de"
		},
		"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
			"_disabled": "unknown",
			"language": "de"
		}
	},
	{
		"http://registry.gpii.net/applications/org.nvda-project": {
			"speech.espeak.voice": "el",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "el",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"language": "greek",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/common": {
			"language": "el"
		},
		"http://registry.gpii.net/applications/eu.gpii.olb": {
			"_disabled": "unknown",
			"language": "el"
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"_disabled": "unknown",
			"voices.default.family": "el"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouse": {
			"_disabled": "unknown",
			"language": "el"
		},
		"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
			"_disabled": "unknown",
			"language": "el"
		},
		"http://registry.gpii.net/applications/eu.singularlogic.pixelsense.sociable": {
			"_disabled": "unknown",
			"language": "el"
		}
	},
	{
		"http://registry.gpii.net/applications/org.nvda-project": {
			"speech.espeak.voice": "en\en",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "en",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"language": "english",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/common": {
			"language": "en-gb"
		},
		"http://registry.gpii.net/applications/eu.gpii.olb": {
			"_disabled": "unknown",
			"language": "en"
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"_disabled": "unknown",
			"voices.default.family": "en"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouse": {
			"_disabled": "unknown",
			"language": "en"
		},
		"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
			"_disabled": "unknown",
			"language": "en"
		},
		"http://registry.gpii.net/applications/eu.singularlogic.pixelsense.sociable": {
			"_disabled": "unknown",
			"language": "en"
		}
	},
	{
		"http://registry.gpii.net/applications/org.nvda-project": {
			"speech.espeak.voice": "es",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
			"locale": "es",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"language": "spanish",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/common": {
			"language": "es-es"
		},
		"http://registry.gpii.net/applications/eu.gpii.olb": {
			"_disabled": "unknown",
			"language": "es"
		},
		"http://registry.gpii.net/applications/org.gnome.orca": {
			"_disabled": "unknown",
			"voices.default.family": "es"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouse": {
			"_disabled": "unknown",
			"language": "es"
		},
		"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
			"_disabled": "unknown",
			"language": "es"
		}
	},
	{
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"_disabled": "unknown",
			"highContrastTheme": "black-white"
		},
		"http://registry.gpii.net/common": {
			"highContrastTheme": "black-white"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
			"HighContrastOn": true,
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"_disabled": "unknown",
			"highContrastTheme": "black-white"
		},
		"http://registry.gpii.net/applications/net.opendirective.maavis": {
			"theme": "bw",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"theme": "black-white",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/eu.gpii.olb": {
			"_disabled": "unknown",
			"contrastTheme": "bw"
		}
	},
	{
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"_disabled": "unknown",
			"highContrastTheme": "white-black"
		},
		"http://registry.gpii.net/common": {
			"highContrastTheme": "white-black"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
			"HighContrastOn": true,
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1,
			"invert-lightness": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"_disabled": "unknown",
			"highContrastTheme": "white-black"
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"theme": "white-black",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		},
		"http://registry.gpii.net/applications/eu.gpii.olb": {
			"_disabled": "unknown",
			"contrastTheme": "wb"
		}
	},
	{
		"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
			"_disabled": "unknown",
			"highContrastTheme": "yellow-black"
		},
		"http://registry.gpii.net/common": {
			"highContrastTheme": "yellow-black"
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
			"HighContrastOn": true,
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1,
			"invert-lightness": true,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/net.gpii.smarthouses": {
			"_disabled": "unknown",
			"highContrastTheme": "yellow-black"
		},
		"http://registry.gpii.net/applications/info.cloud4all.JME": {
			"theme": "yellow-black",
			"_disabled": "unknown"
		},
		"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		},
		"http://registry.gpii.net/applications/eu.gpii.olb": {
			"_disabled": "unknown",
			"contrastTheme": "yb"
		}
	},
	{
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"auditoryOutLanguage": "de",
			"speakTutorialMessages": false,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"readingUnit": "paragraph",
			"trackingTTS": "caret",
			"pitch": 8
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 71,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": false,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": false,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": false,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.pitch": 80,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"Language": "german",
			"Punctuation": 1,
			"OSM.UseVirtualPCCursor": 1,
			"Speed": 25,
			"Options.SayAllMode": 2,
			"Pitch": 80
		}
	},
	{
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 250,
			"auditoryOutLanguage": "de",
			"speakTutorialMessages": false,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"readingUnit": "paragraph",
			"trackingTTS": "caret",
			"pitch": 6
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 55,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": false,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": false,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": false,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.pitch": 60,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 250,
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"Language": "german",
			"Punctuation": 1,
			"OSM.UseVirtualPCCursor": 1,
			"Speed": 19,
			"Options.SayAllMode": 2,
			"Pitch": 60
		}
	},
	{
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 280,
			"auditoryOutLanguage": "de",
			"speakTutorialMessages": false,
			"punctuationVerbosity": "most",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": false,
			"readingUnit": "paragraph",
			"trackingTTS": "caret",
			"pitch": 8
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 64,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": false,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": false,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": false,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.pitch": 80,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 280,
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"Options.SayAllIndicateCaps": 1,
			"Language": "german",
			"Punctuation": 2,
			"OSM.UseVirtualPCCursor": 1,
			"Speed": 23,
			"Options.SayAllMode": 2,
			"Pitch": 80
		}
	},
	{
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"auditoryOutLanguage": "de",
			"speakTutorialMessages": false,
			"punctuationVerbosity": "some",
			"invertColours": true,
			"magnifierEnabled": true,
			"magnification": 2,
			"magnifierPosition": "tophalf",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"readingUnit": "paragraph",
			"trackingTTS": "caret",
			"pitch": 8,
			"tracking": ["cursor"],
			"showCrosshairs": true
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 71,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": false,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": false,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": false,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.pitch": 80,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 200,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 0,
			"FollowMouse": 0
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"Language": "german",
			"Punctuation": 1,
			"OSM.UseVirtualPCCursor": 1,
			"Speed": 25,
			"Options.SayAllMode": 2,
			"Pitch": 80
		}
	},
	{
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"auditoryOutLanguage": "de",
			"speakTutorialMessages": false,
			"punctuationVerbosity": "most",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": false,
			"readingUnit": "sentence",
			"trackingTTS": ["caret", "focus"],
			"pitch": 8
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"Options.SayAllIndicateCaps": 1,
			"Language": "german",
			"Punctuation": 2,
			"OSM.TrackFocusRect": 1,
			"OSM.UseVirtualPCCursor": 1,
			"Speed": 25,
			"Options.SayAllMode": 1,
			"Pitch": 80
		}
	},
	{
		"http://registry.gpii.net/common": {
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"auditoryOutLanguage": "es",
			"speakTutorialMessages": false,
			"punctuationVerbosity": "some",
			"invertColours": true,
			"magnifierEnabled": true,
			"magnification": 2,
			"magnifierPosition": "tophalf",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"readingUnit": "paragraph",
			"trackingTTS": "caret",
			"pitch": 8,
			"tracking": ["cursor"],
			"showCrosshairs": true
		},
		"http://registry.gpii.net/applications/org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 71,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": false,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": false,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": false,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.pitch": 80,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 300,
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false,
			"_disabled": true
		},
		"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
			"Magnification": 200,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 0,
			"FollowMouse": 0
		},
		"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
			"Language": "castilian spanish",
			"Punctuation": 1,
			"OSM.UseVirtualPCCursor": 1,
			"Speed": 25,
			"Options.SayAllMode": 2,
			"Pitch": 80
		}
	}
];
stat.preferenceTypes = {
	"context": {
		"user": {
			"isEnum": true,
			"min": 0,
			"max": 474
		},
		"os": {
			"isEnum": true,
			"min": 0,
			"max": 3
		}
	},
	"http://registry.gpii.net/applications/com.tpvision.gpiitvproxy": {
		"audioDescription": {
			"isEnum": false,
			"min": 0,
			"max": 1
		},
		"subtitles": {
			"isEnum": false,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/common": {
		"audioDescriptionEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"screenReaderBrailleOutput": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"subtitlesEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"captionsEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speechRate": {
			"isEnum": false,
			"min": 50,
			"max": 984
		},
		"auditoryOutLanguage": {
			"isEnum": true,
			"min": 0,
			"max": 12
		},
		"speakTutorialMessages": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"volume": {
			"isEnum": false,
			"min": 0,
			"max": 933
		},
		"highContrastEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"highContrastTheme": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"cursorSize": {
			"isEnum": false,
			"min": 1,
			"max": 67
		},
		"mouseTrailing": {
			"isEnum": false,
			"min": 0,
			"max": 6
		},
		"punctuationVerbosity": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"fontSize": {
			"isEnum": false,
			"min": 12,
			"max": 24
		},
		"invertColours": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 11
		},
		"magnifierEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"magnification": {
			"isEnum": false,
			"min": 2,
			"max": 600
		},
		"magnifierPosition": {
			"isEnum": true,
			"min": 0,
			"max": 7
		},
		"selfVoicingEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"announceCapitals": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"keyEcho": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"wordEcho": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"readingUnit": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"trackingTTS": {
			"isEnum": true,
			"min": 0,
			"max": 16
		},
		"pitch": {
			"isEnum": false,
			"min": 6,
			"max": 8
		},
		"tracking": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"showCrosshairs": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/org.nvda-project": {
		"braille.display": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"speech.synth": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.outputDevice": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.espeak.rate": {
			"isEnum": false,
			"min": 0,
			"max": 7097
		},
		"speech.espeak.voice": {
			"isEnum": true,
			"min": 0,
			"max": 14
		},
		"reviewCursor.followFocus": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"reviewCursor.followCaret": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"reviewCursor.followMouse": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.symbolLevel": {
			"isEnum": false,
			"min": 0,
			"max": 300
		},
		"virtualBuffers.autoSayAllOnPageLoad": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.espeak.sayCapForCapitals": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"keyboard.speakTypedCharacters": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"keyboard.speakTypedWords": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.espeak.volume": {
			"isEnum": false,
			"min": 5,
			"max": 100
		},
		"speech.espeak.pitch": {
			"isEnum": false,
			"min": 10,
			"max": 100
		},
		"presentation.reportTooltips": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"presentation.reportHelpBalloons": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.espeak.rateBoost": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"http://registry.gpii.net/applications/org.gnome.orca": {
		"enableBraille": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"enableSpeech": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"voices.default.rate": {
			"isEnum": false,
			"min": 0,
			"max": 9667
		},
		"voices.default.family.locale": {
			"isEnum": true,
			"min": 0,
			"max": 8
		},
		"voices.default.family.name": {
			"isEnum": true,
			"min": 0,
			"max": 12
		},
		"verbalizePunctuationStyle": {
			"isEnum": false,
			"min": 0,
			"max": 3
		},
		"sayAllStyle": {
			"isEnum": false,
			"min": 0,
			"max": 2
		},
		"enableEchoByCharacter": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"enableEchoByWord": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"voices.default.gain": {
			"isEnum": false,
			"min": 1,
			"max": 95
		},
		"voices.default.average-pitch": {
			"isEnum": false,
			"min": 10,
			"max": 100
		},
		"presentToolTips": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"enableTutorialMessages": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"voices.default.family": {
			"isEnum": true,
			"min": 0,
			"max": 5
		},
		"voices.uppercase.average-pitch": {
			"isEnum": false,
			"min": 80,
			"max": 100
		}
	},
	"http://registry.gpii.net/applications/org.gnome.desktop.a11y": {
		"always-show-universal-access-status": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/webinsight.webAnywhere.windows": {
		"locale": {
			"isEnum": true,
			"min": 0,
			"max": 8
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/webinsight.webAnywhere.linux": {
		"locale": {
			"isEnum": true,
			"min": 0,
			"max": 8
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"http://registry.gpii.net/applications/org.chrome.cloud4chrome": {
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"highContrastEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"invertColours": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"magnifierEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"magnification": {
			"isEnum": false,
			"min": 11,
			"max": 11
		},
		"highContrastTheme": {
			"isEnum": true,
			"min": 0,
			"max": 4
		}
	},
	"http://registry.gpii.net/applications/com.yourdolphin.supernova-as": {
		"screenReaderBrailleOutput": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"speechRate": {
			"isEnum": false,
			"min": 50,
			"max": 6971
		},
		"punctuationVerbosity": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"announceCapitals": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"keyEcho": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"wordEcho": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"magnifierEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"magnification": {
			"isEnum": false,
			"min": 12,
			"max": 600
		},
		"magnifierPosition": {
			"isEnum": true,
			"min": 0,
			"max": 6
		},
		"ttsEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"http://registry.gpii.net/applications/es.codefactory.android.app.ma": {
		"access_commonprefs_speechrate": {
			"isEnum": false,
			"min": 3,
			"max": 975
		},
		"access_commonprefs_punctuation": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"access_commonprefs_capitalization": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"access_commonprefs_editingkeyboardecho": {
			"isEnum": false,
			"min": 0,
			"max": 3
		},
		"access_commonprefs_speechpitch": {
			"isEnum": false,
			"min": 1,
			"max": 10
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"http://registry.gpii.net/applications/com.android.persistentConfiguration": {
		"locale": {
			"isEnum": true,
			"min": 0,
			"max": 13
		},
		"fontScale": {
			"isEnum": false,
			"min": 10,
			"max": 600
		}
	},
	"http://registry.gpii.net/applications/com.android.audioManager": {
		"STREAM_MUSIC": {
			"isEnum": false,
			"min": 3,
			"max": 1425
		},
		"STREAM_SYSTEM": {
			"isEnum": false,
			"min": 0,
			"max": 15
		}
	},
	"http://registry.gpii.net/applications/com.android.settings.secure": {
		"tts_default_rate": {
			"isEnum": false,
			"min": 80,
			"max": 2275
		},
		"tts_default_pitch": {
			"isEnum": false,
			"min": 50,
			"max": 500
		}
	},
	"http://registry.gpii.net/applications/org.alsa-project": {
		"masterVolume": {
			"isEnum": false,
			"min": 0,
			"max": 933
		}
	},
	"http://registry.gpii.net/applications/info.cloud4all.JME": {
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"volume": {
			"isEnum": false,
			"min": 1,
			"max": 933
		},
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"theme": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"hapticFeedback": {
			"isEnum": false,
			"min": 2,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/net.gpii.smarthouses": {
		"volume": {
			"isEnum": false,
			"min": 0,
			"max": 93
		},
		"fontSize": {
			"isEnum": false,
			"min": 16,
			"max": 32
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"highContrastTheme": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 5
		}
	},
	"http://registry.gpii.net/applications/de.fraunhofer.iao.C4A-TVM": {
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"contrastTheme": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"buttonSize": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 4
		}
	},
	"http://registry.gpii.net/applications/com.microsoft.windows.highContrast": {
		"HighContrastOn": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/com.microsoft.windows.cursors": {
		"Arrow": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"Hand": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"Help": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"AppStarting": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"No": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"NWPen": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeAll": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeNESW": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeNS": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeNWSE": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeWE": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"UpArrow": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"Wait": {
			"isEnum": true,
			"min": 0,
			"max": 3
		}
	},
	"http://registry.gpii.net/applications/com.freedomscientific.jaws": {
		"cloud4allVoiceProfile-GlobalContext.Speed": {
			"isEnum": false,
			"min": 7875,
			"max": 25375
		},
		"cloud4allVoiceProfile-GlobalContext.Punctuation": {
			"isEnum": false,
			"min": 1,
			"max": 3
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"Options.SayAllIndicateCaps": {
			"isEnum": false,
			"min": 0,
			"max": 1
		},
		"Synthesizer": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"Language": {
			"isEnum": true,
			"min": 0,
			"max": 10
		},
		"Options.TypingEcho": {
			"isEnum": false,
			"min": 0,
			"max": 3
		},
		"Punctuation": {
			"isEnum": false,
			"min": 0,
			"max": 3
		},
		"Advanced.SpeechEnabled": {
			"isEnum": false,
			"min": 0,
			"max": 1
		},
		"OSM.TrackFocusRect": {
			"isEnum": false,
			"min": 0,
			"max": 1
		},
		"OSM.UseVirtualPCCursor": {
			"isEnum": false,
			"min": 0,
			"max": 1
		},
		"Speed": {
			"isEnum": false,
			"min": 19,
			"max": 25
		},
		"Options.SayAllMode": {
			"isEnum": false,
			"min": 1,
			"max": 2
		},
		"Pitch": {
			"isEnum": false,
			"min": 60,
			"max": 80
		}
	},
	"http://registry.gpii.net/applications/org.gnome.desktop.interface": {
		"cursor-size": {
			"isEnum": false,
			"min": -1,
			"max": 48
		},
		"text-scaling-factor": {
			"isEnum": false,
			"min": 9,
			"max": 166
		},
		"gtk-theme": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"icon-theme": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/com.microsoft.windows.magnifier": {
		"Magnification": {
			"isEnum": false,
			"min": 100,
			"max": 1600
		},
		"MagnificationMode": {
			"isEnum": false,
			"min": 1,
			"max": 3
		},
		"Invert": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"FollowFocus": {
			"isEnum": false,
			"min": 1,
			"max": 1
		},
		"FollowCaret": {
			"isEnum": false,
			"min": 0,
			"max": 1
		},
		"FollowMouse": {
			"isEnum": false,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/org.gnome.desktop.a11y.magnifier": {
		"mag-factor": {
			"isEnum": false,
			"min": 1,
			"max": 320
		},
		"invert-lightness": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"screen-position": {
			"isEnum": true,
			"min": 0,
			"max": 5
		},
		"mouse-tracking": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"lens-mode": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"show-cross-hairs": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"cross-hairs-length": {
			"isEnum": false,
			"min": 20,
			"max": 22
		},
		"cross-hairs-thickness": {
			"isEnum": false,
			"min": 2,
			"max": 2
		}
	},
	"http://registry.gpii.net/applications/com.android.settings.system": {
		"brightness": {
			"isEnum": false,
			"min": 100,
			"max": 100
		}
	},
	"http://registry.gpii.net/applications/com.microsoft.windows.mouseTrailing": {
		"MouseTrails": {
			"isEnum": false,
			"min": 0,
			"max": 6
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/se.omnitor.ecmobile": {
		"map.string.fontsize.$t": {
			"isEnum": false,
			"min": 24,
			"max": 552
		},
		"map.string.theme.$t": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"map.string.iconsize.$t": {
			"isEnum": false,
			"min": 70,
			"max": 154
		}
	},
	"http://registry.gpii.net/applications/eu.singularlogic.pixelsense.sociable": {
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"http://registry.gpii.net/applications/net.opendirective.maavis": {
		"theme": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"speakOnActivate": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"speakTitles": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speakLabels": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"eu.singularlogic.pixelsense.sociable": {
		"highContrastEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/org.gnome.desktop.a11y.applications": {
		"screen-magnifier-enabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/eu.gpii.olb": {
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"contrastTheme": {
			"isEnum": true,
			"min": 0,
			"max": 3
		}
	},
	"http://registry.gpii.net/applications/net.gpii.smarthouse": {
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 4
		}
	},
	"http://registry.gpii.net/applications/com.google.chrome": {
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/com.bdigital.easit4all": {
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"fontSize": {
			"isEnum": false,
			"min": 18,
			"max": 18
		}
	},
	"http://registry.gpii.net/applications/com.microsoft.windows.displaySettings": {
		"isActive": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"http://registry.gpii.net/applications/com.technosite.smarttwitter": {
		"_disabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	}
};
