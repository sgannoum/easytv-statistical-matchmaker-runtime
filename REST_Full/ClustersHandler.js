/**
 * A HTTP POST handler for route /match
 */

var msg = require('./Messages.js')
var stmmImpl = require('../lib/StatisticalMatchMakerImpl.js').stmmImpl

const ClustersHandler = () => {

	/**
	 * A HTTP POST handler for loading users profile clusters
	 */
   const update_Clusters = (req, res) => {
		try 
		{
			var clusters = req.body											 
			
			stmmImpl.set_clusters(clusters)
			console.log("clusters has been loaded successfully")

			res.status(200).json({msg: "clusters has been loaded successfully"});
			
		} catch(err) {
	        console.log(err);
	        return res.status(500).json({ msg: 'Internal server error' });
		}
	}

	/**
	 * A HTTP GET handler for getting users profiles clusters
	 */
   const get_Clusters = (req, res) => {
		try 
		{		
			
			res.status(200).json(JSON.stringify(stmmImpl.get_clusters()));
			
		} catch(err) {
	        console.log(err);
	        return res.status(500).json({ msg: 'Internal server error' });
		}
	}
	
  return {
	  update_Clusters,
	  get_Clusters
	  };
};

module.exports = ClustersHandler;
