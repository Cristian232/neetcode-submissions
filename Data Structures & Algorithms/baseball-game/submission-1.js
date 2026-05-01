class Solution {
    calPoints(operations) {
        const stack = [];

        for (let i = 0; i < operations.length; i++) {
            const op = operations[i];

            if (op === "C") {
                stack.pop();
            } else if (op === "+") {
                const last = stack[stack.length - 1];
                const secondLast = stack[stack.length - 2];
                stack.push(last + secondLast);
            } else if (op === "D") {
                const last = stack[stack.length - 1];
                stack.push(last * 2);
            } else {
                stack.push(Number(op));
            }
        }

        let sum = 0;
        for (let x of stack) {
            sum += x;
        }

        return sum;
    }
}