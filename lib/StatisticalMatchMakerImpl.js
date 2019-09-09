
//get similarity function
var SimilarityDistance = require("./SimilarityDistance")

module.exports = class StatisticalMatchMakerImpl {
		
	 	constructor(dimensions) {
	 		this._dimensions = dimensions;
	 		this._accessibility_dimesnions = this.getAccessibilityServicesDimensions(dimensions)
			this.all_dimensions_similarity_distance = new SimilarityDistance(dimensions);
	 		this._accessibility_services_similarity_distance = new SimilarityDistance(this._accessibility_dimesnions);
	 		this._scope = {Numeric: require("./DimensionHandlers").Numeric, 
	 					   IntegerNumeric: require("./DimensionHandlers").IntegerNumeric, 
	 					   Nominal: require("./DimensionHandlers").Nominal, 
	 					   Ordinal: require("./DimensionHandlers").Ordinal,
	 					   SymmetricBinary: require("./DimensionHandlers").SymmetricBinary, 
	 					   Color: require("./DimensionHandlers").Color}
	 		this._eval = require('eval')
		}
	
		/**
		 * Infer similar user profiles for content accessibility adaptation
		 */
		infer_content_adapatation (user_profile, mpd_content, clusters) {
			
			//Copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantUsers = this.getRelevantClusters(user_profile, clusters, this.all_dimensions_similarity_distance);
						
			//keep only clusters without their distance
			relevantUsers = relevantUsers.map( x => { return x.cluster} )
						
			//Find similar user content adaptation services
			var relevantMpdUsers = this.getRelevantClusters(user_profile, relevantUsers, this._accessibility_services_similarity_distance);
						
			//keep only clusters without their distance
			relevantMpdUsers = relevantMpdUsers.map( x => { return x.cluster} )

			//Handle missing preferences
			var perferences = new_user_profile.user_preferences.default.preferences
			for (var i in relevantMpdUsers) {	
				
				var relevant_preferences = relevantMpdUsers[i].user_preferences.default.preferences
				for(var preference in relevant_preferences) {
					if(!(preference in perferences)) {
						perferences[preference] = relevant_preferences[preference]
					}
				}
			}
			
		    return JSON.stringify(new_user_profile, null, 4);
		}

	 	
		/**
		 * Infer similar user profiles
		 */
		infer (user_profile, clusters) {
			
			//copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantClusters = this.getRelevantClusters(user_profile, clusters, this.all_dimensions_similarity_distance);
			
			//keep only clusters without their distance
			relevantClusters = relevantClusters.map( x => { return x.cluster} )
						
			//Handle missing preferences
			var perferences = new_user_profile.user_preferences.default.preferences
			for (var i in relevantClusters) {	
				var cluster = relevantClusters[i]
				
				var relevant_preferences = cluster.user_preferences.default.preferences
				for(var preference in relevant_preferences) {
					if(!(preference in perferences)) {
						perferences[preference] = relevant_preferences[preference]
					}
				}
			}
			
		    return JSON.stringify(new_user_profile, null, 4);
		}
		
		
		/*
		 * Get a sorted list of relevant clusters based on the given preferences
		 */
		getRelevantClusters(user_profile, clusters, similarityDistance) {
			var result = [];
			
			for (var i in clusters) {
				
				var a = user_profile.user_preferences.default.preferences
				var b = clusters[i].user_preferences.default.preferences
				
				//calculate distance
				var distance = similarityDistance.compute(a, b);
				
				result.push({'cluster': clusters[i], 'distance': distance});
			}
			
			//sort based on distance
			result.sort(function(a, b) {return a.distance - b.distance});
			
			return result;
		}
		
		/**
		 * Convert profile into JSON form taking into consideration any required conversion 
		 */
		toJSON (user_profile) {
			return JSON.stringify(user_profile, null, 4);
		}
		
		/**
		 * Get user preferences values in specific order
		 */
		getAccessibilityServicesDimensions (dimension) {
		
			//Preferences values
			var _dimension = new Map()
			
			//Add user preferences
			for (var [key, value] of this._dimensions)
				if(key.startsWith('http://registry.easytv.eu/application/cs/accessibility/'))
					_dimension.set(key, value);
			
			return _dimension;
		}
		
		/**
		 * load new dimensions handlers
		 */
		 loadHandlers(command){

			//clean up
/*	 		delete this._dimensions
	 		delete this._accessibility_dimesnions 
	 		delete this.all_dimensions_similarity_distance
	 		delete this._accessibility_services_similarity_distance*/

	 		var command1 = 
	 			"var dimensionsHandlers = new Map();\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/common/content/audio/volume\", new Numeric(95.0, 7.0, 0.0 ));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/common/content/audio/language\", new Nominal([\"en\",\"es\",\"ca\",\"gr\",\"it\"], -1.0));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/common/display/screen/enhancement/font/size\", new Numeric(26.0, 23.0, 1.0 ));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/common/display/screen/enhancement/font/type\", new Nominal([\"fantasy\",\"monospace\",\"sans-serif\",\"serif\",\"cursive\"], -1.0));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/common/display/screen/enhancement/font/color\", new Color(new IntegerNumeric(242.0, 7.0, -1.0 ),new IntegerNumeric(248.0, 16.0, -1.0 ),new IntegerNumeric(248.0, 36.0, -1.0 )));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/common/display/screen/enhancement/background\", new Color(new IntegerNumeric(236.0, 0.0, -1.0 ),new IntegerNumeric(231.0, 32.0, -1.0 ),new IntegerNumeric(236.0, 71.0, -1.0 )));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/application/cs/cc/subtitles/fontSize\", new Numeric(95.0, 4.0, 0.0 ));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/application/cs/cc/subtitles/fontColor\", new Color(new IntegerNumeric(216.0, 3.0, -1.0 ),new IntegerNumeric(251.0, 30.0, -1.0 ),new IntegerNumeric(253.0, 19.0, -1.0 )));\r\n" + 
	 			"dimensionsHandlers.set(\"http://registry.easytv.eu/application/cs/cc/subtitles/backgroundColor\", new Color(new IntegerNumeric(243.0, 18.0, -1.0 ),new IntegerNumeric(243.0, 73.0, -1.0 ),new IntegerNumeric(205.0, 21.0, -1.0 )));\r\n" + 
	 			"exports.dimensionsHandlers = dimensionsHandlers"
	 			
	 		var command = "var dimensionsHandlers = new Map(); dimensionsHandlers.set(\"http://registry.easytv.eu/common/content/audio/volume\", new Numeric(95.0, 7.0, 0.0 )); exports.dimensionsHandlers = dimensionsHandlers;"
	 		
			 //reload
			this._dimensions =  this._eval(command1, this._scope)
			console.log(this._dimensions)
	 		this._accessibility_dimesnions = this.getAccessibilityServicesDimensions(this._dimensions)
			this.all_dimensions_similarity_distance = new SimilarityDistance(this._dimensions);
	 		this._accessibility_services_similarity_distance = new SimilarityDistance(this._accessibility_dimesnions);
	 		
	 		console.log(this._dimensions)
			 
		 }
}