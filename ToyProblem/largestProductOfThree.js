const largestProductOfThree = function (array) {
  // TODO: Your code here!
  let positive = 0;
  let negative = 0;
  array.sort((a, b) => Math.abs(b) - Math.abs(a)).forEach(el => {
    if(el >= 0){
      positive++;
    }else{
      negative++;
    }
  });
  if(positive === 0){
    return array.slice(array.length-3).reduce((acc,cur)=>acc*cur);
  }
  if(negative === 1){
    return array.filter(el=>el>0).slice(0,3).reduce((acc,cur)=>acc*cur);
  }
  let threeNum = array.slice(0,3);
  if(threeNum.reduce((acc,cur)=>acc*cur)>=0){
    return threeNum.reduce((acc,cur)=>acc*cur);
  }else{
    let case1 = threeNum.filter(el=>el>0)
    case1.push(array.slice(3).find(el=>el>0));
    case1 = case1.reduce((acc,cur)=>acc*cur);
    let case2 = Math.max(...threeNum) * Math.min(...threeNum) * array.slice(3).find(el=>el<0);
    return case1 > case2 ? case1 : case2;
  }
};

