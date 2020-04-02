
console.log("\nDisimilarityMeasureTests....")

const assert = require('assert');
const SimilarityDistanceClass = require('../lib/SimilarityDistance.js');

/**
 * Taken from the auto generated file
 */
	var Numeric = require("../lib/DimensionHandlers").Numeric
	var IntegerNumeric = require("../lib/DimensionHandlers").IntegerNumeric
	var DoubleNumeric = require("../lib/DimensionHandlers").DoubleNumeric
	var Nominal = require("../lib/DimensionHandlers").Nominal
	var Ordinal = require("../lib/DimensionHandlers").Ordinal
	var SymmetricBinary = require("../lib/DimensionHandlers").SymmetricBinary
	var MultiNominal = require("../lib/DimensionHandlers").MultiNominal
	var MultiNumeric = require("../lib/DimensionHandlers").MultiNumeric
	var Color = require("../lib/DimensionHandlers").Color
	
/**
 * Test numeric attribute similarity function
 * @returns
 */
function test_numeric_attribute(){
	
	console.log("test_numeric_attribute....")
		
	var myMap = new Map();
	myMap.set("Numeric", new Numeric(20.0, 0.0));

	//initialize
	var numericSimilarityDistance = new SimilarityDistanceClass(myMap);

	var data = [ {"Numeric": 5},
				 {"Numeric": 2},
				 {"Numeric": 5},
				 {"Numeric": 8},
				 {"Numeric": 9},
				 {"Numeric": 20},
				 {"Numeric": -1}
				 ];
	
	var similarity_0_1 = numericSimilarityDistance.compute(data[0],  data[1]);
	var similarity_0_2 = numericSimilarityDistance.compute(data[0],  data[2]);
	var similarity_0_3 = numericSimilarityDistance.compute(data[0],  data[3]);
	var similarity_0_4 = numericSimilarityDistance.compute(data[0],  data[4]);
	var similarity_0_5 = numericSimilarityDistance.compute(data[0],  data[5]);
	var similarity_0_6 = numericSimilarityDistance.compute(data[0],  data[6]); //with missing value
	var similarity_6_0 = numericSimilarityDistance.compute(data[6],  data[0]); //with missing value
	var similarity_6_6 = numericSimilarityDistance.compute(data[6],  data[6]); //with missing value
	

	//check that 5 is identical to 5
	assert(similarity_0_2 == 1.0);
	
	//check that 2 is same similar to 5 with 8
	assert(similarity_0_1 == similarity_0_3);
	
	//check that 2 is more similar to 5 than 9
	assert(similarity_0_1 > similarity_0_4);

	//check that 9 is more similar to 5 than 20
	assert(similarity_0_4 > similarity_0_5);
	
	
	//two missing values are identical
	assert(similarity_6_6 == 1.0);
	
	//distance with missing value is symmetric
	assert(similarity_0_6 == similarity_6_0);
	
	//check that 2 is more similar than missing value
	assert(similarity_0_1 > similarity_0_6);
	
	//check that 9 is more similar than missing value
	assert(similarity_0_4 > similarity_0_6);
	
	//check that missing value is more similar than 20
	assert(similarity_0_6 > similarity_0_5);
	
	console.log("PASS")
}

	
/**
 * Test Nominal attribute similarity function
 * @returns
 */
function test_nominal_attribute(){
	
	console.log("test_nominal_attribute....")

	
	var myMap = new Map();
	myMap.set("Nominal", new Nominal(["0","1","2", "3", "4"]));

	//initialize
	var similarityDist = new SimilarityDistanceClass(myMap);

	var data = [ {"Nominal": "1"},
				 {"Nominal": "0"},
				 {"Nominal": "1"},
				 {"Nominal": "2"},
				 {"Nominal": "3"},
				 {"Nominal": "4"},
				 {"Nominal": -1}
				 ];
	
	var similarity_0_1 = similarityDist.compute(data[0],  data[1]);
	var similarity_0_2 = similarityDist.compute(data[0],  data[2]);
	var similarity_0_3 = similarityDist.compute(data[0],  data[3]);
	var similarity_0_4 = similarityDist.compute(data[0],  data[4]);
	var similarity_0_5 = similarityDist.compute(data[0],  data[5]);
	var similarity_0_6 = similarityDist.compute(data[0],  data[6]); //with missing value
	var similarity_6_0 = similarityDist.compute(data[6],  data[0]); //with missing value
	var similarity_6_6 = similarityDist.compute(data[6],  data[6]); //with missing value

	//check that 1 is identical to 1
	assert(similarity_0_2 == 1.0);
	
	//check that 0 is same similar to 1 with 2
	assert(similarity_0_1 == similarity_0_3);
	
	//check that 0 is more similar to 1 than 3
	assert(similarity_0_1 == similarity_0_4);

	//check that 3 is more similar to 1 than 4
	assert(similarity_0_4 == similarity_0_5);
	
	
	//two missing values are identical
	assert(similarity_6_6 == 1.0);
	
	//distance with missing value is symmetric
	assert(similarity_0_6 == similarity_6_0);
	
	//check that 2 is more similar than missing value
	assert(similarity_0_1 == similarity_0_6);
	
	console.log("PASS")
}


