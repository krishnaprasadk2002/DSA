class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class circularLinkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

   append(value){
    const node = new Node(value)

        if(!this.head){
           this.head = node
           node.next = this.head
        }else{
            let curr = this.head
            while(curr.next != this.head){
                curr = curr.next
            }
            curr.next = node
            node.next = this.head
        }
        this.size++
    }
   
   print() {
    if (!this.head) {
        console.log("List is empty");
        return;
    } else {
        let curr = this.head;
        let result = [];

        do {
            result.push(curr.value);
            curr = curr.next;
        } while (curr !== this.head);

        console.log(result.join(' -> '));
    }
}
}

const list = new circularLinkedlist

list.print()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.print()