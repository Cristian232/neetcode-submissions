class MinStack {
    constructor() {
        this.stack = []
        this.MinStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.MinStack.length === 0 || val <= this.getMin()){
            this.MinStack.push(val);
        }else{
            this.MinStack.push(this.getMin())
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.MinStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.MinStack.at(-1)
    }
}
