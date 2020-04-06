/**
 * A HTTP POST handler for route /match
 */
var msg = require('./Messages.js')
var stmmImpl = require('../lib/StatisticalMatchMakerImpl.js').stmmImpl


const ProfilePersonalization = () => {
  const personalize_profile = (req, res) => {	

			// Check for user Id
			if (!req.body.user_id) { 
				console.log('A request with missing user_id')
				return res.status(500).json({ code: msg.missing_user_id.msg_code, 
										      msg: msg.missing_user_id.msg_text });
			}
			
			// Check for user profile
			if (!req.body.user_profile) { 
				console.log('A request with missing user_profile')
				return res.status(500).json({ code: msg.missing_user_profile.msg_code, 
											  msg: msg.missing_user_profile.msg_text });
			}
			
			
			const radius = req.params.radius || req.query.radius
			const user_id = req.body.user_id
			const user_profile = req.body.user_profile
			
			console.log('user['+user_id+']: ','personalize profile', JSON.stringify(user_profile))

			try 
			{
				//infer profiles
				var new_user_profile = stmmImpl.personalize_profile(user_id, user_profile, radius);
				
				return res.status(200).json({user_id: user_id, user_profile: new_user_profile});
					
			} catch(err) {
		        console.log('user['+user_id+'][ERROR]: ',err);
		    	if(err instanceof TypeError)
			        return res.status(500).json({ msg: err.message });
		    	else
		    		return res.status(500).json({ msg: 'Internal server error' });
			}
	};
	
	/**
	 * A HTTP GET handler for information
	 */
  const get_information =  (req, res) =>  {
	  
    try {
        return res.status(200).json({message: "To personalize weigths do: " +
        		"								HTTP POST /personalize/profile \r\n" +
        		"								Content-Type: application/json \r\n" +
        		"								\r\n" +
        		"								\r\n" +
        		"								{" +
        		"									\"user_id\": Number," +
        		"									\"user_profile\": user profile json" +
        		"								}"});
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
	
	};

	
  return {
	  personalize_profile,
	  get_information
  };
};

module.exports = ProfilePersonalization;
