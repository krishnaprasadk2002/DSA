class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Double {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    addfirst(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    addLast(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFirst(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    removeLast(){
        if(!this.head){
            return null
        }
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

    print() {
        let curr = this.head
        let result = []
        while (curr) {
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(" <-> "));
    }
}
const list = new Double
list.addfirst(10)
list.addfirst(20)
list.addLast(30)
list.addLast(40)
list.print()
list.removeFirst()
list.print()
list.removeLast()
list.print()