const {stringLength, reverseString} = require('./function');

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