/**
 * A HTTP POST handler for route /match
 */

const stat = require('../lib/StatisticalMatchmakerData.js');
var StatisticalMatchMakerImpl = require('../lib/StatisticalMatchMakerImpl')
var stmmImpl = new StatisticalMatchMakerImpl(stat.dimensionsHandlers);

const EndPoints = () => {
  const postMatchHandler = (req, res) => {
		try 
		{
			var radius = 1000			
			const user_profile = req.body;
	
			// Rejection tests
			if (!user_profile) { return res.status(500).json({ msg: 'No user profile' });};
			
			//infer profiles
			var new_user_profile = stmmImpl.infer(user_profile, stat.clusters, radius);
			
			res.status(200).json(new_user_profile);
			
		} catch(err) {
	        console.log(err);
	        return res.status(500).json({ msg: 'Internal server error' });
		}
	};
	
	/**
	 * A HTTP GET handler for route /match
	 */
  const getMatchtHandler =  (req, res) =>  {
	  
    try {
        return res.status(200).json({message: "To match a user file do: HTTP POST /match?[radius=number][distance_measure=euclidean|canberra|chebyshev|manhattan][dimensions=[general|visual|auditory|all]+]"});
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
	
	};

	/**
	 * A HTTP POST handler for route /match
	 */
  const postContentAdaptation = (req, res) => {
		try 
		{
			var radius = 1000
			const {mpd, user_profile} = req.body;
			
			//infer profiles
			var new_user_profile = stmmImpl.infer(user_profile, mpd, stat.clusters, radius);
			
			res.status(200).json(new_user_profile);
			
		} catch(err) {
	        console.log(err);
	        return res.status(500).json({ msg: 'Internal server error' });
		}
	}

	/**
	 * A HTTP POST handler for loading users profile clusters
	 */
   const postUserClusters = (req, res) => {
		try 
		{
			var clusters = request.req.body											 
			
			//delete clusters
			delete stat.clusters;
			
			//load new clusters
			stat.clusters = clusters
			
			res.status(200).json({msg: "clusters has been loaded successfully"});
			
		} catch(err) {
	        console.log(err);
	        return res.status(500).json({ msg: 'Internal server error' });
		}
	}

	/**
	 * A HTTP GET handler for getting users profiles clusters
	 */
   const gettUserClusters = (req, res) => {
		try 
		{		
			
			res.status(200).json(JSON.stringify(stat.clusters));
			
		} catch(err) {
	        console.log(err);
	        return res.status(500).json({ msg: 'Internal server error' });
		}
	}
	
  return {
	  postMatchHandler,
	  getMatchtHandler,
	  postContentAdaptation,
	  postUserClusters,
	  gettUserClusters
	  };
};

module.exports = EndPoints;
