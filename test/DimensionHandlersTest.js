
console.log("\nDisimilarityMeasureTests....")

const assert = require('assert');
const SimilarityDistanceClass = require('../lib/SimilarityDistance.js');

/**
 * Taken from the auto generated file
 */
	var Numeric = require("../lib/DimensionHandlers").Numeric
	var DoubleNumeric = require("../lib/DimensionHandlers").DoubleNumeric
	var IntegerNumeric = require("../lib/DimensionHandlers").IntegerNumeric
	var Nominal = require("../lib/DimensionHandlers").Nominal
	var Ordinal = require("../lib/DimensionHandlers").Ordinal
	var SymmetricBinary = require("../lib/DimensionHandlers").SymmetricBinary
	var MultiNominal = require("../lib/DimensionHandlers").MultiNominal
	var MultiNumeric = require("../lib/DimensionHandlers").MultiNumeric
	var Color = require("../lib/DimensionHandlers").Color
	

function test_doubleNumeric_combine(){
	
	console.log("test_doubleNumeric_combine....")
		
	var doubleNumeric = new DoubleNumeric(20.0, 0.0);
	var a = 0.8, b = 0.9

	for(var i = 0.0 ; i < 1.0 ; i+= 0.1){
		var weigths = [i.toPrecision(1) , (1.0 - i).toPrecision(1)]
		assert(doubleNumeric.combine(a, b, weigths) == (a * weigths[0] + b * weigths[1]));
	}

	console.log("PASS")
}
	
function test_integerNumeric_combine(){
	
	console.log("test_integerNumeric_combine....")
		
	var integerNumeric = new IntegerNumeric(20, 0);
	var a = 0.8, b = 0.9

	for(var i = 0.0 ; i < 1.0 ; i+= 0.1){
		var weigths = [i , 1.0 - i]
		assert(integerNumeric.combine(a, b, weigths) == parseInt(a * weigths[0] + b * weigths[1], 10));
	}

	console.log("PASS")
}


function test_nominal_combine(){
	
	console.log("test_nominal_combine....")
		
	var nominal = new Nominal(["0","1","2", "3", "4"])
	var a = "0", b = "1"

	assert(nominal.combine(a, b, [1.0, 0.0]) == a);
	assert(nominal.combine(a, b, [0.5, 0.5]) == a);
	assert(nominal.combine(a, b, [0.4, 0.6]) == b);

	console.log("PASS")
}


function test_ordinal_combine(){
	
	console.log("test_ordinal_combine....")
		
	var ordinal = new Ordinal(["0","1","2","3","4"], 4, 0)
	var a = "0", b = "1"

	assert(ordinal.combine(a, b, [1.0, 0.0]) == a);
	assert(ordinal.combine(a, b, [0.5, 0.5]) == a);
	assert(ordinal.combine(a, b, [0.4, 0.6]) == b);

	console.log("PASS")
}

function test_symmetricBinary_combine(){
	
	console.log("test_symmetricBinary_combine....")
		
	var symmetricBinary = new SymmetricBinary()
	var a = true, b = false

	assert(symmetricBinary.combine(a, b, [1.0, 0.0]) == a);
	assert(symmetricBinary.combine(a, b, [0.5, 0.5]) == a);
	assert(symmetricBinary.combine(a, b, [0.4, 0.6]) == b);

	console.log("PASS")
}

function test_multiNumeric_combine(){
	
	console.log("test_color_combine....")
		
	var color = new MultiNumeric([new IntegerNumeric(255, 0), new IntegerNumeric(255, 0), new IntegerNumeric(255, 0)], 8)
	var a = 0xff0000 //red
	var b = 0xffffff //black

	assert(color.combine(a, b, [1.0, 0.0]) == a);
	assert(color.combine(a, b, [0.5, 0.5]) == 0xff7f7f);
	assert(color.combine(a, b, [0.4, 0.6]) == 0xff9999);

	console.log("PASS")
}

function test_color_combine(){
	
	console.log("test_color_combine....")
		
	var color = new Color(new IntegerNumeric(255, 0), new IntegerNumeric(255, 0), new IntegerNumeric(255, 0))
	var a = "#ff0000" //red
	var b = "#ffffff" //black

	assert(color.combine(a, b, [1.0, 0.0]) == a);
	assert(color.combine(a, b, [0.5, 0.5]) == "#ff7f7f");
	assert(color.combine(a, b, [0.4, 0.6]) == "#ff9999");

	console.log("PASS")
}

function test_color_as_integer_combine(){
	
	console.log("test_color_combine....")
		
	var integerNumeric = new IntegerNumeric(0xffffff, 0);
	var a = 0xff0000 //red
	var b = 0xffffff //black

	//console.log(integerNumeric.combine(a, b, [0.4, 0.6]).toString(16))
	assert(integerNumeric.combine(a, b, [1.0, 0.0]) == a);
	assert(integerNumeric.combine(a, b, [0.5, 0.5]) == 0xff7fff);
	assert(integerNumeric.combine(a, b, [0.4, 0.6]) == 0xff9999);

	console.log("PASS")
}

test_multiNumeric_combine();
test_color_as_integer_combine();
test_color_combine();
test_symmetricBinary_combine();
test_ordinal_combine();
test_nominal_combine();
test_integerNumeric_combine();
test_doubleNumeric_combine();
