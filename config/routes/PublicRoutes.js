/**
 * 
 */

const publicRoutes = { 
		'GET  /personalize/profile': 			'ProfilePersonalization.get_information',
		'POST /personalize/profile/:radius': 	'ProfilePersonalization.personalize_profile',
		'POST /personalize/profile': 			'ProfilePersonalization.personalize_profile',

		'GET  /personalize/context': 			'ContextPersonalization.get_information',
		'POST /personalize/context/:radius': 	'ContextPersonalization.personalize_context',
		'POST /personalize/context': 			'ContextPersonalization.personalize_context',
  
		'GET  /personalize/content': 			'ContentPersonalization.get_information',
		'POST /personalize/content/:radius': 	'ContentPersonalization.personalize_content',
		'POST /personalize/content': 			'ContentPersonalization.personalize_content',

		'POST /analysis/clusters': 				'ClustersHandler.update_Clusters',
		'GET /analysis/clusters': 				'ClustersHandler.get_Clusters'
};

module.exports = publicRoutes;
