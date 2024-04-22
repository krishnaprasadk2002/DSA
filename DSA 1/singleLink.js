// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class singleLinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0

//     }

//     prepend(value){
//         const node = new Node(value)

//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//             if(!this.head){
//                 this.head = node
//         }else{
//             let curr = this.head

//             while(curr.next){
//                 curr = curr.next
//             }

//             curr.next = node
//         }
//         this.size++
//     }

//     insert(value,index){
//     const node = new Node(value)
//         if(index < 0 || index > this.size){
//             console.log("invalid index");
//             return 
//         }

//         if(index === 0){
//             if(!this.head){
//              this.head = node
//             }else{
//                 node.next = this.head
//                 this.head = node
//             }
//             this.size++
//         }else{
//             let curr = this.head

//             for(let i=0;i<index-1;i++){
//                 curr = curr.next
//             }

//             node.next = curr.next
//             curr.next = node
//             this.size++
//         }
//     }

//     removeFirst(){
//         if(!this.head){
//             return null
//         }else{
//             this.head = this.head.next
//         }
//         this.size--
//     }

//     removeLast(){
//         if(!this.head){
//             return null
//         }else{
//             let curr = this.head
//             while(curr.next.next){
//                 curr=curr.next
//             }
//             curr.next = null
//         }
//         this.size--
//     }

//     removeValue(value){
//         if(!this.head){
//             return null
//         }

//         if(this.head && this.head.value === value){
//             this.head = this.head.next
//         }else{
//             let curr = this.head

//             while(curr.next && curr.next.value != value){
//                 curr = curr.next
//             }
//               if(curr.next){
//                 let removeNode = curr.next
//                 curr.next = removeNode.next
//               }
//         }
//         this.size--
//     }

//     removeIndex(index){
//         if(index < 0 || index > this.size){
//             console.log("invalid index");
//             return null
//         }

//         if(index === 0){
//             this.head = this.head.next
//         }else{
//             let curr = this.head
//             for(let i=0;i<index-1;i++){
//                 curr = curr.next
//             }

//             let removeNode = curr.next
//             curr.next = removeNode.next
//         }
//         this.size--
//     }

//     reverse(){
//         let prev = null
//         let curr = this.head

//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }



//     print(){
//         let curr = this.head
//         let result = []

//         while(curr){
//             result.push(curr.value)
//             curr = curr.next
//         }
//         console.log(result.join(" -> "));
//     }
// }

// const list = new singleLinkedList
// list.prepend(10)
// list.prepend(20)
// list.print()
// list.append(0)
// list.append(10)
// list.append(20)
// list.print()
// list.insert(5,2)
// list.insert(15,5)
// list.print()
// list.removeFirst()
// list.print()
// list.removeLast()
// list.print()
// list.removeValue(0)
// list.removeValue(5)
// list.print()
// list.removeIndex(1)
// list.print()
// list.reverse()
// list.print()


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    isPalindrome() {
        if (!this.head || !this.head.next) {
            return true;
        }

        // Step 1:middle
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse 
        let reversedSecondHalf = null;
        while (slow) {
            const next = slow.next;
            slow.next = reversedSecondHalf;
            reversedSecondHalf = slow;
            slow = next;
        }

        // Step 3: Comparing
        let firstHalf = this.head;
        let secondHalf = reversedSecondHalf;
        while (secondHalf) {
            if (firstHalf.value !== secondHalf.value) {
                return false; 
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        return true; 
    }
}

// Example usage:
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(2);
list.append(1);

console.log(list.isPalindrome()); // Output: true
