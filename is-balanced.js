function isMatched(str1, str2) {
  if (str1 === '(' && str2 === ')') {
    return true;
  }
  if (str1 === '{' && str2 === '}') {
    return true;
  }
  if (str1 === '[' && str2 === ']') {
    return true;
  }
  return false;
}

function changeElements(str, i, j) {
  str = str.split('');
  str[i] = '1';
  str[j] = '1';
  str = str.join('');
  return str;
}

// Preparing file
// function prepareString(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (['(', ')', '[', ']', '{', '}'].includes(element)) {
//       result += element;
//     }
//   }
//   return result;
// }

module.exports = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError(`str should be string and is: ${typeof str}`);
  }

  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if ([')', ']', '}'].includes(element)) {
        let j = i - 1;
        let previous = str[j];
        while (j >= 0 && previous === '1') {
          j--;
          previous = str[j];
        }
        if (!isMatched(previous, element)) {
          return false;
        }
        str = changeElements(str, i, j);
      }
    }
    str = str.replace(/1/g, '');
    if (str.length === 0) {
      return true;
    }
  }

  return false;
};
