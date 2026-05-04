class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
            return false

        let count = {}

        for ( let x = 0; x< s.length; x++){
            count[s[x]] = (count[s[x]] || 0 ) +1
            count[t[x]] = (count[t[x]] || 0 ) -1
        }

        for (let x in count){
            if (count[x] !== 0) return false
        }

        return true
    }
}
