class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        
        for( let str of strs){
            result += str.length + "#" + str
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let x = 0;

        while( x < str.length){
            let j = x 

            while(str[j] !== "#"){
                j++
            }

            let length = Number(str.slice(x,j))

            x = j + 1

            let res = str.slice(x, x + length)
            result.push(res)

            x = x+ length
        }
        return result
    }
}
