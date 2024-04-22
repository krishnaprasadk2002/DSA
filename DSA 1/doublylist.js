class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class doubly{
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
            this.head = node
        }
        this.size++
    }

    addAt(value,index){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return null
        }

        if(index === 0){
            if(!this.head){
                this.head = null
                this.tail = null
            }else{
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
        }else{
            let curr = this.head

            for(let i=0;i<index-1;i++) {
            curr = curr.next
            }
            if (!curr.next) {
                // Adding at the end of the list
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;
            } else {
                // Inserting in the middle
                node.prev = curr;
                node.next = curr.next;
                curr.next.prev = node;
                curr.next = node;
            }
            this.size++
        }
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


    removeFirst(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }
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

    print(){
        let curr = this.head
        let result = []

        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(" <-> "));
    }
}
const list = new doubly
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.print()
list.append(50)
list.append(60)
list.append(70)
list.append(80)
list.print()
list.removeFirst()
list.print()
list.removeLast()
list.print()
list.addAt(99,1)
list.print()
