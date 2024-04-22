class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoubleLinkedList{
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

    AddAt(value,index){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            console.log("index is invalid");
            return
        }

        if(index === 0){
            if(!this.head){
                this.head = node
                this.tail = node
            }else{
                node.next = this.head
            this.head.prev = node
            this.head = node
            }
        }else {
            let curr = this.head
            
        }

        let curr = this.head
        for(let i=0;i<index;i++){
            curr = curr.next
        }

        if(curr.next){
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
        console.log(result.join(" <-> "));
    }
}

const list = new DoubleLinkedList()


list.prepend(10)
list.prepend(20)
list.print()
list.append(30)
list.append(40)
list.print()
list.AddAt(99,1)
list.print()