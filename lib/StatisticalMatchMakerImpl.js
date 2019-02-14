/**
 * A set of converters functions
 */

const lanuages = ["ENGLISH", "SPANISH", "CATALAN", "GREEK", "ITALIAN"];
const colorBlindness = [ "normal", "deuteranomaly" ,"deuteranopia","protanomaly","protanopia","tritanomaly","tritanopia"];

/**
 * ColorBlindess converter functions
 */
const colorBlindnessConverter = {
		toNum: function (cond) {			
			return colorBlindness.indexOf(cond.toLowerCase());
		},
		toStr: function(num){
			return colorBlindness[colorBlindness];
		}
	}

/**
 * language converter functions
 */
const languageConverter = {
	toNum: function (lan) {		
		return lanuages.indexOf(lan.toUpperCase());
	},
	toStr: function(num){
		return lanuages[num];
	}
}

/**
 * Color converter functions
 */
const colorConverter = {
		toNum: function (hexString){
			var points = [];
			//red
			points.push(parseInt(hexString.substring(1, 3), 16));
			//green
			points.push(parseInt(hexString.substring(3, 5), 16));
			//blue
			points.push(parseInt(hexString.substring(5, 7), 16));

			return points;
		},
		componentToHex: function (c) {
		    var hex = c.toString(16);
		    return hex.length == 1 ? "0" + hex : hex;
		},
		toStr: function (rgb) {
		    return "#" + colorConverter.componentToHex(rgb[0]) + colorConverter.componentToHex(rgb[1]) + colorConverter.componentToHex(rgb[2]);
		}
}

/**
 * boolean converter functions
 */
const booleanConverter = {
		toNum: function (bool) {		
			return bool ? 1 : 0;
		},
		toStr: function(num){
			return num == 1 ? true : false;
		}
}

/**
 * mapping of perferences to converter function
 */
const numericConverters = {	
							//boolean preferences
							cs_accessibility_textDetection: booleanConverter.toNum, 
							cs_cc_audio_subtitles: booleanConverter.toNum, 
							cs_audio_description: booleanConverter.toNum, 				
		
							//language perferences
							language_subtitles: languageConverter.toNum,
							language_sign: languageConverter.toNum, 
							cs_cc_subtitles_language: languageConverter.toNum, 
							cs_audio_track: languageConverter.toNum, 
							language_audio: languageConverter.toNum,
							tts_language: languageConverter.toNum,
							
							//color perferences
							fontColor: colorConverter.toNum, 
							backgroundColor : colorConverter.toNum};

/**
 * mapping of perferences to converter function
 */
const numericToInitial = {
							//boolean preferences
							cs_accessibility_textDetection: booleanConverter.toStr, 
							cs_cc_audio_subtitles: booleanConverter.toStr,  
							cs_audio_description: booleanConverter.toStr, 
					
							//language perferences
							language_subtitles: languageConverter.toStr,
							language_sign: languageConverter.toStr, 
							cs_cc_subtitles_language: languageConverter.toStr, 
							cs_audio_track: languageConverter.toStr, 
							language_audio: languageConverter.toStr,
							tts_language: languageConverter.toStr, 
							
							//color perferences
							fontColor: colorConverter.toStr, 
							backgroundColor : colorConverter.toStr};


