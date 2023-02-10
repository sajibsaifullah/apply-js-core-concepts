function inchTofeet (inch) {
    var feet = inch / 12;
    return feet;
}

var heightInch1 = 60;
var heightFeet1 = inchTofeet(heightInch1);
console.log(heightFeet1);