/**
 * 
 */

const publicRoutes = { 
  'POST /personalize/profile': 'ProfilePersonalization.personalize_profile',
  'GET  /personalize/profile': 'ProfilePersonalization.get_information',

  'GET  /personalize/context': 'ContextPersonalization.get_information',
  'POST /personalize/context': 'ContextPersonalization.personalize_context',
  
  'POST /personalize/content': 'ContentPersonalization.personalize_content',
  'GET  /personalize/content': 'ContentPersonalization.get_information',
  
  'POST /analysis/clusters': 'ClustersHandler.update_Clusters',
  'GET /analysis/clusters': 'ClustersHandler.get_Clusters'
};

module.exports = publicRoutes;
