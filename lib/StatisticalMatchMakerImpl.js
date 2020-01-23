

class StatisticalMatchMakerImpl {
		
	 	constructor(preference_dimensions, context_dimensions, content_dimensions, clusters) {
	 		//Profile that represents clusters center
	 		this.clusters= clusters
	 		
	 		//Dimensions handler
	 		this.preference_dimensions = preference_dimensions;
	 		
	 		//Similarity function for all dimensions
			this.similarity_distance_all = new SimilarityDistance(this.preference_dimensions);
	 		
	 		//Get accessibility preferences dimensions 
	 		this.context_dimensions = context_dimensions
	 		
	 		//Similarity function for accessibility services
	 		this.context_similarity_distance = new SimilarityDistance(this.context_dimensions);
	 		
	 		//Get accessibility preferences dimensions 
	 		this.content_dimensions = content_dimensions
	 		
	 		//Similarity function for accessibility services
	 		this.content_similarity_distance = new SimilarityDistance(this.content_dimensions);
	 		
	 		//Print dimensions
			console.log("Preference dimensions")
			for (let key of this.preference_dimensions.keys()) 
				  console.log(key); 
			
			console.log()	
			console.log("Context dimensions")
			for (let key of this.context_dimensions.keys()) 
				  console.log(key); 
			
			console.log()
			console.log("Content dimensions")
			for (let key of this.content_dimensions.keys()) 
				  console.log(key); 
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
			
			//copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantClusters = this.get_relevant_profile(user_profile, this.clusters);

			//keep only clusters without their distance
			relevantClusters = relevantClusters.map( x => { return x.cluster} )

			//Addative inference
			new_user_profile = this.addativeInference(new_user_profile, relevantClusters);

		    return new_user_profile;
		}
	
		/**
		 * Infer similar user profiles for context changes
		 */
		personalize_context(user_id, user_profile, user_context) {
						
			//copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantClusters = this.get_relevant_context(user_profile, user_context, this.clusters);
			
			//keep only clusters without their distance
			relevantClusters = relevantClusters.map( x => { return x.cluster} )
						
			//Addative inference
			new_user_profile = this.addativeInference(new_user_profile, relevantClusters);
			
		    return new_user_profile;
		}
		
		/**
		 * Infer similar user profiles for content changes
		 */
		personalize_content(user_id, user_profile, user_context, user_content) {
						
			//Copy user profile
			var new_user_profile = JSON.parse(JSON.stringify(user_profile))
			
			//Additive Clusters
			var relevantUsers = this.get_relevant_content(user_profile, user_context, user_content, this.clusters);
						
			//keep only clusters without their distance
			relevantUsers = relevantUsers.map( x => { return x.cluster} )
				

			//Addative inference
			new_user_profile = this.addativeInference(new_user_profile, relevantClusters);
			
		    return new_user_profile;
		}
		
		/*
		 * Get a sorted list of relevant clusters based on the given preferences
		 */
		get_relevant_profile(user_profile, clusters) {
			var result = [];
			
			for (var i in clusters) {
				
				var a = user_profile.user_preferences.default.preferences
				var b = clusters[i].user_profile.user_preferences.default.preferences
				
				//calculate distance
				var distance = this.similarity_distance_all.compute(a, b);
				
				result.push({'cluster': clusters[i], 'distance': distance});
			}
			
			//sort based on distance
			result.sort(function(a, b) {return a.distance - b.distance});
			
			//reverse
			result.reverse();
			
			console.log("%s \t %s", "user_id", "distance")
			console.log("=================================")
			for (var i in result) 
				 console.log("%s \t %s", result[i].cluster.user_id, result[i].distance); 
			console.log("=================================")
			
			return result;
		}
			
		/*
		 * Get a sorted list of relevant clusters based on the given preferences
		 */
		get_relevant_context(user_profile, user_context, clusters) {
			var result = [];
			
			for (var i in clusters) {
				var cluster = clusters[i]
				
				var a = user_profile.user_preferences.default.preferences
				var b = cluster.user_profile.user_preferences.default.preferences
				
				//calculate distance
				var distance = this.similarity_distance_all.compute(a, b);
				
				
				//distance context
				a = user_context
				b = cluster.user_context
				
				//calculate distance
				distance += this.context_similarity_distance.compute(a, b);
				
				result.push({'cluster': clusters[i], 'distance': distance});
			}
			
			//sort based on distance
			result.sort(function(a, b) {return a.distance - b.distance});
			
			//reverse
			result.reverse();
			
			console.log("%s \t %s", "user_id", "distance")
			console.log("=================================")
			for (var i in result) 
				 console.log("%s \t %s", result[i].cluster.user_id, result[i].distance); 
			console.log("=================================")
			
			return result;
		}
		
		/*
		 * Get a sorted list of relevant clusters based on the given preferences
		 */
		get_relevant_content(user_profile, user_context, user_content, clusters) {
			var result = [];
			
			for (var i in clusters) {
				
				var a = user_profile.user_preferences.default.preferences
				var b = clusters[i].user_profile.user_preferences.default.preferences
				
				//calculate distance
				var distance = this.similarity_distance_all.compute(a, b);
				
				
				//distance context
				a = user_context
				b = clusters[i].user_context
				
				//calculate distance
				distance += this.context_similarity_distance.compute(a, b);
				
				
				//distance content
				a = user_content
				b = clusters[i].user_content
				distance += this.content_similarity_distance.compute(a, b);
				
				result.push({'cluster': clusters[i], 'distance': distance});
			}
			
			//sort based on distance
			result.sort(function(a, b) {return a.distance - b.distance});
			
			//reverse
			result.reverse();
			
			console.log("user_id", '\t', "distance")
			console.log("=================================")
			for (var i in result) 
				 console.log("%s \t %s", result[i].cluster.user_id, result[i].distance); 
			console.log("=================================")
			
			return result;
		}
		
		/**
		 * Implements addative inference
		 */
		addativeInference(user_profile, relevantClusters){
			var perferences = user_profile.user_preferences.default.preferences
			for (var i in relevantClusters) {	
				var cluster = relevantClusters[i]
				
				var relevant_preferences = cluster.user_profile.user_preferences.default.preferences
				for(var preference in relevant_preferences) {
					if(!(preference in perferences)) {
						perferences[preference] = relevant_preferences[preference]
					}
				}
			}
			
			return user_profile
		}
}


var SimilarityDistance = require("./SimilarityDistance")
const dimensionsHandlers = require('../lib/GENERATED_dimensions_handlers.js');
const stat = require('../lib/GENERATED_clusters_data.js');

var stmmImpl = new StatisticalMatchMakerImpl(dimensionsHandlers.preferenceHandlers, dimensionsHandlers.contextHandlers, dimensionsHandlers.contentHandlers, stat.clusters);

//Export single tone
module.exports.stmmImpl = stmmImpl


//export class
module.exports.StatisticalMatchMakerImpl = StatisticalMatchMakerImpl 