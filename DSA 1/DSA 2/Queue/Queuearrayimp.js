// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
//     }
// }

// const queue = new Queue()

// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()
// console.log(queue.dequeue());
// console.log(queue.peek());



class Queue{
    constructor(){
        this.item = []
    }

    enqueue(value){
        this.item.push(value)
    }
   
    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            this.item.shift()
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.item[0]
        }
    }

    isEmpty(){
            return this.item.length === 0
    }

    print(){
        console.log(this.item);
    }

}

const queue = new Queue()

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek());
queue.print()





