// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

//  * initialize your data structure here.
//  */
// // this.stack = []
// // this.length = 0

// // };



var MinStack = function() {
    this.stack=[] 
    this.count=0
};

// /** 
//  * @param {number} val
//  * @return {void}
//  */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    console.log(this.stack)
    this.count++;
};

// /**
//  * @return {void}
//  */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.count--;
  
};

// /**
//  * @return {number}
//  */
MinStack.prototype.top = function() {
 
return this.stack[this.count-1]

};

// /**
//  * @return {number}
//  */
MinStack.prototype.getMin = function() {
    
    let copy=this.stack.slice(0)
    copy.sort((a,b)=>a-b)
    return copy[0]
  
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */