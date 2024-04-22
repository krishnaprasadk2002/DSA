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
        const index = this.hash(key)
        // this.table[index] = value

        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const someKeyItems = bucket.find(item => item[0] === key)
            if(someKeyItems){
                someKeyItems[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }


    get(key){
        const index = this.hash(key)
        // return this.table[index]

        const bucket = this.table[index]
        if(bucket){
            const someKeyItems = bucket.find(item => item[0] === key)
            if(someKeyItems){
                return someKeyItems[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        // this.table[index] = undefined

        const bucket = this.table[index]
        if(bucket){
            const someKeyItems = bucket.find(item => item[0] === key)

            if(someKeyItems){
                bucket.splice(bucket.indexOf(someKeyItems),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const table = new HashTable(50)

table.set("name","shahabas")
table.set("mane","shambu")
table.display()
console.log(table.get("name"));
table.remove("name")
table.display()