/**
 * Test ordinal attribute similarity function
 * @returns
 */
function test_ordinal_attribute(){
	
	console.log("test_ordinal_attribute....")

	
	var myMap = new Map();
	myMap.set("Ordinal", new Ordinal(["0","1","2","3","4"], 4, 0));

	//initialize
	var similarityDist = new SimilarityDistanceClass(myMap);

	var data = [ {"Ordinal": "1"},
				 {"Ordinal": "0"},
				 {"Ordinal": "1"},
				 {"Ordinal": "2"},
				 {"Ordinal": "3"},
				 {"Ordinal": "4"},
				 {"Ordinal": -1}
				 ];
	
	var similarity_0_1 = similarityDist.compute(data[0],  data[1]);
	var similarity_0_2 = similarityDist.compute(data[0],  data[2]);
	var similarity_0_3 = similarityDist.compute(data[0],  data[3]);
	var similarity_0_4 = similarityDist.compute(data[0],  data[4]);
	var similarity_0_5 = similarityDist.compute(data[0],  data[5]);
	var similarity_0_6 = similarityDist.compute(data[0],  data[6]); //with missing value
	var similarity_6_0 = similarityDist.compute(data[6],  data[0]); //with missing value
	var similarity_6_6 = similarityDist.compute(data[6],  data[6]); //with missing value

	//check that 1 is identical to 1
	assert(similarity_0_2 == 1.0);
	
	//check that 0 is same similar to 1 with 2
	assert(similarity_0_1 == similarity_0_3);
	
	//check that 0 is more similar to 1 than 3
	assert(similarity_0_1 > similarity_0_4);

	//check that 3 is more similar to 1 than 4
	assert(similarity_0_4 > similarity_0_5);
	
	//two missing values are identical
	assert(similarity_6_6 == 1.0);
	
	//distance with missing value is symmetric
	assert(similarity_0_6 == similarity_6_0);
	
	//check that 0 is more similar than missing value
	assert(similarity_0_1 > similarity_0_6);
	
	//check that 3 is more similar than missing value
	assert(similarity_0_4 == similarity_0_6);
	
	//check that missing value is more similar than 20
	assert(similarity_0_6 > similarity_0_5);
	
	console.log("PASS")
}


function test_symmetricalBinary_attribute() {
		
	console.log("test_symmetricalBinary_attribute....")
	
	var myMap = new Map();
	myMap.set("SymmetricalBinary", new SymmetricBinary());

	//initialize
	var similarityDist = new SimilarityDistanceClass(myMap);

	var data = [ {"SymmetricalBinary": 1},
				 {"SymmetricalBinary": 0},
				 {"SymmetricalBinary": 1},
				 {"SymmetricalBinary": -1}
				 ];
		
	var similarity_0_1 = similarityDist.compute(data[0],  data[1]);
	var similarity_0_2 = similarityDist.compute(data[0],  data[2]);
	var similarity_0_3 = similarityDist.compute(data[0],  data[3]);
	var similarity_4_4 = similarityDist.compute(data[3],  data[3]);

	//check that 1 is identical to 1
	assert(similarity_0_2 == 1.0);
	
	//check that 1 is not identical to 0
	assert(similarity_0_1 == 0.0);
	
	//check that similarity with missing value is 0.0
	assert(similarity_0_3 == 0.0);
			
	//check that similarity of missing values is 1.0
	assert(similarity_4_4 == 1.0);
	
	console.log("PASS")
}

