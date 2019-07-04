
//get similarity function
var SimilarityDistance = require("./SimilarityDistance")

module.exports = class StatisticalMatchMakerImpl {
		
	 	constructor(dimensions) {
	 		this._dimensions = dimensions;
			this._distance = new SimilarityDistance(dimensions);
		}
	
		/**
		 * Infer similar user profiles
		 */
		infer (user_profile, clusters, radius = 1000) {
			
			//copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantClusters = this.getRelevantClusters(user_profile, clusters, radius);
			
			//sort based on distance
			relevantClusters.sort(function(instance) {
										return function(a, b) {return instance.getClusterDistance(user_profile, a) - instance.getClusterDistance(user_profile, b)}
									}(this));
			
			//handle missing preferences
			var perferences = new_user_profile.user_preferences.default.preferences
			for (var i in relevantClusters) {	
				
				var relevant_preferences = relevantClusters[i].user_preferences.default.preferences
				for(var preference in relevant_preferences) {
					if(!(preference in perferences)) {
						perferences[preference] = relevant_preferences[preference]
					}
				}
			}
			
		    return JSON.stringify(new_user_profile, null, 4);
		}
		
		/*
		 * 
		 */
		getRelevantClusters(user_profile, clusters, radius = 1000) {
			var result = [];
			for (var i in clusters) {
				if (this.getClusterDistance(user_profile, clusters[i]) != 0) {
					result.push(clusters[i]);
				}
			}
			return result;
		}
		
		/**
		 * 
		 */
		getClusterDistance (user_profile, cluster) {
			var a = this.getPerferencePoints(user_profile)
			var b = this.getPerferencePoints(cluster)
			
			return this._distance.compute(a,b);
		}
		
		/**
		 * Convert profile into JSON form taking into consideration any required conversion 
		 */
		toJSON (user_profile) {
			return JSON.stringify(user_profile, null, 4);
		}
		
		/**
		 * Add user preferences values in specific order
		 */
		getPerferencePoints (user_profile) {
		
			//Preferences values
			var points = []		
			
			var userPerferences = user_profile.user_preferences.default.preferences

			//Add user preferences
			for (var [key, value] of this._dimensions) 
				points.push(userPerferences[key]);
			
			return points;
		}
}