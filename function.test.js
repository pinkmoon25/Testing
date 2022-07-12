const {stringLength, reverseString, Calculator, capitalize} = require('./function');

test('stringLength should return character counts', ()=>{
  //assign
  const str='Hello';
  //act
  const result1 = stringLength(str);
  //assert
  expect(result1).toBe(5);
});

test('string length should be between 1-10 characters', ()=>{
  //assign
  const str2='';
  //act
  const result2 = ()=>{stringLength(str2)};
  //assert
  expect(result2).toThrow(Error);
})

test('string should be reversed', ()=>{
  //assign
  const str3 = 'hello';
  //act
  const result3 = reverseString('hello');
  //assert
  expect(result3).toBe('olleh');
});

describe('add', ()=>{
  test('10+20 should return 30', ()=>{
    //assign
    const x = 10;
    const y = 20;
    //act
    const calculator = new Calculator(10, 20);
    const result = calculator.add();
    //assert
    expect(result).toBe(30);
  })
  test('"5"+"5" should return Input is not a number', ()=>{
    //assign
    const x = "5";
    const y = "5";
    //act
    const calculator = new Calculator("5", "5");
    const result = ()=>{calculator.add()};
    //assert
    expect(result).toThrow(Error);
  })
  test('5+-5 should return 0', ()=>{
    //assign
    const x = 5;
    const y = -5;
    //act
    const calculator = new Calculator(5, -5);
    const result = calculator.add();
    //assert
    expect(result).toBe(0);
  })
});

describe('subtract', ()=>{
  test('20-10 should return 10', ()=>{
    //assign
    const x = 20;
    const y = 10;
    //act
    const calculator = new Calculator(20, 10);
    const result = calculator.subtract();
    //assert
    expect(result).toBe(10);
  })
  test('"5"-"5" should return Input is not a number', ()=>{
    //assign
    const x = "5";
    const y = "5";
    //act
    const calculator = new Calculator("5", "5");
    const result = ()=>{calculator.subtract()};
    //assert
    expect(result).toThrow(Error);
  })
  test('5-5 should return 0', ()=>{
    //assign
    const x = 5;
    const y = -5;
    //act
    const calculator = new Calculator(5, 5);
    const result = calculator.subtract();
    //assert
    expect(result).toBe(0);
  })
});

describe('multiply', ()=>{
  test('10*20 should return 200', ()=>{
    //assign
    const x = 10;
    const y = 20;
    //act
    const calculator = new Calculator(10, 20);
    const result = calculator.multiply();
    //assert
    expect(result).toBe(200);
  })
  test('"5"+"5" should return Input is not a number', ()=>{
    //assign
    const x = "5";
    const y = "5";
    //act
    const calculator = new Calculator("5", "5");
    const result = ()=>{calculator.multiply()};
    //assert
    expect(result).toThrow(Error);
  })
  test('5*0 should return 0', ()=>{
    //assign
    const x = 5;
    const y = 0;
    //act
    const calculator = new Calculator(5, 0);
    const result = calculator.multiply();
    //assert
    expect(result).toBe(0);
  })
});

describe('divide', ()=>{
  test('20/4 should return 5', ()=>{
    //assign
    const x = 20;
    const y = 4;
    //act
    const calculator = new Calculator(20, 4);
    const result = calculator.divide();
    //assert
    expect(result).toBe(5);
  })
  test('"5"/"5" should return Input is not a number', ()=>{
    //assign
    const x = "5";
    const y = "5";
    //act
    const calculator = new Calculator("5", "5");
    const result = ()=>{calculator.divide()};
    //assert
    expect(result).toThrow(Error);
  })
  test('5/0 should return Inavalid operation', ()=>{
    //assign
    const x = 5;
    const y = 0;
    //act
    const calculator = new Calculator(5, 0);
    const result = ()=>{calculator.divide()};
    //assert
    expect(result).toThrow(Error);
  })
});

test('string should be capitalized', ()=>{
  //assign
  const str = 'tushar';
  //act
  result = capitalize(str);
  //assert
  expect(result).toBe('Tushar');
});

test('string should be capitalized', ()=>{
  //assign
  const str = '';
  //act
  result = ()=>{capitalize(str)};
  //assert
  expect(result).toThrow(Error);
})