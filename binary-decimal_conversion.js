// Binary to Decimal
// Given a binary string, return the number it equates to
// Ex: given "1101101" return 109
// Ex: given "100" return 4
// Ex: given "10101" return 21
const p = (a) => {
  console.log(a);
};

function binaryToDecimal(binary) {
  const binArr = [];
  var sum = 0;
  for (var i = 0; i < binary.length; i++) {
    binArr[i] = Number(binary[binary.length - 1 - i]);
  }

  for (var i = 0; i < binary.length; i++) {
    sum += binArr[i] * Math.pow(2, i);
  }
  return sum;
}
s1 = "101";

console.log(binaryToDecimal(s1));
// Decimal to Binary
// Given a (whole) number, return the value in binary
function decimalToBinary(dec){
  var power = 0;
  var binary = "";
  var newTotal = dec
  
  while(Math.pow(2,power) <= dec){
      power++;
  }

  for(i=power - 1; i >= 0;i--){
      if((newTotal - Math.pow(2,i)) >= 0 ){
          binary += 1;
          newTotal = newTotal-Math.pow(2,i)
      }else{
          binary += 0;
      }
  }
  return binary;
}


d1 = 5;
// d2 = 10902;
p(decimalToBinary(d1));
// p(decimalToBinary(d2));
// Ex: given 109 return "1101101"
// Ex: given 4 return "100"
// Ex: given 21 return "10101"

// Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101")
