class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let map ={}

       for (let x = 0; x< nums.length; x++){
        let diff = target - nums[x]

        if (map[diff] !== undefined){
            return [map[diff], x]
        }        
        map[nums[x]] = x
       }
    }
}
