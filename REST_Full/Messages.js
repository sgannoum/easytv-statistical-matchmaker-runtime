/**
 * 
 */

const msg = {
		missing__user_id: {
			msg_code: 200,
			msg_text: 'Missing user id',
			http_code: 401
		},
		missing_user_profile:{
			msg_code: 200,
			msg_text: 'Missing user id',
			http_code: 401
		},
		missing_user_context:{
			msg_code: 200,
			msg_text: 'Missing user context',
			http_code: 401
		},
		missing_user_content:{
			msg_code: 200,
			msg_text: 'Missing user content',
			http_code: 401
		},
		missing_user_preferences:{
			msg_code: 200,
			msg_text: 'Missing user preferences',
			http_code: 401
		},
		success:{
			msg_code: 200,
			msg_text: 'Success',
			http_code: 200
		}
}

module.exports.msg = msg