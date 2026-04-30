class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        const res = nums.filter(x => x !== val);

        for (let i = 0; i < res.length; i++) {
            nums[i] = res[i];
        }

        return res.length;
    }
}
