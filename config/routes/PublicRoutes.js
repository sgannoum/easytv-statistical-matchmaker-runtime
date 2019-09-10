/**
 * 
 */

const publicRoutes = {
  'POST /match': 'EndPoints.postMatchHandler',
  'GET  /match': 'EndPoints.getMatchtHandler',
  'POST /content': 'EndPoints.postContentAdaptation',
  'GET /content': 'EndPoints.postUserClusters',
  'GET /clusters': 'EndPoints.gettUserClusters'
};

module.exports = publicRoutes;
