class Node{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
    }
}

class HashTable{
    constructor(size){
this.size = size
this.table = new Array(size)
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const node = new Node(key,value)
        const index = this.hash(key)
        if(!this.table[index]){
        this.table[index] = node
        }else{
            let current = this.table[index]
            while(current.next != null){
             if(current.key === key){
                current.value = value
                return
             }
               current=current.next
            }
            current.next = node
        }
    }

    get(key){
        const index = this.hash(key)
        let current = this.table[index]

        while(current){
            if(current.key === key){
                return current.value
            }
            current = current.next
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        if(!this.table[index]){
            return
        }

        let current = this.table[index]
        if(current.key == key){
            this.table[index] = current.next
            return
        }

        let prev = current
        current = current.next

        while(current){
            if(current.key == key){
                prev.next = current.next
                return
            }
            prev = current
            current = current.next
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
           let  current = this.table[i]

            while(current){
                console.log(current.key , current.value)
                current = current.next
            }

            
        }
    }


}

const table = new HashTable(50);

table.set("name", "sabeeh");
table.set("age", 18);
table.display();
console.log(table.get("name"));
table.remove("age");
table.display();