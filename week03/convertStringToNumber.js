let convertStringToNumber = function(str, radix = 10) {
    if (radix > 10) {
      return
    }
    let flag = /e|E/.test(str);
    if (!flag) {
      let chars = str.split('');
      let number = 0;
      let i = 0;
      while (i < chars.length && chars[i] != '.') {
        number = number * radix;
        number += chars[i].codePointAt(0) - '0'.codePointAt(0);
        i++;
      }
      if (chars[i] === '.') {
        i++;
      }
      let fractions = 1;
      while (i < chars.length) {
        fractions /= radix;
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fractions;
        i++;
      }
      return number
    } else {
      let logNumber = Number(str.match(/\d+$/)[0]);
      let number = str.match(/^[\d\.]+/)[0].replace(/\./, '');
      if (/e-|E-/.test(str)) {
        return Number(number.padEnd(logNumber + 1, 0));
      } else {
        return Number(number.padStart(logNumber + number.length, 0).replace(/^0/, '0.'));
      }
    }
  }