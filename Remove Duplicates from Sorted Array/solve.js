"use strict";
function removeDuplicates(nums) {
    for (var itr = 0; itr < nums.length; itr++) {
        for (var Firstpointer in nums) {
            for (var Secondpointer in nums) {
                if (nums[Secondpointer] == nums[Firstpointer] &&
                    Secondpointer != Firstpointer) {
                    nums.splice(Number(Secondpointer), 1);
                }
            }
        }
    }
    return nums.length;
}
console.log(removeDuplicates([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
