class Stack{
    constructor(){
        this.stack = []
    }

    push(Element){
        this.stack.push(Element)
    }
    pop(){
        if(this.isEmpty()){
        return null
        }else{
            return this.stack.pop()
        }
    }
    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.stack[this.stack.length-1]
        }
    }

    isEmpty(){
        return this.stack.length === 0
    }
    size(){
        return this.stack.length
    }
    print(){
        console.log(this.stack.toString());
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.pop()
stack.print()
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());