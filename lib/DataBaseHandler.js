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

var Numeric = require("./DimensionHandlers").Numeric
var IntegerNumeric = require("./DimensionHandlers").IntegerNumeric
var DoubleNumeric = require("./DimensionHandlers").DoubleNumeric
var Nominal = require("./DimensionHandlers").Nominal
var Ordinal = require("./DimensionHandlers").Ordinal
var SymmetricBinary = require("./DimensionHandlers").SymmetricBinary
var Color = require("./DimensionHandlers").Color
var MultiNominal = require("./DimensionHandlers").MultiNominal

//prepare an empty user preferences
const DimensionsHandlers = require('../lib/GENERATED_dimensions_handlers.js');
const emptyPrefs = {};
for (var [key, value] of DimensionsHandlers.preferenceHandlers)
	emptyPrefs[key] = value.missingValue


//Prepare db
//prepare_db();

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
					"counter INT NOT NULL DEFAULT 0,  " +
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
 * Create necessary tables and constrains
 * @returns
 */
function prepare_db_multiDimensions () {
	
	pool.getConnection(function(err, connection) {		 
		  if (err) throw err; // not connected!
		  
		  var index = 0;
		  var sql = "CREATE TABLE IF NOT EXISTS `history_dimensions` (id INT NOT NULL,\n";
		  for (var [key, value] of DimensionsHandlers.preferenceHandlers){

			  sql += "p"+ index++;
			  
			  if(value instanceof SymmetricBinary)
				  sql += " BOOLEAN NOT NULL DEFAULT "+value.missingValue+",\n";
			
			  else if(value instanceof Nominal)
				  sql += " CHAR(10),\n";  

			  else if(value instanceof Ordinal)
				  sql += " CHAR(10),\n"; 
			  
			  else if(value instanceof DoubleNumeric)
				  sql += " DOUBLE NOT NULL DEFAULT "+value.missingValue+",\n"; 
			  
			  else if(value instanceof IntegerNumeric)
				  sql += " INT NOT NULL DEFAULT "+value.missingValue+",\n"; 
			  
			  else if(value instanceof Color)
				  sql += " INT NOT NULL DEFAULT 0x0,\n"; 

		  }
		  
		  index = 0;
		  for (var [key, value] of DimensionsHandlers.contextHandlers){

			  sql += "cxt"+ index++;
			  
			  if(value instanceof SymmetricBinary)
				  sql += " BOOLEAN NOT NULL DEFAULT "+value.missingValue+",\n";
			
			  else if(value instanceof Nominal)
				  sql += " CHAR(10),\n";  

			  else if(value instanceof Ordinal)
				  sql += " CHAR(10),\n"; 
			  
			  else if(value instanceof DoubleNumeric)
				  sql += " DOUBLE NOT NULL DEFAULT "+value.missingValue+",\n"; 
			  
			  else if(value instanceof IntegerNumeric)
				  sql += " INT NOT NULL DEFAULT "+value.missingValue+",\n"; 
			  
			  else if(value instanceof Color)
				  sql += " INT NOT NULL DEFAULT 0x0,\n"; 
		  }
		  
		  index = 0;
		  for (var [key, value] of DimensionsHandlers.contentHandlers){

			  sql += "cnt"+ index++;
			  
			  if(value instanceof SymmetricBinary)
				  sql += " BOOLEAN NOT NULL DEFAULT "+value.missingValue+",\n";
			
			  else if(value instanceof Nominal)
				  sql += " CHAR(10),\n";  

			  else if(value instanceof Ordinal)
				  sql += " CHAR(10),\n"; 
			  
			  else if(value instanceof DoubleNumeric)
				  sql += " DOUBLE NOT NULL DEFAULT "+value.missingValue+",\n"; 
			  
			  else if(value instanceof IntegerNumeric)
				  sql += " INT NOT NULL DEFAULT "+value.missingValue+",\n"; 
			  
			  else if(value instanceof Color)
				  sql += " INT NOT NULL DEFAULT 0x0,\n"; 

		  }
		  
		  sql += "FOREIGN KEY (id) REFERENCES users (id))\n" +
		  		 "ENGINE = InnoDB " +
		  		 "DEFAULT CHARSET = utf8 " +
		  		 "COLLATE utf8_unicode_ci";
		  
		  console.log(sql)
					
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
		  
		  var sql = "INSERT INTO history (id, event, counter) VALUES ("+user_id+","+connection.escape(full_event)+", 1) "+
			  		"ON DUPLICATE KEY UPDATE event = JSON_MERGE_PRESERVE(event, "+connection.escape(full_event)+"), counter = counter + 1;"		
			  		
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


/**
 	prepare_db_multiDimensions()
 */

/*

var json1 = JSON.parse("{ \"user_id\": 1,"
	+ "	 \"preferences\": {" +
	"		\"http://registry.easytv.eu/common/volume\": 1," + 
	"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2," + 
	"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"," + 
	"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" 
	+ "}}");


module.exports.read_event_from_db(1, (x) => {console.log(x)});
module.exports.update_event_db(1, json1.preferences);

*/