function test_multiNominal_attribute() {
	
	console.log("test_multiNominal_attribute....")
	
	var myMap = new Map();
	myMap.set("MultiNominal", new MultiNominal(8, 0.0));

	//initialize
	var similarityDist = new SimilarityDistanceClass(myMap);

	var data = [ {"MultiNominal": 0b00000011},
				 {"MultiNominal": 0b00000001},
				 {"MultiNominal": 0b00000011},
				 {"MultiNominal": 0b11100011},
				 {"MultiNominal": 0b11100111},
				 {"MultiNominal": 0b11111111},
				 {"MultiNominal": 0b00000000}
				 ];
		
	var similarity_0_1 = similarityDist.compute(data[0],  data[1]);
	var similarity_0_2 = similarityDist.compute(data[0],  data[2]);
	var similarity_0_3 = similarityDist.compute(data[0],  data[3]);
	var similarity_0_4 = similarityDist.compute(data[0],  data[4]);
	var similarity_0_5 = similarityDist.compute(data[0],  data[5]);
	var similarity_0_6 = similarityDist.compute(data[0],  data[6]); //with missing value
	var similarity_6_0 = similarityDist.compute(data[6],  data[0]); //with missing value
	var similarity_6_6 = similarityDist.compute(data[6],  data[6]); //with missing value

	//check that the element 0 is identical to element 2
	assert(similarity_0_2 == 1.0);
	
	//check the similarity with the element 1 differs from this of element 2
	assert(similarity_0_1 != similarity_0_2);
	
	//check that the element 1 is more similar than element 3
	assert(similarity_0_1 > similarity_0_3);
	
	//check that the element 1 is more similar than element 4
	assert(similarity_0_1 > similarity_0_4);
	
	//check that the element 4 is more similar than element 5
	assert(similarity_0_4 > similarity_0_5);
	
	//two missing values are identical
	assert(similarity_6_6 == 1.0);
	
	//distance with missing value is symmetric
	assert(similarity_0_6 == similarity_6_0);
	
	//check that the element 1 is more similar than element 6
	assert(similarity_0_1 > similarity_0_6);
	
	//check that the element 4 is more similar than element 6
	assert(similarity_0_4 > similarity_0_6);
	
	//check that the element 5 is more similar than element 6
	assert(similarity_0_5 > similarity_0_6);
	
	console.log("PASS")
}

function test_multiNumeric_attribute() {
	
	console.log("test_multiNumeric_attribute....")

	var myMap = new Map();
	myMap.set("MultiNumeric", new MultiNumeric([new Numeric(255, 0), new Numeric(255, 0), new Numeric(255, 0)], 8));

	//initialize
	var similarityDist = new SimilarityDistanceClass(myMap);

	var data = [ {"MultiNumeric": 0xff0000}, //red
				 {"MultiNumeric": 0xffa200}, //orange
				 {"MultiNumeric": 0xff0000}, //red
				 {"MultiNumeric": 0xfffb00}, //yellow
				 {"MultiNumeric": 0x0004ff},	//blue
				 {"MultiNumeric": 0xffffff},	//black
				 {"MultiNumeric": -1}		//missing value
			   ];
		
	var similarity_0_1 = similarityDist.compute(data[0],  data[1]);
	var similarity_0_2 = similarityDist.compute(data[0],  data[2]);
	var similarity_0_3 = similarityDist.compute(data[0],  data[3]);
	var similarity_0_4 = similarityDist.compute(data[0],  data[4]);
	var similarity_0_5 = similarityDist.compute(data[0],  data[5]);
	var similarity_0_6 = similarityDist.compute(data[0],  data[6]); //with missing value
	var similarity_6_0 = similarityDist.compute(data[6],  data[0]); //with missing value
	var similarity_6_6 = similarityDist.compute(data[6],  data[6]); //with missing value
	
	//check that 1 is identical to 1
	assert(similarity_0_2 == 1.0);
	
	//check that 0 is same similar to 1 with 2
	assert(similarity_0_1 != similarity_0_2);
	
	//check that red is more similar to orange than yellow
	assert(similarity_0_1 > similarity_0_3);
	
	//check that red is more similar to orange than blue
	assert(similarity_0_1 > similarity_0_4);
	
	//check that black is more similar than blue
	assert(similarity_0_5 > similarity_0_4);
	
	//two missing values are identical
	assert(similarity_6_6 == 1.0);
	
	//distance with missing value is symmetric
	assert(similarity_0_6 == similarity_6_0);
	
	//check that orange is more similar than no color
	assert(similarity_0_1 > similarity_0_6);
	
	//check that no color is more similar than blue
	assert(similarity_0_6 > similarity_0_4);
	
	//check that black and no color are the same similar to red
	assert(similarity_0_5 == similarity_0_6);
	
	console.log("PASS")
}

