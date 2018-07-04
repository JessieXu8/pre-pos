'use strict';

function collectSameElements(collectionA, collectionB) {
	var collectionC=new Array();
	var count=0;
	for (var i in collectionA){
		for (var j in collectionB){
			if(collectionA[i]==collectionB[j]){
				collectionC[count++]=collectionA[i];
				break;
			}
		}
	}
  return collectionC;
}
