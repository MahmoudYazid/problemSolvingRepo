function searchInsert(nums: number[], target: number): number {
    for(var pointer in nums ){
        if(nums[pointer]>target ||nums[pointer]==target){
            return Number(pointer)
        }
       
        if (Number(pointer) == nums.length-1) {
          return Number(nums.length);
        }
    }

    return 0
}
