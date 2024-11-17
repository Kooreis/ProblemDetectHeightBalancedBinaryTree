Here is a JavaScript solution for the problem:

```javascript
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

    isBalanced(node) {
        if (node === null) {
            return true;
        }

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        let heightDiff = Math.abs(leftHeight - rightHeight);

        if (heightDiff > 1) {
            return false;
        } else {
            return this.isBalanced(node.left) && this.isBalanced(node.right);
        }
    }

    height(node) {
        if (node === null) {
            return 0;
        }

        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log(tree.isBalanced(tree.root));
```

This code defines a binary tree and a method to check if it is height-balanced. A binary tree is height-balanced if for every node in the tree, the difference in the heights of the left and right subtrees is at most one. The `isBalanced` method checks this condition for the tree.