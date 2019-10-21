
//get similarity function
var SimilarityDistance = require("./SimilarityDistance")

class StatisticalMatchMakerImpl {
		
	 	constructor(dimensions, clusters) {
	 		this._dimensions = dimensions;
	 		this.clusters= clusters
	 		
	 		//Get accessibility preferences dimensions 
	 		this.dimesnions_accessibility = this.get_accessibility_dimensions(dimensions)
	 		
	 		//Similarity function for all dimensions
			this.similarity_distance_all = new SimilarityDistance(dimensions);
	 		
	 		//Similarity function for accessibility services
	 		this.similarity_distance_accessibility = new SimilarityDistance(this.dimesnions_accessibility);
	 		
/*	 		this._scope = {Numeric: require("./DimensionHandlers").Numeric, 
	 					   IntegerNumeric: require("./DimensionHandlers").IntegerNumeric, 
	 					   Nominal: require("./DimensionHandlers").Nominal, 
	 					   Ordinal: require("./DimensionHandlers").Ordinal,
	 					   SymmetricBinary: require("./DimensionHandlers").SymmetricBinary, 
	 					   Color: require("./DimensionHandlers").Color}
	 		this._eval = require('eval')
*/
		}
	 	
	 	/**
	 	 * Set clusters
	 	 */
	 	set_clusters(clusters){
	 		this.clusters = clusters
	 	}
	 	
	 	/**
	 	 * Get clusters
	 	 */
	 	get_clusters(){
	 		return this.clusters
	 	}
	 	
		/**
		 * Infer similar user profiles
		 */
		personalize_profile(user_id, user_profile) {
			
			console.log('user['+user_id+']: personalize profile');
			
			//copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantClusters = this.get_relevant_clusters(user_profile, this.clusters, this.similarity_distance_all);
			
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
			
		    return new_user_profile;
		}
	
		/**
		 * Infer similar user profiles for context changes
		 */
		personalize_context(user_id, user_profile, user_context) {
			
			console.log('user['+user_id+']: personalize context');
			
		    return personalize_profile(user_id, user_profile);
		}
		
		/**
		 * Infer similar user profiles for content changes
		 */
		personalize_content(user_id, user_profile, user_context, user_content) {
			
			console.log('user['+user_id+']: personalize content');
			
			//Copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantUsers = this.get_relevant_clusters(user_profile, this.clusters, this.similarity_distance_all);
						
			//keep only clusters without their distance
			relevantUsers = relevantUsers.map( x => { return x.cluster} )
						
			//Find similar user content adaptation services
			var relevantMpdUsers = this.get_relevant_clusters(user_profile, relevantUsers, this.similarity_distance_accessibility);
						
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
			
		    return new_user_profile;
		}
		
		/*
		 * Get a sorted list of relevant clusters based on the given preferences
		 */
		get_relevant_clusters(user_profile, clusters, similarityDistance) {
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
		 * Get user preferences values in specific order
		 */
		get_accessibility_dimensions (dimension) {
		
			//Preferences values
			var _dimension = new Map()
			
			//Add user preferences
			for (var [key, value] of this._dimensions)
				if(key.startsWith('http://registry.easytv.eu/application/cs/accessibility/'))
					_dimension.set(key, value);
			
			return _dimension;
		}
}


const stat = require('../lib/StatisticalMatchMakerData.js');
var stmmImpl = new StatisticalMatchMakerImpl(stat.dimensionsHandlers, stat.clusters);

//Export single tone
module.exports.stmmImpl = stmmImpl


//export class
module.exports.StatisticalMatchMakerImpl = StatisticalMatchMakerImpl 