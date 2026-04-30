class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let greater = 0
        for(let i = 0; i < arr.length; i++){
            for(let k = i+1; k < arr.length; k++){
                if(greater < arr[k]){
                    greater = arr[k]
                }
            }
            arr[i] = greater
            greater = 0
        }

        arr[arr.length - 1] = -1

        return arr

    }
}
