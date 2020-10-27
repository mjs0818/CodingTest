const DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  const translateRomanNumeral = function (romanNumeral) {
    // TODO: 여기에 코드를 작성합니다.
    if (typeof romanNumeral !== 'string') {
        return null;
      }
      if (romanNumeral === '') {
        return 0;
      }
      //running tally of digits
      var total = 0;
      //split string into array of digits
      var romanNumerals = romanNumeral.split('');
      //iterate through digits
      for (var i = 0; i < romanNumerals.length; i++) {
        //set variables for current and next roman numeral
        var singleRomanNumeral = romanNumerals[i];
        var nextSingleRomanNumeral = romanNumerals[i + 1];
        //get digits from DIGIT_VALUES object
        var numberFromRomanNumeral = DIGIT_VALUES[singleRomanNumeral];
        var nextNumberFromRomanNumeral = DIGIT_VALUES[nextSingleRomanNumeral];
        //if digit is less than next digit or there is no next digit
        if (
          numberFromRomanNumeral < nextNumberFromRomanNumeral &&
          i !== romanNumerals.length - 1
        ) {
          //subtract digit from total
          total -= numberFromRomanNumeral;
        } else {
          //add digit to total
          total += numberFromRomanNumeral;
        }
      }
      return total;
  };
  
  console.log(translateRomanNumeral('IIIIIVDM'));