class Node{
    constructor(){
        this.childern = {}
        this.isEndWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        if(!word){
            return 
        }

        let n = this.root
        for(let i=0;i<word.length;i++){
            let c=word[i]
            if(!n.childern.hasOwnProperty(c)){
                n.childern[c] = new Node()
            }
            n = n.childern[c]
            if(i == word.length-1){
                n.isEndWord = true
            }
        }
    }

    search(word){
        let n = this.root
        for(let i=0;i<word.length;i++){
            let c = word[i]

            if(!n.childern.hasOwnProperty(c)){
                return false
            }
            n=n.childern[c]
        }
        return n.isEndWord
    }

    searchPrefix(word){
        if(!word){
            return false
        }
        let words = []
        let n = this.root
        for(let i=0;i<word.length;i++){
            let c= word[i]
            if(!n.childern.hasOwnProperty(c)){
                return words
            }
            n=n.childern[c]
        }
        this.searchHelper(n,word,words)
        return words
    }

    searchHelper(n,word,words){
        if(n.isEndWord){
            words.push(word)
        }

        for(let child in n.childern){
            this.searchHelper(n.childern[child],word+child,words)
        }
    }

    delete(word){
        if(!word){
            return false
        }

        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(n,word,i){
        if(i == word.length){
            if(!n.isEndWord){
                return 
            }

            n.isEndWord = false
            return  
        }

        let c = word[i]
        let nextNode = n.childern[c]

        if(!nextNode){
            return
        }

        this.deleteHelper(nextNode,word,i+1)
        if(Object.keys(nextNode.childern).length === 0 && !n.isEndWord){
          delete n.childern[c]
        }
    }
}

const triec=new Trie()

triec.insert("ball")
triec.insert("ballon")
triec.insert("bat")
triec.insert("balance")
triec.insert("ba")

console.log(triec.search("ba"));
triec.delete("ba")
console.log(triec.search("ba"));
console.log(triec.searchPrefix("ba"));
