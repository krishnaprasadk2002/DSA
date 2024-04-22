class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeFromFront(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.next
        }
        this.size--
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }
    print(){
        let curr = this.head
        let result = []

        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(" -> "))
    }
}


class Stack{
    constructor(){
        this.stack = new linkedlist()
    }

    push(element){
        this.stack.prepend(element)
    }

    pop(){
        return this.stack.removeFromFront()
    }

    peek(){
        return this.stack.head ? this.stack.head.value : null
    }

    size(){
        return this.stack.getSize()
    }

    isEmpty(){
        return this.stack.isEmpty()
    }
    print(){
        return this.stack.print()
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.pop()
stack.pop()
stack.print()
console.log(stack.peek());
console.log(stack.size())