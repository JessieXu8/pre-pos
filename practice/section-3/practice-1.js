'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var temp = objectB.value.toString();
  for(var i=0;i<collectionA.length;i++){
    if(temp.indexOf(collectionA[i].key.toString())>-1){
      collectionA[i].count--;
    }
  }
  return collectionA;
}
