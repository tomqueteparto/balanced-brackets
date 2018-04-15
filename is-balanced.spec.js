const test = require('ava');
const isBalanced = require('./is-balanced');

test('Empty string returns true', (t) => {
  // Prepare
  const str = '';

  // Execute
  const result = isBalanced(str);

  // Assert
  t.true(result, 'Empty string is not balanced');
});

test('True when ()', (t) => {
  // Prepare
  const str = '()';

  // Execute
  const result = isBalanced(str);

  // Assert
  t.true(result, 'No es ()');
});

test('Throw an exception when str is number', (t) => {
  // Prepare
  const str = 1;

  // Execute
  const result = t.throws(() => {
    isBalanced(str);
  });

  t.is(result.message, 'str should be string and is: number');
});

test('Throw an exception when str is undefined', (t) => {
  // Prepare
  const str = undefined;

  // Execute
  const result = t.throws(() => {
    isBalanced(str);
  });

  t.is(result.message, 'str should be string and is: undefined');
});

test('Throw an exception when str is object', (t) => {
  // Prepare
  const str = {};

  // Execute
  const result = t.throws(() => {
    isBalanced(str);
  });

  // Assert
  t.is(result.message, 'str should be string and is: object');
});

test('Odd number of characters in string', (t) => {
  // Prepare
  const str = '([{}])';

  // Execute
  const result = isBalanced(str);

  // Assert
  t.true(result, 'String has an even number of characters');
});

test('String contains only matched pair of brackets', (t) => {
  // Prepare
  const str = '((){}[{}])';

  // Execute
  const result = isBalanced(str);

  // Assert
  t.true(result, 'String is not matched');
});

test('Brackets parity of javascript code is balanced', (t) => {
  // Prepare

  // Execute

  // Assert

});
