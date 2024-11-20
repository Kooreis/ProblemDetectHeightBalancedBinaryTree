# Question: How do you detect if a binary tree is height-balanced? JavaScript Summary

The JavaScript code provided defines a binary tree and a method to check if it is height-balanced. It first creates a Node class with a constructor that sets the value of the node and initializes the left and right children to null. It then creates a BinaryTree class with a constructor that sets the root of the tree to null. The BinaryTree class also includes two methods: `isBalanced` and `height`. The `isBalanced` method checks if a given node is balanced by comparing the heights of its left and right subtrees. If the absolute difference in heights is more than one, the tree is not balanced. If the difference is one or less, it recursively checks if the left and right subtrees are balanced. The `height` method calculates the height of a given node by recursively finding the maximum height of its left and right subtrees and adding one to the result. The code then creates a binary tree and checks if it is balanced by calling the `isBalanced` method on the root of the tree.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of logic and structure. Both versions define a class for the tree node and use recursive functions to check if the tree is balanced. However, there are a few differences due to the nature of TypeScript:

1. Type Annotations: TypeScript requires type annotations. In the TypeScript version, types are specified for the properties of the `TreeNode` class (`value`, `left`, `right`) and for the parameters and return values of the functions (`isBalanced`, `height`).

2. Default Parameters: The TypeScript version uses default parameters in the `TreeNode` constructor. This allows the `left` and `right` properties to be optional when creating a new `TreeNode` instance.

3. Function Separation: In the JavaScript version, `isBalanced` and `height` are methods of the `BinaryTree` class. In the TypeScript version, these are standalone functions. This doesn't change the functionality, but it does change how the functions are called.

4. Error Indication: The TypeScript version uses a different approach to indicate an error (i.e., the tree is not balanced). It returns -1 from the `height` function, which is then checked in the `isBalanced` function. The JavaScript version directly returns `false` from the `isBalanced` function when the tree is not balanced.

5. Tree Construction: The way the test tree is constructed is slightly different in the TypeScript version due to the use of default parameters in the `TreeNode` constructor. This allows for a more compact and nested creation of nodes.

---

# C++ Differences

The C++ version of the solution follows the same logic as the JavaScript version. Both versions define a binary tree and a method to check if it is height-balanced. They both use a recursive approach to solve the problem.

However, there are some differences due to the language features and syntax:

1. Object-Oriented Programming: JavaScript uses classes and constructor functions to define the Node and BinaryTree objects. C++ uses struct to define the Node and does not have a separate class for the binary tree. Instead, it uses free functions to operate on the nodes.

2. Memory Management: In C++, memory for new nodes is allocated using the new keyword and it is the programmer's responsibility to deallocate it when it is no longer needed. In JavaScript, memory management is handled automatically by the garbage collector.

3. Null/NULL: In JavaScript, null is used to represent the absence of value. In C++, NULL is used for the same purpose.

4. Function Definitions: In JavaScript, functions are defined as methods inside the class. In C++, functions are defined outside the struct and take a Node pointer as an argument.

5. Console Output: JavaScript uses console.log() to print to the console. C++ uses std::cout along with the insertion operator (<<).

6. Libraries: C++ uses the algorithm library to use the max function. JavaScript has a built-in Math object that provides the max function.

7. Main Function: C++ requires a main function as the entry point of the program. JavaScript does not have this requirement.

8. Return Statements: In C++, return statements are used to return a value from a function. In JavaScript, if there is no return statement, the function returns undefined by default.

---
