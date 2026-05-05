class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = {}
        for(let x of strs){
            let key = x.split('').sort().join('')

            if(!map[key])(
                map[key] = []
            )

            map[key].push(x)

        }

        return Object.values(map)
    }
}
