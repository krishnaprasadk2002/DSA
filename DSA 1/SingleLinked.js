class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addfirst(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
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
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }

            curr.next = node
        }
        this.size++
    }

    insert(value, index) {
        const node = new Node(value)

        if (index < 0 || index > this.size) {
            console.log("index is invalid");
            return
        } else if (index === 0) {
            node.next = this.head
            this.head = node
            this.size++
        } else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }

    RemoveFirst() {
        if (!this.head) {
            return
        } else {
            this.head = this.head.next

        }
        this.size--
    }

    removeLast() {
        if (!this.head) {
            return
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }

            curr = null
        }
        this.size--
    }

    removeSpecifed(index) {

        if (index < 0 || index > this.size) {
            console.log(" index is invalid ")
            return
        }
        let removeNode
        if (index === 0) {

            removeNode = this.head
            this.head = this.head.next

        } else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            removeNode = curr.next
            curr.next = removeNode.next
        }
        this.size--
        return removeNode
    }

    removeValue(value) {

        if (!this.head) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {

            let prev = this.head

            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return removeNode
            }

        }
    }

    reverse(){
        let prev = null
        let curr = this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print() {
        let curr = this.head
        let result = []
        while (curr) {
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(" -> "));
    }

    arrayConvert(n){
        for(const element of n){
            this.addLast(element)
        }
    }
}

const list = new LinkedList

list.addfirst(10)
list.addfirst(20)
list.print()
list.addLast(30)
list.addLast(40)
list.print()
list.insert(25, 2)
list.insert(35, 4)
list.print()
list.RemoveFirst()
list.removeLast()
list.print()
list.removeValue(25)
list.print()
list.removeSpecifed(2)
list.print()
list.insert(20, 1)
list.print()
list.reverse()
list.print()
list.arrayConvert([1,2,3,4,5,6])
list.print()
