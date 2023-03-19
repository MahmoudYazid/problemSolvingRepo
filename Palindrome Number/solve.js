"use strict";
function isPalindrome(x) {
    const spilitString = String(x).split("");
    const LengthOfWord = spilitString.length;
    var PointerStart = 0;
    var PointerEnd = LengthOfWord - 1;
    for (let pointerMover in spilitString) {
        if ((spilitString[PointerEnd] != spilitString[PointerStart] &&
            !(PointerEnd == PointerStart)) || (spilitString[PointerEnd] != spilitString[PointerStart])) {
            return false;
        }
        if (PointerEnd == PointerStart) {
            return true;
        }
        PointerEnd = PointerEnd - 1;
        PointerStart = PointerStart + 1;
    }
    return true;
}
console.log(isPalindrome(-121));
