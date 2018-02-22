module.exports =function getZerosCount(number) {
  let result=0;
  let delitel=5;
  for(let i=0; i<11;i++){
      let dop=number/delitel;
      dop=Math.floor(dop);
      result+=dop;
      delitel*=5;
  }

  return result;
};
