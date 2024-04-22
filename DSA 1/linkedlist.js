// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//        return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
// }

// const list = new linkedList()

// console.log("list empty",list.isEmpty());
// console.log("list size",list.getSize());



// Adding new Element at beginning

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//        return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepand(value){
//       const node = new Node(value)

//       if(this.isEmpty()){
//         this.head = node

//       }else{
//         node.next = this.head
//         this.head = node
//       }
//       this.size++
//     }
// }

// const list = new linkedList()

// console.log("list empty",list.isEmpty());
// console.log("list size",list.getSize());

// list.prepand(10)
// list.prepand(20)
// list.prepand(30)

//====================================================================================================//
//printing the list  && appending node


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//        return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepand(value){
//       const node = new Node(value)

//       if(this.isEmpty()){
//         this.head = node

//       }else{
//         node.next = this.head
//         this.head = node
//       }
//       this.size++
//     }

//     append(value){
//      const node = new Node(value)
//      if(this.isEmpty()){
//         this.head = node
//      }else{
//         let prev = this.head
//         while(prev.next){
//             prev = prev.next
//         }
//         prev.next = node
//      }
//      this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
//         }else{
//             let curr = this.head
//             let listValues =  ''

//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new linkedList()

// console.log("list empty",list.isEmpty());
// console.log("list size",list.getSize());
// list.print()
// list.append(10)
// list.print()
// list.append(20)
// list.append(30)
// list.print()

//======================================================================//

// inserting node in a specified position

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//        this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             const node = new Node(value)
//             let prev = this.head

//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value,index){

//         if(index < 0 || index > this.size ){
//             return
//         } 
//         if(index === 0){
//             this.prepend(value)
//             return
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
//         }else{
//             let curr = this.head
//             let linkedValues = ' '

//             while (curr){
//                 linkedValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(linkedValues);
//         }
//     }
// }

// const list = new linkedList()

// // console.log("list empty",list.isEmpty());
// // console.log("list size",list.getSize());

// // list.append(10)
// // list.print()
// // list.append(20)
// // list.append(30)
// // list.append(40)
// // list.print()

// // list.print()
// // list.prepend(10)
// // list.print()
// // list.prepend(20)
// // list.prepend(30)
// // list.print()

// list.insert(10,0)
// list.insert(20,0)
// list.print()
// list.insert(15,1)
// list.insert(25,3)
// list.print()



// // Remove node

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//        this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             const node = new Node(value)
//             let prev = this.head

//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value,index){

//         if(index < 0 || index > this.size ){
//             return
//         } 
//         if(index === 0){
//             this.prepend(value)
//             return
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null;
//         }

//         let removeNode;

//         if (index === 0) {
//             removeNode = this.head;
//             this.head = this.head.next;
//         } else {
//             let prev = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }

//             removeNode = prev.next;
//             prev.next = removeNode.next;
//         }

//         this.size--;
//         return removeNode.value;
//     }


//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
//         }else{
//             let curr = this.head
//             let linkedValues = ' '

//             while (curr){
//                 linkedValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(linkedValues);
//         }
//     }
// }

// const list = new linkedList()

// list.insert(10,0)
// list.insert(20,0)
// list.print()
// list.insert(15,1)
// list.insert(25,3)
// list.print()

// console.log(list.removeFrom(12))
// list.removeFrom(2)
// list.print()
// list.removeFrom(1)
// list.print()



//remove value basilly

// Remove node

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//        this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             const node = new Node(value)
//             let prev = this.head

//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value,index){

//         if(index < 0 || index > this.size ){
//             return
//         } 
//         if(index === 0){
//             this.prepend(value)
//             return
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null;
//         }

//         let removeNode;

//         if (index === 0) {
//             removeNode = this.head;
//             this.head = this.head.next;
//         } else {
//             let prev = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }

//             removeNode = prev.next;
//             prev.next = removeNode.next;
//         }

//         this.size--;
//         return removeNode.value;
//     }


//     removeValue(value){
//        if(this.isEmpty()){
//         return null
//        }

//        if(this.head.value == value){
//         this.head = this.head.next
//         this.size--
//         return value
//        }else{
//         let prev = this.head
//         while(prev.next && prev.next.value !== value){
//             prev = prev.next
//         }
//         if(prev.next){
//             const removeNode=prev.next
//             prev.next = removeNode.next
//             this.size--
//             return value
//         }
//        }
//     }


//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
//         }else{
//             let curr = this.head
//             let linkedValues = ' '

//             while (curr){
//                 linkedValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(linkedValues);
//         }
//     }
// }

// const list = new linkedList()

// list.insert(10,0)
// list.insert(20,0)
// list.print()
// list.insert(15,1)
// list.insert(25,3)
// list.print()

// list.removeValue(15)
// list.print()
// list.removeValue(25)
// list.print()


//searching 

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//        this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             const node = new Node(value)
//             let prev = this.head

//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value,index){

//         if(index < 0 || index > this.size ){
//             return
//         } 
//         if(index === 0){
//             this.prepend(value)
//             return
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null;
//         }

//         let removeNode;

//         if (index === 0) {
//             removeNode = this.head;
//             this.head = this.head.next;
//         } else {
//             let prev = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }

//             removeNode = prev.next;
//             prev.next = removeNode.next;
//         }

//         this.size--;
//         return removeNode.value;
//     }


//     removeValue(value){
//        if(this.isEmpty()){
//         return null
//        }

