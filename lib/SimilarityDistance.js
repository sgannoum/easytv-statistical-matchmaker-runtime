
/**
 * 
 */
module.exports = class DissimilarityDistance {
	
	constructor(dimensions) {
		this._dimensions = dimensions;
	}
	
	compute(a, b) {
		var dividend = 0, divisor = 0, deltas_d;
		for(var [key, value] of this._dimensions) {
			
			try{
				deltas_d = value.dissimilarity(a[key], b[key]);
			} catch(err){
				throw new TypeError('Type error in '+ key)
			}
			
			for(var j = 0; j < deltas_d.length; j++) {
				var delta_d = deltas_d[j]
				
				dividend += delta_d[0] * delta_d[1];
				divisor += delta_d[0];
			}
		}
		
		if(divisor == 0 || divisor == undefined)
			return 1.0;
		
		//return similarity
		return 1.0 - (dividend/divisor);
	}
	
}