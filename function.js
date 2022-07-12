const stringLength =  (string)=>{
  if(string.length > 0 && string.length <= 10){
    return string.length;
  }
  else {
    throw new Error('string should be between 1-10 characters')
  }
};

const reverseString = (str3)=>{
  let newStr = str3.split('').reverse().join('');
  return newStr;
};


module.exports = { stringLength, reverseString };