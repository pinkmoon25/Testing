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

class Calculator{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  add(){
    if(typeof(this.x) !== 'number' || typeof(this.y) !== 'number'){
      throw new Error('Input is not a number');
    }
    else{
      return this.x+this.y;
    }
  }

  subtract(){
    if(typeof(this.x) !== 'number' || typeof(this.y) !== 'number'){
      throw new Error('Input is not a number');
    }
    else{
      return this.x-this.y;
    }
  }

  multiply(){
    if(typeof(this.x) !== 'number' || typeof(this.y) !== 'number'){
      throw new Error('Input is not a number');
    }
    else{
      return this.x*this.y;
    }
  }

  divide(){
    if(typeof(this.x) !== 'number' || typeof(this.y) !== 'number'){
      throw new Error('Input is not a number');
    }
    else if(this.y === 0){
      throw new Error('invalid operation');
    }
    else{
      return this.x/this.y;
    }
  }
};

function capitalize(string){
  if(string === '' || typeof(string) !== 'string'){
    throw new Error('invalid input');
  }
  else{
    return string[0].toUpperCase().concat(string.slice(1));
  }
}

module.exports = { stringLength, reverseString, Calculator, capitalize };
