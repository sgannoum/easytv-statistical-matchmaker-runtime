/**
 * A HTTP POST handler for route /match
 */
var msg = require('./Messages.js')
var stmmImpl = require('../lib/StatisticalMatchMakerImpl.js').stmmImpl
var write_context_to_db = require('../lib/DataBaseHandler.js').write_context_to_db

const ContextPersonalization = () => {
  const personalize_context = (req, res) => {	
			
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
			
			// Check for user profile
			if (!req.body.user_context) { 
				console.log('A request with missing user_context')
				return res.status(500).json({ code: msg.missing_user_context.msg_code, 
					  						  msg: msg.missing_user_context.msg_text });
			}

			const radius = req.params.radius || req.query.radius
			const user_id = req.body.user_id
			const user_profile = req.body.user_profile
			const user_context = req.body.user_context
			
			console.log('user['+user_id+']: ','personalize context', JSON.stringify(user_profile))
						 
			try 
			{		
				
				//write the user current context
				write_context_to_db(user_id, user_context)
				
				//infer profiles
				var new_user_profile = stmmImpl.personalize_context(user_id, user_profile, user_context, radius);
				
				return res.status(200).json({user_id: user_id, user_profile: new_user_profile});
				
			} catch(err) {
		        console.log('user['+user_id+']: ',err);
		        return res.status(500).json({ msg: 'Internal server error' });
			}

	};
	
	/**
	 * A HTTP GET handler for route /match
	 */
  const get_information =  (req, res) =>  {
	  
    try {
        return res.status(200).json({message: "To personalize context do: " +
    		"								HTTP POST /personalize/context \r\n" +
    		"								Content-Type: application/json \r\n" +
    		"								\r\n" +
    		"								\r\n" +
    		"								{" +
    		"									\"user_id\": Number," +
    		"									\"user_profile\": user profile json," +
    		"									\"user_context\": user context json," +
    		"								}"});
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
	
	};

	
  return {
	  personalize_context,
	  get_information
	  };
};

module.exports = ContextPersonalization;
