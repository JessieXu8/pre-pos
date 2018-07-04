'use strict';

function countSameElements(collection) {
  var result = new Array();
	for (var i = 0; i < collection.length;) {
		var count = 0;
		for (var j = i; j < collection.length; j++) {
			if (collection[i] == collection[j]) {
				count++;
			}
		}
		if(collection[i].indexOf('-')>-1){
			count = parseInt(collection[i].slice(collection[i].indexOf('-')+1));
			collection[i]=collection[i].slice(0,1);
		}
		result.push({
			key: collection[i],
			count: count
		})
		i+=count;
	}
	return result;

}
