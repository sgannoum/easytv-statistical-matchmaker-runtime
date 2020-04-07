var mysql = require('mysql')
var host = process.env.DB_HOST || '172.18.0.2';
var port = process.env.DB_PORT || '3306';
var database = process.env.DB_NAME || 'easytv';
var user = process.env.DB_USER || 'easytv';
var password = process.env.DB_PASSWORD || 'easytv';

var pool  = mysql.createPool({
  connectionLimit : 5,
  host: host,
  port: port,
  database: database,
  user: user,
  password: password,
});

console.log('Connected to mysql://'+user+":"+password+"@"+host+":"+port)

//prepare an empty user preferences
const preferencesHandlers = require('../lib/GENERATED_dimensions_handlers.js').preferenceHandlers;
const emptyPrefs = {};
for (var [key, value] of preferencesHandlers)
	emptyPrefs[key] = value.missingValue


//Prepare DB
prepare_db();

/**
 * Create necessary tables and constrains
 * @returns
 */
function prepare_db () {
	
	console.log("Prepare DB...Done")											  
	pool.getConnection(function(err, connection) {		 
		  if (err) throw err; // not connected!
		  
		  var sql = "CREATE TABLE IF NOT EXISTS `history` (id INT NOT NULL, " +
					"event JSON,  " +
					"PRIMARY KEY (id), " +
					"FOREIGN KEY (id) REFERENCES users (id)) " +
					"ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;"
					
		  // Use the connection
		  connection.query(sql, (error, results, fields) => {
					
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
		  });	
	 });	
};

/**
 * Write context to DB
 */
module.exports.insert_to_db = function (profiles_file = '/home/salim/Desktop/profiles/response.json') {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		 
		  var fs = require('fs')
		  var file = fs.readFile(profiles_file, (err, data) => 
		  {
			  if (err) throw err;
			  var allProfiles = JSON.parse(data).allUserModels;

			  var sql = "INSERT IGNORE INTO users (id, isActivated, createdAt, updatedAt) VALUES "
			  var values = '', i = 0;
			  
			  for(i = 0; i < allProfiles.length - 1; i++)
				  values += "("+ (i + 1) +", 1,'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"'),"

			  if(allProfiles.length > 0) 
				  values += "("+ (i + 1) +", 1,'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"')"
				  				
			  console.log('Execute: ',sql + values)
			  
			  connection.query( sql + values, function (error, results, fields) {
					  
				  sql = "INSERT IGNORE INTO userModels (id, name, userId, isActive, userModel, createdAt, updatedAt) VALUES "
				  values = '';	
				  i = 0;
				  for(i = 0; i < allProfiles.length - 1; i++)
					  values += "("+ (i + 1) +","+ (i + 1) +","+ (i + 1) +", 1,"+connection.escape(JSON.stringify(allProfiles[i]))+",'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"'),"
	
				  if(allProfiles.length > 0) 
					  values += "("+ (i + 1) +","+ (i + 1) +","+ (i + 1) +", 1,"+connection.escape(JSON.stringify(allProfiles[i]))+",'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"')"
					  
				  console.log('Execute: ',sql + values)
					  
				  // Use the connection
				  connection.query( sql + values, function (error, results, fields) {
					  
						    // When done with the connection, release it.
						    connection.release();
						 
						    // Handle error after the release.
						    if (error) throw error;
						    
						    //close connection
						    pool.end()
				  });	
				});	
			});
	});
};

/**
 * Write context to DB
 */
module.exports.write_context_to_db = function (user_id, user_context) {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		  
		  const qr = "UPDATE userModels " + 
		   			 "SET userContext = " + connection.escape(JSON.stringify(user_context)) + " " + 
		   			 "WHERE id = '"+user_id+"' AND isActive = '1';"
		   			 
		  // Use the connection
		  connection.query(qr, (error, results, fields) => {
			  
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;				 
		   });		  		  
	});
};

/**
 * Write context and content to DB
 */
module.exports.write_content_to_db = function (user_id, user_context, user_content) {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		  
		 var qr = "UPDATE userModels " + 
			   	  "SET userContext = " + connection.escape(JSON.stringify(user_context)) + ", " + 
			   	  "userContent = " + connection.escape(JSON.stringify(user_content)) + " " + 
			   	  "WHERE id = '"+user_id+"' AND isActive = '1';"
		 	  
		  // Use the connection
		  connection.query(qr, (error, results, fields) => {
			  
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
		  });
	});
};

/**
 * Write context and content to DB
 */
module.exports.read_event_from_db = function (user_id, callback) {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!

		  var sql = "SELECT event " +
	  		    	"FROM history " +
	  		    	"WHERE id = "+user_id+";";
		  
		  // Use the connection
		 connection.query(sql, (error, results, fields) => {
			  
				    // When done with the connection, release it.
				    connection.release();
				    	
				    // Handle error after the release.
				    if (error) throw error;
				    
				    callback(results[0])
		  });
	});
	
};

/**
 * Update user interaction event
 */
module.exports.update_event_db = function (user_id, event) {

	//create full preference set
	var full_event = JSON.stringify(emptyPrefs, function (key, value) {
		if(key in event)
			return event[key]
		else
			return value
	})
		
	//execute
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		  
		  var sql = "INSERT INTO history (id, event) VALUES ("+user_id+","+connection.escape(full_event)+") "+
			  		"ON DUPLICATE KEY UPDATE event = JSON_MERGE_PRESERVE(event, "+connection.escape(full_event)+");"		
			  		
		  // Use the connection
		  connection.query(sql, (error, results, fields) => {
			  
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
				    
				    console.log("user["+user_id+"]: Event has been updated...")
		 });	
	});
};