const STMM_Functions = {
		
		/**
		 * Infer similar user profiles
		 */
		infer : function (user_profile, clusters, mask = ["ALL"], radius = 1000, distance_measure) {
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			// Additive Clusters
			var relevantClusters = STMM_Functions.getRelevantClusters(user_profile, clusters, mask, radius);
			
			//sort based on distance
			relevantClusters.sort(function(a, b) {return STMM_Functions.getClusterDistance(user_profile, a, mask) - STMM_Functions.getClusterDistance(user_profile, b, mask)});
			
			//handle settings
			var perferences = new_user_profile.user_preferences.default.preferences
			for (i in relevantClusters){
				var relevant_preferences = relevantClusters[i].user_preferences.default.preferences
				for(preference in relevant_preferences){
					if(!(preference in perferences)){
						perferences[preference] = relevant_preferences[preference]
					}
				}
			}
				
		    return STMM_Functions.toJSON(new_user_profile);
		},
		
		/*
		 * 
		 */
		getRelevantClusters : function (user_profile, clusters, mask = ["ALL"], radius = 10) {
			var result = [];
			for (i in clusters){
				var curCluster = clusters[i]
				if (STMM_Functions.getClusterDistance(user_profile, curCluster, mask) < radius) {
					result.push(curCluster);
				}
			}
			return result;
		},
		
		/**
		 * Specify distance measure
		 */
		distance: require('euclidean-distance'),
		
		/**
		 * 
		 */
		getClusterDistance : function (user_profile, cluster, mask = ["ALL"]) {
			var a = STMM_Functions.getPoints(user_profile, mask)
			var b = STMM_Functions.getPoints(cluster, mask)
			
			return STMM_Functions.distance(a,b);
		},
		
		toJSON: function(user_profile){
			
			//convert gender
			if(user_profile.general.gender == 0)
				user_profile.general.gender = 'male'
			else 
				user_profile.general.gender = 'female'
			
			//convert colorblindness
			user_profile.visual.color_blindness = colorBlindnessConverter.toStr(user_profile.visual.color_blindness)
			
			//convert preferences
			var perferences = user_profile.user_preferences.default.preferences
			for (i in perferences){
				if(i in numericConverters){
					//invoke converter function
					perferences[i] = numericToInitial[i](perferences[i])
				} 
			}
					
			return JSON.stringify(user_profile);
		},
		
		/**
		 * 
		 */
		getGeneralPoints : function(user_profile) {
			var points = []
			points.push(user_profile.general.age);
			if(user_profile.general.gender.toLowerCase() == 'male')
				points.push(0);
			else 
				points.push(1);
			return points;
		},		
		
		/**
		 * 
		 */
		getAuditoryPoints : function(user_profile) {
			var points = []
			points.push(user_profile.auditory.oneK);
			points.push(user_profile.auditory.fourK);
			points.push(user_profile.auditory.twoK);
			points.push(user_profile.auditory.eightK);
			points.push(user_profile.auditory.quarterK);
			points.push(user_profile.auditory.halfK);

			return points;
		},
		
		/**
		 * 
		 */
		getVisualPoints : function(user_profile) {
			var points = []
			points.push(user_profile.visual.visual_acuity);
			points.push(user_profile.visual.contrast_sensitivity);
			//convert to numeric
			points.push(colorBlindnessConverter.toNum(user_profile.visual.color_blindness));
			return points;
		},
		
		/**
		 * 
		 */
		getPerferencePoints : function(user_profile) {
		
			var points = []		
			var perferences = user_profile.user_preferences.default.preferences
			
			for (i in perferences){
				if(i in numericConverters){
					//invoke converter function
					points = points.concat(numericConverters[i](perferences[i]))
				} else {
					points.push(perferences[i]);
				}
			}

			return points;
		},
		
		/**
		 * 
		 */
		getAllPoints : function(user_profile) {		
			var points = []
			points = points.concat(STMM_Functions.getGeneralPoints(user_profile),
									STMM_Functions.getAuditoryPoints(user_profile),
									STMM_Functions.getVisualPoints(user_profile),
									STMM_Functions.getPerferencePoints(user_profile));
			return points;
		},
		
		/**
		 * 
		 */
		getPoints : function(user_profile, mask) {
			var points = []
			
			//upper case
			mask = mask.map((x) => x.toUpperCase());
			
			 if(mask.includes("ALL")){
				return STMM_Functions.getAllPoints(user_profile);
			 }
				
			if(mask.includes("GENERAL")){
				points = points.concat(STMM_Functions.getGeneralPoints(user_profile));
			}
			
			if(mask.includes("AUDITORY")){
				points = points.concat(STMM_Functions.getAuditoryPoints(user_profile));
			}		
			
			if(mask.includes("VISUAL")){
				points = points.concat(STMM_Functions.getVisualPoints(user_profile));
			}		
			
			if(mask.includes("DEFAULT_PREFERENCE")){
				points = points.concat(STMM_Functions.getPerferencePoints(user_profile));
			}			
						
			return points;
		}
}

//Export these functions
module.exports = STMM_Functions