class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let res =  new Array(nums.length).fill(1)
        let prefix = 1 
        for (let x = 0 ; x < nums.length; x++){
            res[x] = prefix
            prefix = prefix * nums[x]
        }
        
        let postfix = 1
        for(let x = nums.length -1; x >= 0; x--){
            res[x] = res[x] * postfix;
            postfix = postfix * nums[x]
        }

        return res
    }
}
