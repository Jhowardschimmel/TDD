function toRoman(int) {
  const romanObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  const romanEntries = Object.entries(romanObject);
  const romanMap = new Map(romanEntries);
  
  if (isString(int)) {
    return "Please enter an integer as input. Do not use quotation marks.";
  }
  if (isZero(int)) {
    return "Nulla.";
  }
  if (isNegative(int)) {
    return "The Romans did not use negative numbers.";
  }
  if (isToHigh(int)) {
    return "Please enter a number less than 4000.";
  }
  if (noArg(int)) {
    return "Please enter a number to be input.";
  }
  if (notWhole(int)) {
    return "Please enter a non decimal whole number.";
  }

  return createNumeral(int);

  function isString(int) {
    return typeof int === "string";
  }
  function isZero(int) {
    return int === 0;
  }
  function isNegative(int) {
    return int < 0;
  }
  function isToHigh(int) {
    return int >= 4000;
  }
  function noArg(int) {
    return !int;
  }
  function notWhole(int) {
    return int % 1 !== 0;
  }

  function createNumeral(int) {
    let romanNumeral = "";
    for (const pairs of romanMap) {
      const value = pairs[1];
      if (largestBase(int, value, romanNumeral)) {
        const numeral = pairs[0];
        const remainder = int % value;
        const quotient = Math.floor(int / value);
        romanNumeral += numeralRepeater(quotient, numeral);
        int = remainder;
        if (loopIsFinished(remainder)) {
          return romanNumeral;
        }
      }
    }

    function largestBase(int, value) {
      return int >= value;
    }
    function numeralRepeater(quotient, numeral) {
      let romanNumeral = "";
      for (let i = 0; i < quotient; i++) {
        romanNumeral += numeral;
      }
      return romanNumeral;
    }
    function loopIsFinished(remainder) {
      return remainder <= 0;
    }
  }
}
