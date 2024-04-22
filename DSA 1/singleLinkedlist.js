class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class singlelinkedlist {
    constructor(){
        this.head = null
        this.size = 0
    }
    getSize(){
       return this.size
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

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let curr = this.head

            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    DeletespecifiedValue(value){
        if(!this.head){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head

            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
        }
    }

    insert(index,value){
        if(index < 0 || index > this.size ){
            return null
        }

        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index - 1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeduplicates() {
        let current = this.head;
    
        while (current && current.next) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    reverseList(){
        let curr = this.head
        let prev =null

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    convertArrayToList(arr){
        for(let Element of arr ){
            this.append(Element)
        }
    }
    
    print(){
        let curr = this.head
        let result = []

        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(' -> '));
    }

    printReverse(){
        let curr = this.head
        let result = [ ]

        while(curr){
            result.unshift(curr.value)
            curr = curr.next
        }
        console.log(result.join(' -> '));
    }
}

const list = new singlelinkedlist

list.print()

const array = [10,450,3610.621]
list.convertArrayToList(array)

list.prepend(15)
list.prepend(15)
list.print()
list.DeletespecifiedValue(20)
list.print()
list.insert(3,30)
list.insert(1,20)
list.print()
list.removeduplicates()
list.print()


list.getSize()
list.print()


