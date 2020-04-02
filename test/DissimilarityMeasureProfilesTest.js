
console.log("\nDissimilarityMeasurevarsTest....")

const assert = require('assert');
const DimensionsHandlers = require('../lib/GENERATED_dimensions_handlers.js');
const DissimilarityDistance = require("../lib/DissimilarityDistance")
const distanceMeasure = new DissimilarityDistance(DimensionsHandlers.preferenceHandlers);

function test_only_integer_dimension() {
	
	console.log("test_only_integer_dimension....")

	
	var profile_1 = JSON.parse("{" + 
							"    \"user_id\": 0," + 
							"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
							"		\"http://registry.easytv.eu/common/volume\": 5" + 
							"		" + 
							"    }}}}" + 
							"}").user_profile.user_preferences.default.preferences;
	
	var profile_2 = JSON.parse("{" + 
							"    \"user_id\": 0," + 
							"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
							"		\"http://registry.easytv.eu/common/volume\": 3" + 
							"		" + 
							"    }}}}" + 
							"}").user_profile.user_preferences.default.preferences;
	
	var profile_3 = JSON.parse("{" + 
							"    \"user_id\": 0," + 
							"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
							"		\"http://registry.easytv.eu/common/volume\": 5" + 
							"		" + 
							"    }}}}" + 
							"}").user_profile.user_preferences.default.preferences;
	
	var profile_4 = JSON.parse("{" + 
							"    \"user_id\": 0," + 
							"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
							"		\"http://registry.easytv.eu/common/volume\": 20" + 
							"		" + 
							"    }}}}" + 
							"}").user_profile.user_preferences.default.preferences;
	
	var profile_5 = JSON.parse("{" + 
							"    \"user_id\": 0," + 
							"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
							"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 12.0" + 
							"		" + 
							"    }}}}" + 
							"}").user_profile.user_preferences.default.preferences;
	
	var distance_12 = distanceMeasure.compute(profile_1, profile_2);	
	var distance_13 = distanceMeasure.compute(profile_1, profile_3);	
	var distance_14 = distanceMeasure.compute(profile_1, profile_4);	
	var distance_15 = distanceMeasure.compute(profile_1, profile_5);	
	
	//check that first and second var are more similar than first and fourth
	assert(distance_12 < distance_14);
	
	//check that first and third var are similar 
	assert(distance_13 == 0.0);
	
	assert(distance_12 < distance_15);

	assert(distance_14 < distance_15);
	
	console.log("PASS")
}

function test_only_double_dimension(){
	
	console.log("test_only_double_dimension....")
	
	var profile_1 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;

	var profile_2 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 0.8" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	 
	var profile_3 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	
	var profile_4 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 2.5" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	var profile_5 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/common/volume\": 5" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	

	var distance_12 = distanceMeasure.compute(profile_1, profile_2);	
	var distance_13 = distanceMeasure.compute(profile_1, profile_3);	
	var distance_14 = distanceMeasure.compute(profile_1, profile_4);	
	var distance_15 = distanceMeasure.compute(profile_1, profile_5);	

	//check that first and second profiles are more similar than first and fourth
	assert(distance_12 < distance_14);
	
	//check that first and third profiles are similar 
	assert(distance_13 == 0.0);
	
	assert(distance_12 < distance_15);

	assert(distance_14 < distance_15);
	
	console.log("PASS")
}

function test_only_nomial_dimension() {
	
	console.log("test_only_nomial_dimension....")

	
	var profile_1 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;

	var profile_2 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"slow\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	var profile_3 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	
	var profile_4 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"fast\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	var profile_5 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/common/volume\": 5" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;

	var  distance_12 = distanceMeasure.compute(profile_1, profile_2);	
	var  distance_13 = distanceMeasure.compute(profile_1, profile_3);	
	var  distance_14 = distanceMeasure.compute(profile_1, profile_4);	
	var  distance_15 = distanceMeasure.compute(profile_1, profile_5);	


	//check that these two dimensions are the same
	assert(distance_12 == distance_14);
	
	//check that first and third profiles are similar 
	assert(distance_13 == 0.0);
	
	assert(distance_12 > distance_15);

	assert(distance_14 > distance_15);
	
	console.log("PASS")
}

function test_only_ordinal_dimension() {
	
	console.log("test_only_ordinal_dimension....")

	
	var profile_1 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;

	var profile_2 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"15\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	var profile_3 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	
	var profile_4 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"23\"" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;
	
	var profile_5 = JSON.parse("{" + 
					"    \"user_id\": 0," + 
					"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
					"		\"http://registry.easytv.eu/common/volume\": 5" + 
					"		" + 
					"    }}}}" + 
					"}").user_profile.user_preferences.default.preferences;

	var  distance_12 = distanceMeasure.compute(profile_1, profile_2);	
	var  distance_13 = distanceMeasure.compute(profile_1, profile_3);	
	var  distance_14 = distanceMeasure.compute(profile_1, profile_4);	
	var  distance_15 = distanceMeasure.compute(profile_1, profile_5);	


	//check that these two dimensions are the same
	assert(distance_12 == distance_14);
	
	//check that first and third profiles are similar 
	assert(distance_13 == 0.0);
	
	assert(distance_12 < distance_15);

	assert(distance_14 < distance_15);
	
	console.log("PASS")
}


function test_dimensions_1() {
	
	console.log("test_dimensions_1....")
	
	var profile_1 = JSON.parse("{" + 
			"    \"user_id\": 0," + 
			"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
			"		\"http://registry.easytv.eu/common/volume\": 5," + 
			"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2," + 
			"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"," + 
			"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" + 
			"    }}}}" + 
			"}").user_profile.user_preferences.default.preferences;

	var profile_2 = JSON.parse("{" + 
			"    \"user_id\": 0," + 
			"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
			"		\"http://registry.easytv.eu/common/volume\": 2," + 
			"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 0.8," + 
			"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"slow\"," + 
			"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"15\"" + 
			"    }}}}" + 
			"}").user_profile.user_preferences.default.preferences;
	
	var profile_3 = JSON.parse("{" + 
			"    \"user_id\": 0," + 
			"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
			"		\"http://registry.easytv.eu/common/volume\": 5," + 
			"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 1.2," + 
			"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"normal\"," + 
			"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"20\"" + 
			"    }}}}" + 
			"}").user_profile.user_preferences.default.preferences;
	
	
	var profile_4 = JSON.parse("{" + 
			"    \"user_id\": 0," + 
			"    \"user_profile\": {\"user_preferences\": {\"default\": {\"preferences\": {" + 
			"		\"http://registry.easytv.eu/common/volume\": 10," + 
			"		\"http://registry.easytv.eu/application/cs/audio/eq/low/pass/qFactor\": 2.2," + 
			"		\"http://registry.easytv.eu/application/hbbtv/screen/reader/speed\": \"fast\"," + 
			"		\"http://registry.easytv.eu/application/cs/ui/text/size\": \"23\"" + 
			"    }}}}" + 
			"}").user_profile.user_preferences.default.preferences;
	

	var  distance_12 = distanceMeasure.compute(profile_1, profile_2);	
	var  distance_13 = distanceMeasure.compute(profile_1, profile_3);	
	var  distance_14 = distanceMeasure.compute(profile_1, profile_4);	


	//check that these two dimensions are the same
	assert(distance_12 < distance_14);
	
	//check that first and third profiles are similar 
	assert(distance_13 == 0.0);	
	
	console.log("PASS")
}

test_dimensions_1();
test_only_ordinal_dimension();
test_only_nomial_dimension();
test_only_double_dimension();
test_only_integer_dimension();
