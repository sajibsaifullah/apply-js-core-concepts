function leapYearChk(year) {
  if (year % 4 == 0 && year % 100 !== 0) {
    console.log(year, "is a leap year.");
    return true;
  } else {
    console.log(year, "is a not leap year.");
    return false;
  }
}
var yearNum = 2500;
var yearChk = leapYearChk(yearNum);
console.log(yearChk);

var yearNum2 = 2504;
var yearChk2 = leapYearChk(yearNum2);
console.log(yearChk2);

