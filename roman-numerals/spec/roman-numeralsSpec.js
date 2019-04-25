describe("toRoman", function() {
  it('should test if 1000 is "M"', function() {
    expect(toRoman(1000)).toEqual("M");
  });
  it('should test if 2000 is "MM"', function() {
    expect(toRoman(2000)).toEqual("MM");
  });
  it('should test if 3000 is "MMM"', function() {
    expect(toRoman(3000)).toEqual("MMM");
  });
  it('should test if 1900 is "MCM"', function() {
    expect(toRoman(1900)).toEqual("MCM");
  });
  it('should test if 1901 is "MCMI"', function() {
    expect(toRoman(1901)).toEqual("MCMI");
  });
  it('should test if 3999 is "MMMCMXCIX"', function() {
    expect(toRoman(3999)).toEqual("MMMCMXCIX");
  });
  it('should test if 8 is "VIII"', function() {
    expect(toRoman(8)).toEqual("VIII");
  });
  it('should test if 0 is "Nulla."', function() {
    expect(toRoman(0)).toEqual("Nulla.");
  });
  it('should test if no argument is "Please enter a number to be input."', function() {
    expect(toRoman()).toEqual("Please enter a number to be input.");
  });
  it('should test if null is "Please enter a number to be input."', function() {
    expect(toRoman(null)).toEqual("Please enter a number to be input.");
  });
  it('should test if 1/12 is "Please enter a non decimal whole number."', function() {
    expect(toRoman(1 / 12)).toEqual("Please enter a non decimal whole number.");
  });
  it('should test if .324 is "Please enter a non decimal whole number."', function() {
    expect(toRoman(0.324)).toEqual("Please enter a non decimal whole number.");
  });
  it('should test if 12 is "XII."', function() {
    expect(toRoman(12)).toEqual("XII");
  });
  it('should test if -1 is "The Romans did not use negative numbers."', function() {
    expect(toRoman(-1)).toEqual("The Romans did not use negative numbers.");
  });
  it('should test if "12" is "Please enter an integer as input. Do not use quotation marks."', function() {
    expect(toRoman("12")).toEqual(
      "Please enter an integer as input. Do not use quotation marks."
    );
  });
  it('should test if "4000" is "Please enter a number less than 4000."', function() {
    expect(toRoman(4000)).toEqual("Please enter a number less than 4000.");
  });
});
