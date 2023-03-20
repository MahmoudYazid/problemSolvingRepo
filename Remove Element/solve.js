"use strict";
var nums = [4, 4, 0, 1, 0, 2]; // Input array
var val = 0; // Value to remove
function removeElement(Inputnums, val) {
    var itr = 0;
    while (itr < 10) {
        for (var target in Inputnums) {
            if (Inputnums[target] == val) {
                Inputnums.splice(Number(target), 1);
            }
        }
        itr++;
    }
    return Inputnums.length;
}
;
console.log(removeElement(nums, val));
