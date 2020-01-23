
console.log("\nSimilarityMeasureTests....")

const assert = require('assert');
const similarityDistanceClass = require('../lib/SimilarityDistance.js');


/**
 * Taken from the auto generated file
 */
	var Numeric = require("../lib/DimensionHandlers").Numeric
	var Nominal = require("../lib/DimensionHandlers").Nominal
	var Ordinal = require("../lib/DimensionHandlers").Ordinal
	var SymmetricBinary = require("../lib/DimensionHandlers").SymmetricBinary
	var Color = require("../lib/DimensionHandlers").Color
	

/**
 * Test numeric attribute similarity function
 * @returns
 */
function test_numeric_attribute(){
	
	console.log("test_numeric_attribute....")
		
	var myMap = new Map();
	myMap.set("Numeric", new Numeric(64.0, 22.0));

	//initialize
	var numericSimilarityDistance = new similarityDistanceClass(myMap);

	var data = [ {"Numeric": 45},
				 {"Numeric": 22},
				 {"Numeric": 64},
				 {"Numeric": 28}];
	
	var expectedValues = [[0, 0, 0, 0],
						  [0.45238095238095233,  0, 0, 0],
						  [0.5476190476190477, 0.0,  0, 0] ,
						  [0.5952380952380952, 0.8571428571428572, 0.1428571428571429, 0]
						 ];
	
	var actualValues = [[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0]];
	
	for(var i = 1; i < expectedValues.length; i++) {
		//console.log()
		for(var j = 0; j < i; j++) {
			actualValues[i][j] = numericSimilarityDistance.compute(data[i], data[j]);
			//console.log(actualValues[i][j]+ " , ")
			assert(actualValues[i][j] ==  expectedValues[i][j], "["+i+"]["+j+"]: "+actualValues[i][j] + ' != ' +expectedValues[i][j]);
		}
	}
	
	console.log("PASS")
}

	
/**
 * Test Nominal attribute similarity function
 * @returns
 */
function test_nominal_attribute(){
	
	console.log("test_nominal_attribute....")

	
	var myMap = new Map();
	myMap.set("Nominal", new Nominal(["0","1","2"]));

	//initialize
	var ordinalSimilarityDistance = new similarityDistanceClass(myMap);

	var data = [ {"Nominal": "0"},
				 {"Nominal": "1"},
				 {"Nominal": "2"},
				 {"Nominal": "0"}];
	
	var expectedValues = [[0, 0, 0, 0],
						  [0.0,  0, 0, 0],
						  [0.0, 0.0,  0, 0],
						  [1.0, 0.0, 0.0, 0]];
	
	var actualValues = [[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0]];
	
	for(var i = 1; i < expectedValues.length; i++) {
		//console.log()
		for(var j = 0; j < i; j++) {
			actualValues[i][j] = ordinalSimilarityDistance.compute(data[i], data[j]);
			//console.log(actualValues[i][j]+ " , ")
			assert(actualValues[i][j] ==  expectedValues[i][j], "["+i+"]["+j+"]: "+actualValues[i][j] + ' != ' +expectedValues[i][j]);
		}
	}
	
	console.log("PASS")
}


/**
 * Test ordinal attribute similarity function
 * @returns
 */
function test_ordinal_attribute(){
	
	console.log("test_ordinal_attribute....")

	
	var myMap = new Map();
	myMap.set("Ordinal", new Ordinal(["0","1","2"], 2, 0));

	//initialize
	var ordinalSimilarityDistance = new similarityDistanceClass(myMap);

	var data = [ {"Ordinal": "2"},
				 {"Ordinal": "0"},
				 {"Ordinal": "1"},
				 {"Ordinal": "2"}];
	
	var expectedValues = [[0, 0, 0, 0],
						  [0.5,  0, 0, 0],
						  [0.75, 0.75,  0, 0],
						  [1.0, 0.5, 0.75, 0]];
	
	var actualValues = [[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0]];
	
	for(var i = 1; i < expectedValues.length; i++) {
		//console.log()
		for(var j = 0; j < i; j++) {
			actualValues[i][j] = ordinalSimilarityDistance.compute(data[i], data[j]);
			//console.log(actualValues[i][j]+ " , ")
			assert(actualValues[i][j] ==  expectedValues[i][j], "["+i+"]["+j+"]: "+actualValues[i][j] + ' != ' +expectedValues[i][j]);
		}
	}
	
	console.log("PASS")
}


/**
 * Test ordinal attribute similarity function
 * @returns
 */
function test_mixed_attributes(){
	
	console.log("test_mixed_attributes....")

	
	var myMap = new Map();
	myMap.set("Nominal", new Nominal(["0","1","2"], 2, 0));
	myMap.set("Ordinal", new Ordinal(["0","1","2"], 2, 0));
	myMap.set("Numeric", new Numeric(64.0, 22.0));

	//initialize
	var ordinalSimilarityDistance = new similarityDistanceClass(myMap);

	var data = [ {"Nominal": "0", "Ordinal": "2", "Numeric": 45},
				 {"Nominal": "1", "Ordinal": "0", "Numeric": 22},
				 {"Nominal": "2", "Ordinal": "1", "Numeric": 64},
				 {"Nominal": "0", "Ordinal": "2", "Numeric": 28}];
	
	var expectedValues = [[0, 0, 0, 0],
						  [0.31746031746031755,  0, 0, 0],
						  [0.43253968253968256, 0.25,  0, 0],
						  [0.8650793650793651, 0.45238095238095244, 0.29761904761904756, 0]];
	
	var actualValues = [[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0],
						[0, 0, 0, 0]];
	
	for(var i = 1; i < expectedValues.length; i++) {
		//console.log()
		for(var j = 0; j < i; j++) {
			actualValues[i][j] = ordinalSimilarityDistance.compute(data[i], data[j]);
			//console.log(actualValues[i][j]+ " , ")
			assert(actualValues[i][j] ==  expectedValues[i][j], "["+i+"]["+j+"]: "+ actualValues[i][j] + ' != ' +expectedValues[i][j]);
		}
	}
	
	console.log("PASS")
}
	
test_numeric_attribute();
test_nominal_attribute();
test_ordinal_attribute();
test_mixed_attributes();