const twoSum = (target: number, nums: number[]): number[] => {
  const newitems: any[] = [];

  for (const current in nums) {
    for(const nextrotation in nums){
      if (nums[nextrotation]+nums[current]==target) {
        
        if (nextrotation != current && !(newitems.find(x=>x=[current,nextrotation])) && !(newitems.find(x=>x=[nextrotation,current]))) {
          newitems.push([current, nextrotation]);
        }
          
        
      }
    }
    }
    
    return newitems[0]
  };
console.log(twoSum(6, [3, 2, 3]));
  


