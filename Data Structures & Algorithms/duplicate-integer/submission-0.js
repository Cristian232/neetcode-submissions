class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let seen =  new Set()

        for ( let x of nums){
            if ( seen.has(x)){
                return true
            }
            seen.add(x)
        }
        return false

    }
}
