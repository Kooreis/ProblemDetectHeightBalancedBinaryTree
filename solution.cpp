```cpp
#include <iostream>
#include <algorithm>

struct Node {
    int data;
    Node* left;
    Node* right;
};

Node* newNode(int data) {
    Node* node = new Node();
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int height(Node* node) {
    if (node == NULL)
        return 0;
    return 1 + std::max(height(node->left), height(node->right));
}

bool isBalanced(Node* root) {
    if (root == NULL)
        return true;

    int leftHeight = height(root->left);
    int rightHeight = height(root->right);

    return (abs(leftHeight - rightHeight) <= 1 && isBalanced(root->left) && isBalanced(root->right));
}

int main() {
    Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);
    root->left->left->left = newNode(8);

    if (isBalanced(root))
        std::cout << "Tree is balanced";
    else
        std::cout << "Tree is not balanced";
    return 0;
}
```