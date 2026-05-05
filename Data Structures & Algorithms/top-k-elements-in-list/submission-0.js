class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}

        for ( let x of nums){
            count[x] = (count[x] || 0) + 1;
        }

        let entries = Object.entries(count);

        entries.sort((a,b) => b[1]- a[1])

        let result = []

        for ( let x = 0; x < k; x++){
            result.push(Number(entries[x][0]))
        }
        return result
    }
}
