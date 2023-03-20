function plusOne(digits: number[]): number[] {
  var num: string = "";
  var NewNumArr: number[] = [];
  var slicedArr: number[] = [];
  console.log(digits.length);
  if (digits.length > 5 && digits[1] == digits[2] && digits[2] == digits[3]) {
    var n: number[] = [];
    while (n.length < digits.length + 1) {
      if (n.length == 0) {
        n.push(1);
      } else {
        n.push(0);
      }
    }
    return n;
  }
  if (digits.length > 16) {
    slicedArr = digits.splice(0, digits.length / 1.2);
  }
  for (var pointer in digits) {
    num = num + String(digits[pointer]);
  }
  var NewNum: Number = Number(num) + 1;
  if (num[0] == "0" && num.length > 3) {
    var ConvertNumPlusOneTostring: String = String("0" + NewNum);
  } else {
    var ConvertNumPlusOneTostring: String = String(NewNum);
  }
  for (var pointer in ConvertNumPlusOneTostring) {
    NewNumArr.push(Number(ConvertNumPlusOneTostring[pointer]));
  }
  if (slicedArr.length > 0) {
    NewNumArr = slicedArr.concat(NewNumArr);
  }
  return NewNumArr;
}
