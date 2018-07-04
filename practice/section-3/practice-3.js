'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var result = new Array();
	for (var i = 0; i < collectionA.length;) {
		var count = 0;
		for (var j = i; j < collectionA.length; j++) {
			if (collectionA[i] === collectionA[j]) {
				count++;
			}
		}
		result.push({
			key: collectionA[i],
			count: count
		})
		i+=count;
	}
	var b = objectB.value.toString();
	for(var i=0;i<result.length;i++){
		if(b.indexOf(result[i].key.toString())>-1){
			result[i].count-=parseInt(result[i].count/3);
		}
	}
	return result;
}
