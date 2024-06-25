// 14 Min Stack

/*
Problem : Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant
time.

Implement the MinStack class:
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output
[null,null,null,null,-3,null,0,-2]
Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2

Constraints:
-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
—----------------------
*/

/*
Approach :

Data Structure : Stack -> FILO

Methods :
    push()
    size()
    isEmpty()
    peek()
    pop()
    display()

*/

// Pending
class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        if (this.isEmpty()){
            const addItem = {value:item, minIndex:0}
            this.display().push(addItem);
        }
        else{
            const minIndex = this.getMinIndex();
            const minValue = this.getMinValue();
            if (minValue > item){
                const addItem = {value:item, minIndex:this.size()}
                this.display().push(addItem);
            }
            else{
                const addItem = {value:item, minIndex:minIndex}
                this.display().push(addItem);
            }

        }
       
    }

    size(){
        return this.display().length
    }

    isEmpty(){
        return this.size() === 0
    }

    peek(){

        if (this.isEmpty()){
            return null;
        }
        else{
             const peekItem = this.display()[this.size()-1];
             return peekItem;
        }
    
    }

    pop(){
        if (this.isEmpty()){
            return null;
        }
        else{
            const poppedItem = this.display().pop();
            return poppedItem;
        }
    }

    display(){
        return this.items;
    }

    getMinIndex(){
        return this.peek().minIndex
    }

    getMinValue(){
        return this.display()[this.getMinIndex()].value
    }


}

// Create Instance
const stack = new Stack();
console.log(stack);

stack.push(10);
stack.push(20);
stack.push(5);
stack.push(50);
stack.push(-10);
stack.push(410);
stack.push(60);

console.log(stack.display())


console.log(stack.peek());
stack.pop();

console.log(stack.display());
console.log(stack.getMinValue());






