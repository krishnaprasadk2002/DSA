class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Other methods...

    isEqual(node1, node2) {
        // If both nodes are null, they are equal
        if (node1 === null && node2 === null) {
            return true;
        }

        // If one node is null while the other is not, they are not equal
        if (node1 === null || node2 === null) {
            return false;
        }

        // If the values of the nodes are not equal, they are not equal
        if (node1.value !== node2.value) {
            return false;
        }

        // Recursively compare left and right subtrees
        return this.isEqual(node1.left, node2.left) && this.isEqual(node1.right, node2.right);
    }

    compareTrees(otherTree) {
        // Call the isEqual method starting from the root nodes of both trees
        return this.isEqual(this.root, otherTree.root);
    }
}

// Example usage:
const tree1 = new BinaryTree();
tree1.root = new Node(1);
tree1.root.left = new Node(2);
tree1.root.right = new Node(3);

const tree2 = new BinaryTree();
tree2.root = new Node(1);
tree2.root.left = new Node(2);
tree2.root.right = new Node(3);

console.log("Are the trees equal?", tree1.compareTrees(tree2)); // Output: true
