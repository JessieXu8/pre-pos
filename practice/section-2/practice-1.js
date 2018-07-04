'use strict';

function countSameElements(collection) {
	var result=new Array();
	var temp;
	var num=0;
	for (var i in collection){
		if(i==0){
			temp=collection[i];
			num=1;
		}else if(collection[i]==temp){
			num++;
		}else{
			result.push({
				key: collection[i],
				count: num
			})
			temp=collection[i];
			num=1;
		}
	}
  return result;
}
