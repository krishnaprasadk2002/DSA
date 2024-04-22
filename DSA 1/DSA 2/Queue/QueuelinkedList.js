class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class queueLinkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
           node.prev = this.tail
           this.tail.next = node
           this.tail = node
        }
        this.size++
    }

    removeFromFirst(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    isEmpty() {
        return this.size === 0;
    }
    
    getSize() {
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

class Queue {
    constructor() {
        this.list = new queueLinkedlist();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        this.list.removeFromFirst();
    }

    peek() {
        return this.list.head ? this.list.head.value : null;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        this.list.print();
    }
}

const queue = new Queue()

console.log(queue.isEmpty());
console.log(queue.getSize());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
queue.dequeue()
queue.dequeue()
queue.print()
console.log(queue.peek());