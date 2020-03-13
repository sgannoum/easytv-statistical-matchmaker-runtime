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
  connectionLimit : 10,
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
module.exports.write_context_to_db = function (user_id, user_context) {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		 
		  // Use the connection
		  connection.query(
				"UPDATE userModels" + 
		  		"SET userContext='"+ JSON.stringify(user_context)+"'" + 
		  		"WHERE id = "+user_id+" AND isActive = true;", 
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
		 
		  // Use the connection
		  connection.query(
				"UPDATE userModels" + 
		  		"SET userContext='"+ JSON.stringify(user_context)+"' userContent='"+ JSON.stringify(user_content)+"'" +
		  		"WHERE id = "+user_id+" AND isActive = true;", 
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
									
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
				 
				    // Don't use the connection here, it has been returned to the pool.
				});

	});
};

//test db conntection
test_db_connection();
