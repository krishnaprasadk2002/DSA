class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
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

    print(){
        let curr = this.head
        let result = []

        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(' <-> '));
    }
   array(arr){
    for(const Element of arr){
        this.append(Element)
    }
   }
}

const list = new doublyLinkedList

list.append(10)
list.print()