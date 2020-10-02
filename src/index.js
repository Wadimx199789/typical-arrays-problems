
exports.min = function min (array) {
  if(!array||array.length == 0) return 0;
  else{
  let temp=array[0];
  for(let el of array){
    if(el<temp) temp=el;
  }
  return temp;
  }
}

exports.max = function max (array) {
  if(!array||array.length == 0) return 0;
  else{
  let temp=array[0];
  for(let el of array){
    if(el>temp) temp=el;
  }
  return temp;
  }
}

exports.avg = function avg (array) {
  if(!array||array.length == 0) return 0;
  else{
  let sum=0;
  for(let el of array){
    sum+=el
  }
  return sum/array.length;
  }
}
