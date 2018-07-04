'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var num=0;
  var temp = objectB.value.toString();
  for(var i=0;i<collectionA.length;i++){
    if(temp.indexOf(collectionA[i].key.toString())>-1){
	  num=parseInt(collectionA[i].count/3);
	  //parseInt(num);
      collectionA[i].count-=num;
    }
  }
  return collectionA;
}
