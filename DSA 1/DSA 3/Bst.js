class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root == null){
            this.root = node
        }else{
         this.insertNode(this.root , node)
        }
    }

    insertNode(root,node){
        if(root.value > node.value){
            if(root.left == null){
                root.left = node
            }else{
            return this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
             return this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else if(root.value === value){
            return true
        }else if(root.value > value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    // DFS
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    // BFS

    levelOrder(){
        let queue = []

        queue.push(this.root)

        while(queue.length){
           let curr = queue.shift()
           console.log(curr.value)
           if(curr.left){
            queue.push(curr.left)
           }

           if(curr.right){
            queue.push(curr.right)
           }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

  delete(value){
    this.root = this.deleteNode(this.root,value)
  }

  deleteNode(root,value){
    if(!root){
        return root
    }
        if(root.value > value){
            root.left = this.deleteNode(root.left,value)
        }else if(root.value < value){
            root.right = this.deleteNode(root.right,value)
        }else {
          if  (!root.left && !root.right){
            return null
        }else if(root.left){
            return root.right
        }else if(root.right){
            return root.right
        }
        root.right = this.min(root.right)
        root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
  }

  const bst = new BinarySearchTree()

  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)


// bst.levelOrder()
bst.delete(15)
bst.levelOrder()

