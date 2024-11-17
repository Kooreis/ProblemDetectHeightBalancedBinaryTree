Here is a TypeScript solution for the problem:

```typescript
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isBalanced(root: TreeNode | null): boolean {
    return height(root) !== -1;
}

function height(node: TreeNode | null): number {
    if (node === null) {
        return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}

// Test the solution
const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(3),
        new TreeNode(3)
    ),
    new TreeNode(2)
);

console.log(isBalanced(root)); // true
```

This solution defines a `TreeNode` class to represent a node in the binary tree. The `isBalanced` function checks if a binary tree is height-balanced by calling the `height` function. The `height` function calculates the height of a binary tree and returns -1 if the tree is not balanced.