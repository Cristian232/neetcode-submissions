class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [], map ={')':'(',']':'[','}':'{'}

        for(const c of s){
            if(c in map){
                if(stack.pop() !== map[c])
                return false;
            }else{
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
