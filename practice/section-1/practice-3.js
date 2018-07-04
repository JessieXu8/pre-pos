'use strict';

function collectSameElements(collectionA, objectB) {
	var collectionC=new Array();
	var count=0;
	for (var i in collectionA){
		for (var j in objectB.value){
			if(collectionA[i]==objectB.value[j]){
				collectionC[count++]=collectionA[i];
				break;
			}
		}
	}
	return collectionC;
}