//        if(this.head.value == value){
//         this.head = this.head.next
//         this.size--
//         return value
//        }else{
//         let prev = this.head
//         while(prev.next && prev.next.value !== value){
//             prev = prev.next
//         }
//         if(prev.next){
//             const removeNode=prev.next
//             prev.next = removeNode.next
//             this.size--
//             return value
//         }
//        }
//     }

//     searchValue(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i = 0
//         let curr = this.head

//         while(curr){
//             if(curr.value == value){
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//         return -1
//     }


//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
//         }else{
//             let curr = this.head
//             let linkedValues = ' '

//             while (curr){
//                 linkedValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(linkedValues);
//         }
//     }
// }

// const list = new linkedList()

// list.insert(10,0)
// list.insert(20,0)
// list.print()
// list.insert(15,1)
// list.insert(25,3)
// list.print()



// console.log(list.searchValue(10))

//reversing list

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value)
//             return
//         }else{
//             const node = new Node(value)
//             let prev =this.head

//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removefromindex(index){
//         if(index <0 || index >this.size){
//             return null
//         }
//         let removeNode

//         if(index === 0 ){
//             removeNode = this.head
//             this.head = this.head.next
//         }else{
//             let prev = this.head

//             for(let i = 0;i<index -1 ; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }

//     removefromvalue(value){
//       if(this.isEmpty()){
//         return null
//       }
//       if(this.head.value == value){
//         this.head = this.head.next
//         this.size--
//         return value
//       }else{
//         let prev = this.head
//         while(prev.next && prev.next.value !== value){
//             prev = prev.next
//         }

//         if(prev.next){
//             const removeNode = prev.next
//             prev.next = removeNode.next
//             this.size--
//             return value
//         }
//       }
//     }

//     searchValue(value){

//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr = this.head

//         while(curr){
//             if(curr.value === value){
//                 return i
//             }
//             curr =curr.next
//             i++
//         }
//         return -1
//     }

//     reverse(){
//         let prev = null
//        let curr = this.head


//        while(curr){
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//        }
//        this.head = prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
//         }else{
//             let curr = this.head
//             let linkedValues = ' '

//             while(curr){
//                 linkedValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(linkedValues);
//         }
//     }



// }

// const list = new linkedList()

// list.prepend(10)
// list.prepend(20)
// list.append(10)
// list.append(20)
// list.append(30)

// list.insert(30,2)
// list.removefromindex(3)
// list.removefromvalue(30)
// list.removefromvalue(20)
// // console.log(list.searchValue(30))
// list.print()
// list.reverse()
// list.print()




// doublely linkedlist

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class doubleLinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     removeFromFront() {
//      if(this.isEmpty()){
//         return null
//      }else{
//         const value = this.head
//         this.head = this.head.next
//         this.size --
//         return value
//      }
//     }

//     removeFromEnd() {
//        if(this.isEmpty()){
//         return null
//        }else{
//         const value = this.tail.value
//         if(this.size === 1){
//             this.head =null
//             this.tail = null
//         }else{
//             let prev = this.head

//             while(prev.next !== this.tail){
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//        }
//     }


//     print() {
//         if (this.isEmpty()) {
//             console.log("No Node list are avilable");
//         } else {
//             let curr = this.head
//             let linkedListValue = ' '
//             while (curr) {
//                 linkedListValue += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(linkedListValue);
//         }
//     }
// }
// const list = new doubleLinkedList
// console.log("list empty", list.isEmpty());
// console.log("list size", list.getSize());
// list.print()
// list.append(10)
// list.append(20)
// list.append(30)
// list.prepend(0)
// list.print()
// list.removeFromFront()
// list.print()
// list.removeFromEnd()
// list.print()




class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class doubleLinkedList{
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
    removeFromFront(){
        if(!this.head){
           return
        }
        if(this.head === this.tail){
            this.head=null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
    }

    removeFromEnd(){
        if(!this.head){
            return
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
        if (!this.head) {
            console.log("not in a list");
        }else{
            let curr = this.head
            let result = ' '

            while(curr){
                result += `${curr.value} `
                curr = curr.next
            }
            console.log(result);
        }
    }
}
const list = new doubleLinkedList

list.print()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(0)
list.append(10)
list.print()
list.removeFromFront()

list.print()
list.removeFromEnd()
list.print()




// // doubly linkedlist

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null

//     }
// }
// class doublyLinkedList{
//     constructor(){
//      this.head = null
//      this.tail = null
//      this.size = 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.prev = this.tail
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     removeFromFront(){
//         if(!this.head){
//             console.log("LIST NOT ADDED");
//             return 
//         }

//         if(this.head == this.tail){
//             this.head = null
//             this.tail = null
//         }else{
//             this.head = this.head.next
//             this.head.prev = null 
//         }
//         this.size--
//     }

//    removeFromEnd(){
//     if(!this.head){
//         console.log("list is empty");
//         return 
//     }
//     if(this.head === this.tail){
//         this.head = null
//         this.tail = null
//     }else{
//         this.tail = this.tail.prev
//         this.tail.next = null
//     }
//     this.size--
//    }

//     print(){
//         let current = this.head
//         let result = []

//         while(current){
//             result.push(current.value)
//             current = current.next
//         }
//         console.log(result.join(' <-> '));
//     }
// }



// const list = new doublyLinkedList

// list.prepend(30)
// list.prepend(20)
// list.prepend(10)
// list.print()
// list.append(40)
// list.print()
// list.removeFromFront()
// list.print()
// list.removeFromEnd()
// list.print()