function test_colorAttribute_attribute() {
	
	console.log("test_colorAttribute_attribute....")

	var myMap = new Map();
	myMap.set("color", new Color(new IntegerNumeric(255, 0), new IntegerNumeric(255, 0), new IntegerNumeric(255, 0)));

	//initialize
	var similarityDist = new SimilarityDistanceClass(myMap);

	var data = [ {"color": "0xff0000"}, //red
				 {"color": "0xffa200"}, //orange
				 {"color": "0xff0000"}, //red
				 {"color": "0xfffb00"}, //yellow
				 {"color": "0x0004ff"},	//blue
				 {"color": "0xffffff"},	//black
				 {"color": "0x0"}		//missing value
			   ];
		
	var similarity_0_1 = similarityDist.compute(data[0],  data[1]);
	var similarity_0_2 = similarityDist.compute(data[0],  data[2]);
	var similarity_0_3 = similarityDist.compute(data[0],  data[3]);
	var similarity_0_4 = similarityDist.compute(data[0],  data[4]);
	var similarity_0_5 = similarityDist.compute(data[0],  data[5]);
	var similarity_0_6 = similarityDist.compute(data[0],  data[6]); //with missing value
	var similarity_6_0 = similarityDist.compute(data[6],  data[0]); //with missing value
	var similarity_6_6 = similarityDist.compute(data[6],  data[6]); //with missing value
	
		
	//check that 1 is identical to 1
	assert(similarity_0_2 == 1.0);
	
	//check that 0 is same similar to 1 with 2
	assert(similarity_0_1 != similarity_0_2);
	
	//check that red is more similar to orange than yellow
	assert(similarity_0_1 > similarity_0_3);
	
	//check that red is more similar to orange than blue
	assert(similarity_0_1 > similarity_0_4);
	
	//check that black is more similar than blue
	assert(similarity_0_5 > similarity_0_4);
	
	//two missing values are identical
	assert(similarity_6_6 == 1.0);
	
	//distance with missing value is symmetric
	assert(similarity_0_6 == similarity_6_0);
	
	//check that orange is more similar than no color
	assert(similarity_0_1 < similarity_0_6);
	
	//check that no color is more similar than blue
	assert(similarity_0_6 > similarity_0_4);
	
	//check that black and no color are the same similar to red
	assert(similarity_0_5 < similarity_0_6);
	
	console.log("PASS")
}

/**
 * Test ordinal attribute similarity function
 * @returns
 */
function test_mixed_attributes(){
	
	console.log("test_mixed_attributes....")

	var myMap = new Map();
	myMap.set("Nominal", new Nominal(["0","1","2", "3", "4"]));
	myMap.set("Ordinal", new Ordinal(["0","1","2","3","4"], 4, 0));
	myMap.set("Numeric", new Numeric(20.0, 0.0));

	//initialize
	var similarityDist = new SimilarityDistanceClass(myMap);

	var data = [ {"Nominal": "1", "Ordinal": "1", "Numeric": 5},
				 {"Nominal": "0", "Ordinal": "0", "Numeric": 2},
				 {"Nominal": "1", "Ordinal": "1", "Numeric": 5},
				 {"Nominal": "2", "Ordinal": "2", "Numeric": 8},
				 {"Nominal": "3", "Ordinal": "3", "Numeric": 9},
				 {"Nominal": "4", "Ordinal": "4", "Numeric": 20}
				 ];
	
	var similarity_0_1 = similarityDist.compute(data[0],  data[1]);
	var similarity_0_2 = similarityDist.compute(data[0],  data[2]);
	var similarity_0_3 = similarityDist.compute(data[0],  data[3]);
	var similarity_0_4 = similarityDist.compute(data[0],  data[4]);
	var similarity_0_5 = similarityDist.compute(data[0],  data[5]);

	//check that the first element is identical to second
	assert(similarity_0_2 == 1.0);
	
	//check that the first element and third one have the same similarity distance
	assert(similarity_0_1 == similarity_0_3);
	
	//check that the first element is more similar than the fourth one
	assert(similarity_0_1 > similarity_0_4);

	//check that the fourth element is more similar than the fifth
	assert(similarity_0_4 > similarity_0_5);
	
	console.log("PASS")
}
	
test_colorAttribute_attribute();
test_numeric_attribute();
test_nominal_attribute();
test_ordinal_attribute();
test_symmetricalBinary_attribute();
test_multiNominal_attribute();
test_multiNumeric_attribute();
test_mixed_attributes();