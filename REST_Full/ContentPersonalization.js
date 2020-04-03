/**
 * A HTTP POST handler for route /match
 */
var msg = require('./Messages.js')
var stmmImpl = require('../lib/StatisticalMatchMakerImpl.js').stmmImpl
var write_content_to_db = require('../lib/DataBaseHandler.js').write_content_to_db

const ContentPersonalization = () => {
	
  const personalize_content = (req, res) => {	
	  
	  
			// Check for user Id
			if (!req.body.user_id) { 
				console.log('Personalize content requestt: missing user_id')
				return res.status(500).json({ code: msg.missing_user_id.msg_code, 
										      msg: msg.missing_user_id.msg_text });
			}
			
			// Check for user profile
			if (!req.body.user_profile) { 
				console.log('Personalize content requestt: missing user_profile')
				return res.status(500).json({ code: msg.missing_user_profile.msg_code, 
											  msg: msg.missing_user_profile.msg_text });
			}
			
			// Check for user profile
			if (!req.body.user_context) { 
				console.log('Personalize content requestt: missing user_context')
				return res.status(500).json({ code: msg.missing_user_context.msg_code, 
					  						  msg: msg.missing_user_context.msg_text });
			}
			
			// Check for user profile
			if (!req.body.user_content) { 
				console.log('Personalize content requestt: missing user_content')
				return res.status(500).json({ code: msg.missing_user_content.msg_code, 
					  						  msg: msg.missing_user_content.msg_text });
			}
		
			
			const radius = req.params.radius || req.query.radius
			const user_id = req.body.user_id
			const user_profile = req.body.user_profile
			const user_context = req.body.user_context
			const user_content = req.body.user_content
			
			console.log('user['+user_id+']: ','personalize content', JSON.stringify(user_profile))

			try 
			{	
				
				//write the user current content
				write_content_to_db(user_id, user_context, user_content)
				
				//infer profiles
				var new_user_profile = stmmImpl.personalize_content(user_id, user_profile, user_context, user_content, radius);
				
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
        return res.status(200).json({message: "To personalize content do one of the following: " +
    		"								HTTP POST /personalize/context \r\n" +
    		"								Content-Type: application/json \r\n" +
    		"								\r\n" +
    		"								\r\n" +
    		"								{" +
    		"									\"user_id\": Number," +
    		"									\"user_profile\": user profile object," +
    		"									\"user_context\": user context object," +
    		"									\"user_content\": user content object," +
    		"								}"});
      } catch (err) {
        console.log('user['+user_id+']: ',err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
	
	};

	
  return {
	  personalize_content,
	  get_information
	  };
};

module.exports = ContentPersonalization;
