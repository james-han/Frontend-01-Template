let convertNumberToString = function convertNumberToString(number, x = 10) {
    var int = Math.floor(number);
    var fractions = null;
    if (x === 10) fractions = ('' + number).match(/\.\d*/)[0];
    var string = ''
    while(int > 0) {
      string = int % x + string;
      int = Math.floor(int / x);
    }
    return fractions ? string + fractions : string;
}