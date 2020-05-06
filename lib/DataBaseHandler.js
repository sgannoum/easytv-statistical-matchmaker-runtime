var fs = require("fs")
var mysql = require('mysql')
var host = process.env.DB_HOST || '172.20.0.2';
var port = process.env.DB_PORT || '3306';
var database = process.env.DB_NAME || 'easytv';
var user = process.env.DB_USER || 'easytv';
var password = process.env.DB_PASSWORD || 'easytv';

if(process.env.DB_PASSWORD_FILE)
	password = fs.readFileSync(process.env.DB_PASSWORD_FILE, 'utf8').trim()

var pool  = mysql.createPool({
  connectionLimit : 5,
  host: host,
  port: port,
  database: database,
  user: user,
  password: password,
});

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

//Empty preferences values
const emptyPrefs = {};
for (var [key, value] of DimensionsHandlers.preferenceHandlers)
	emptyPrefs[key] = value.missingValue

//Empty context values
const emptyContext = {};
for (var [key, value] of DimensionsHandlers.contextHandlers)
	emptyContext[key] = value.missingValue


//Prepare db, create necessary tables
prepare_db();

/**
 * Create necessary tables and constrains
 * @returns
 */
function prepare_db () {
	
	console.log("Prepare DB...")											  
	pool.getConnection(function(err, connection) {		 
		  if (err) throw err; // not connected!
		  
		  var create_table_history = 
		  		"CREATE TABLE IF NOT EXISTS `interaction_history` (" +
	  			"id INT NOT NULL, " +
				"preferences JSON,  " +
				"context JSON,  " +
				"time TIME NOT NULL,  " +
				"PRIMARY KEY (id, time), " +
				"FOREIGN KEY (id) REFERENCES users (id)) " +
				"ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;"
					
		  // Use the connection
		  connection.query(create_table_history, (error, results, fields) => {
					
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
				    
				    console.log("Table history created...Created")	
		  });	
	 });
	
	
	pool.getConnection(function(err, connection) {		 
		  if (err) throw err; // not connected!

		  var create_table_profile_modification_suggestions = 
		  		"CREATE TABLE IF NOT EXISTS `profile_modification_suggestions` (" +
	  			"id INT NOT NULL, " +
				"suggestion JSON,  " +
				"PRIMARY KEY (id), " +
				"FOREIGN KEY (id) REFERENCES users (id)) " +
				"ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;"
				
		  // Use the connection
		  connection.query(create_table_profile_modification_suggestions, (error, results, fields) => {
					
				    // When done with the connection, release it.
				    connection.release();
				 
				    // Handle error after the release.
				    if (error) throw error;
				    
				    console.log("Table profile modification suggestion...Created")	
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
function insert_to_db (profiles_file = '/home/salim/Desktop/profiles/response.json') {
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
function write_context_to_db (user_id, user_context) {
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
function write_content_to_db (user_id, user_context, user_content) {
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
function read_profile_from_db (user_id, callback) {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!

		  var sql = "SELECT userModel as userPreferences, userContext, userContent " +
	  		    	"FROM userModels " +
	  		    	"WHERE id = "+user_id+";";
		  
		  // Use the connection
		 connection.query(sql, (error, results, fields) => {
			  
				    // When done with the connection, release it.
				    connection.release();
				    	
				    // Handle error after the release.
				    if (error) throw error;
				    				    				        
				    callback(JSON.parse('{' +
				    		'"user_id": '+user_id +
				    		', "user_profile": '+ results[0].userPreferences +
				    		((results[0].userContext != undefined) ? ', "user_context": '+ results[0].userContext : '') +
				    		((results[0].userContent != undefined) ? ', "user_content": '+ results[0].userContent : '') +
				    		'}'))
		  });
	});
};

/**
 * Write context and content to DB
 */
function read_profiles_from_db (callback) {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!

		  var sql = "SELECT * " +
	  		    	"FROM userModels;";
		  
		  // Use the connection
		 connection.query(sql, (error, results, fields) => {
			  
				    // When done with the connection, release it.
				    connection.release();
				    	
				    // Handle error after the release.
				    if (error) throw error;
				    				    
				    for(var profile of results)
					    callback(JSON.parse('{' +
					    		'"user_id": '+profile.id +
					    		', "user_profile": '+ profile.userModel +
					    		((profile.userContext != undefined) ? ', "user_context": '+ profile.userContext : '') +
					    		((profile.userContent != undefined) ? ', "user_content": '+ profile.userContent : '') +
					    		'}'))
		  });
	});
};

/**
 * Write context and content to DB
 */
function read_event_from_db (user_id, callback) {
	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!

		  var sql = "SELECT * " +
	  		    	"FROM interaction_history " +
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
function update_event_db (user_events) {

	pool.getConnection(function(err, connection) {
		  if (err) throw err; // not connected!
		  
		  var values = ""
		  var user_id = user_events.user_id
		  var interaction_events = user_events.interaction_events
		  for(i = 0; i < interaction_events.length; i++){
			  var event = interaction_events[i]
			  var escaped_preferences = connection.escape(JSON.stringify(event.preferences))
			  var escaped_context = 	connection.escape(JSON.stringify(event.user_context))
			  var escaped_event_time = 	connection.escape(event.user_context['http://registry.easytv.eu/context/time'])
			  values += "("+user_id+","+escaped_preferences+","+escaped_context+","+escaped_event_time+"),"
		  }
		  
		  values = values.substring(0, values.length - 1);

		  var sql = "INSERT INTO interaction_history (id, preferences, context, time) VALUES "+values+";"	
			  		
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
 * Export functions
 */
module.exports.write_context_to_db = write_context_to_db;
module.exports.write_content_to_db = write_content_to_db;
module.exports.read_profile_from_db = read_profile_from_db;
module.exports.read_profiles_from_db = read_profiles_from_db;
module.exports.read_event_from_db = read_event_from_db;
module.exports.update_event_db = update_event_db;


var events = JSON.parse( 
		  "{\"user_id\": 1,"
		+ "	\"interaction_events\": ["
		+"{"
		+ "	    \"user_context\": {"
		+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
		+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
		+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
		+ "	        \"http://registry.easytv.eu/context/time\": \"08:06:46\","
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/width\": 720,"  
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/height\": 1344," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/diameter\": 5.5," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/xdpi\": 257.5769958496094," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/ydpi\": 283.53399658203125," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityValue\": 2," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityBucket\": \"xhdpi\"" 
		+ "	    },"
		+ "	    \"preferences\": {"
		+ "				\"http://registry.easytv.eu/common/volume\": 5," 
		+ "				\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2,"  
		+ "				\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"," 
		+ "				\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" 
		+ "}}," 
		+"{"
		+ "	    \"user_context\": {"
		+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
		+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
		+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
		+ "	        \"http://registry.easytv.eu/context/time\": \"08:08:46\","
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/width\": 720,"  
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/height\": 1344," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/diameter\": 5.5," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/xdpi\": 257.5769958496094," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/ydpi\": 283.53399658203125," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityValue\": 2," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityBucket\": \"xhdpi\"" 
		+ "	    },"
		+ "	    \"preferences\": {"
		+ "				\"http://registry.easytv.eu/common/volume\": 5," 
		+ "				\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2,"  
		+ "				\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"," 
		+ "				\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" 
		+ "}}," 
		+"{"
		+ "	    \"user_context\": {"
		+ "	        \"http://registry.easytv.eu/context/light\": \"hallway\","
		+ "	        \"http://registry.easytv.eu/context/location\": \"es\","
		+ "	        \"http://registry.easytv.eu/context/proximity\": 99,"
		+ "	        \"http://registry.easytv.eu/context/time\": \"08:10:46\","
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/width\": 720,"  
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/height\": 1344," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/diameter\": 5.5," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/xdpi\": 257.5769958496094," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/ydpi\": 283.53399658203125," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityValue\": 2," 
		+ "        	\"http://registry.easytv.eu/context/device/screenSize/densityBucket\": \"xhdpi\"" 
		+ "	    },"
		+ "	    \"preferences\": {"
		+ "				\"http://registry.easytv.eu/common/volume\": 5," 
		+ "				\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2,"  
		+ "				\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"," 
		+ "				\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" 
		+ "}}" 
		+"]}");


update_event_db(events);


/**
 * Read all profiles and save them to files
 */
/*
read_profiles_from_db((profile) => { 
	var fs = require('fs')
	var fname = 'profile_'+profile.user_id+'.json'
	fs.writeFile('/home/salim/Desktop/profiles/DB/'+fname, JSON.stringify(profile, 4, 4), (err) => {
		  if (err) throw err;
		  console.log(fname, 'has been saved!');
		}); 
});
*/



