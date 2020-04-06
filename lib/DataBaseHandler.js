/**
 * 
 */

var mysql = require('mysql')
var host = process.env.DB_HOST || 'localhost';
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

/**
 * Write context to DB
 */
module.exports.insert_to_db = function () {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		 
		  
		  var fs = require('fs')
		  var file = fs.readFile('/home/salim/Desktop/profiles/response.json', (err, data) => 
		  {
			  if (err) throw err;
			  var allProfiles = JSON.parse(data).allUserModels;

			  var sql = "INSERT IGNORE INTO users (id, isActivated, createdAt, updatedAt) VALUES "
			  var values = '';	
			  var i = 0;
			  for(i = 0; i < allProfiles.length - 1; i++)
				  values += "("+ (i + 1) +", 1,'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"'),"

			  if(allProfiles.length > 0) 
				  values += "("+ (i + 1) +", 1,'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"')"
				  				
			  console.log('Execute: ',sql + values)
			  connection.query(
				sql + values,
				function (error, results, fields) {
					  

				  sql = "INSERT IGNORE INTO userModels (id, name, userId, isActive, userModel, createdAt, updatedAt) VALUES "
				  values = '';	
				  i = 0;
				  for(i = 0; i < allProfiles.length - 1; i++)
					  values += "("+ (i + 1) +","+ (i + 1) +","+ (i + 1) +", 1,"+connection.escape(JSON.stringify(allProfiles[i]))+",'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"'),"
	
				  if(allProfiles.length > 0) 
					  values += "("+ (i + 1) +","+ (i + 1) +","+ (i + 1) +", 1,"+connection.escape(JSON.stringify(allProfiles[i]))+",'"+new Date().toISOString().slice(0,10)+"','"+new Date().toISOString().slice(0,10)+"')"
					  
				  console.log('Execute: ',sql + values)
					  
				  // Use the connection
				  connection.query(
						sql + values, 
				  		function (error, results, fields) {
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
		 
		  var qr = "UPDATE userModels " + 
	  			   "SET userContext = " + connection.escape(JSON.stringify(user_context)) + " " + 
	  			   "WHERE id = '"+user_id+"' AND isActive = '1';"
		  		  
		  // Use the connection
		  connection.query(
				qr, 
		  		function (error, results, fields) {
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
				 
				    // Don't use the connection here, it has been returned to the pool.
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
		  connection.query(
				  qr, 
		  		function (error, results, fields) {
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
				 
				    // Don't use the connection here, it has been returned to the pool.
				});
	});
};

/**
 * run db test connection
 * @returns
 */
function test_db_connection() {
	
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		  
		  // Use the connection
		  connection.query(
				"SELECT 1 + 1 AS solution", 
		  		function (error, results, fields) {

					console.log("results:", results)

				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
				 
				    // Don't use the connection here, it has been returned to the pool.
				    
				    //end the pool connections
				    pool.end()
				});
	});
};


