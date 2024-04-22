class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    
    isEmpty(){
        return this.root === null
    }
    
    insert(value){
        const node = new Node(value)
        if(this.root == null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value > node.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    
    search(root,value){
        
        if(!root){
            return false
        }
        if(root.value == value){
            return true
        }else if(root.value > value){
            this.search(root.left,value)
        }else{
            this.search(root.right,value)
        }
    }
    
    //dfs
    preOrder(root){
        if(root){
            console.log(root.value)
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
            console.log(root.value)
        }
    }
    
    //BFS
    
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
          return
      }
      if(root.value > value){
          root.left  = this.deleteNode(root.left,value)
      }else if(root.value < value){
          root.right = this.deleteNode(root.right,value)
      }else{
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
    }
    return root;
}

height(root){
    if(!root){
        return -1
    }else{
         let left = this.height(root.left)
    let right = this.height(root.right)
    
    return Math.max(left,right)+1
    }
}
getHeight(){
    return this.height(this.root)
}

closestValue(target){
    let closestValue = this.root.value
    let root = this.root
    
    while(root){
         if(Math.abs(root.value - target) < Math.abs(closestValue - target )){
        closestValue = root.value
    }
    
    if(root.value > target){
        root = root.left
    }else if(root.value < target){
        root = root.right
    }else{
        break
    }
    
    }
   return closestValue
}
  
  SecondMax(){
      let curr = this.root
      let parent = null
      
      while(curr.right !== null){
          parent = curr
          curr = curr.right
      }
      
      if(curr.left !== null){
          curr = curr.left
      while(curr.right !== null){
          curr = curr.right
      }
      return curr.value
      }else if(parent !== null){
          return parent.value
      }else{
          return -1
      }
  }
  Secondmin(){
      let curr = this.root
      let parent = null
      
      while(curr.left !== null){
          parent = curr
          curr = curr.left
      }
      
      if(curr.right != null){
          curr = curr.right
          while(curr.left !== null){
              curr = curr.left
          }
          return curr.value
      }else if(parent !== null){
          return parent.value
      }else{
          return -1
      }
  }
  
  validBst(){
      return this.checkBst(this.root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)
  }
  
  checkBst(root,min,max){
      if(root === null){
          return true
      }
      
      if(root.value <= min || root.value >= max){
          return false
      }
      
      return (this.checkBst(root.left,min,root.value) && this.checkBst(root.right,root.value,max))
  }

  secondmax(){
    let parent 
    let root = this.root

    while(root.right){
        parent = root
        root = root.right
    }
    return parent.value
  }
  
}

const bst = new BST();

bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(40);
bst.insert(50);


bst.levelOrder()
// console.log(bst.closestValue(25));
// console.log("Height of the tree:", bst.getHeight());
// console.log("secondMax",bst.SecondMax())
// console.log("secondmin",bst.Secondmin())
// console.log("isValid",bst.validBst())
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)

// bst.preOrder(bst.root)

console.log(bst.SecondMax())