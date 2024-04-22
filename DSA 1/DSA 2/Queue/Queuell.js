class Node{
    constructor(value){
        this.value = value
        this.Next = null
        this.prev = null
    }
}

    class linkedlist{
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
            this.tail.Next = node
            this.tail = node
        }
        this.size++
      }

      removeFromFront(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.Next
            this.head.prev = null
        }
        this.size--
      }

      isEmpty(){
        return this.size === 0
      }

      getSize(){
        return this.size
      }
      print(){
        let curr = this.head
        let result = []

        while(curr){
            result.push(curr.value)
            curr = curr.Next
        }
        console.log(result.join(" -> "))
      }
    }

    class Queue{
        constructor(){
            this.Queue = new linkedlist()
        }
      enqueue(value){
        this.Queue.append(value)
      }
      dequeue(){
        return this.Queue.removeFromFront()
      }
      peek(){
        return this.Queue.head ? this.Queue.head.value : null
      }
      Size(){
      return  this.Queue.getSize()
      }
      isEmpty(){
        return this.Queue.isEmpty()
      }
      print(){
        return this.Queue.print()
      }

    }

    const queue  =new Queue()

    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)
    queue.enqueue(40)
    queue.print()
    queue.dequeue()
    queue.print()
    console.log(queue.peek());
    console.log(queue.Size());
    console.log(queue.isEmpty());
    