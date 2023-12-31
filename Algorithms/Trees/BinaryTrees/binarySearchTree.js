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

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        if (this.isEmpty()) {
            this.head = new Node(value);
        }
        else {
            this.insertNode(this.root, new Node(value))
        }
    }

    insertNode(node, nodeToInsert) {
        // left sub-tree
        if (nodeToInsert.val < node.val) {
            if (node.left === null) {
                node.left = nodeToInsert;
            }
            else {
                this.insertNode(node.left, nodeToInsert);
            }
        }
        // right sub-tree
        if (nodeToInsert.val > node.val) {
            if (node.right === null) {
                node.right = nodeToInsert;
            }
            else {
                this.insertNode(node.right, nodeToInsert);
            }
        }
    }

    getMinNode() {
        if (this.isEmpty()) {
            return -1;
        }
        let node = this.root;
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }

    inOrderTraversal() {
        this.inOrder(this.root);
    }

    inOrder(node) {
        if (node == null) return;

        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    preOrderTraversal() {
        this.preOrder(this.root);
    }

    preOrder(node) {
        if (node == null) return;

        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrderTraversal() {
        this.postOrder(this.root);
    }

    postOrder(node) {
        if (node == null) return;

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }
}


const tree = new BinaryTree();
tree.insert(47);
tree.insert(25);
tree.insert(38);
tree.insert(1);
tree.insert(54);

console.log(tree.getMinNode());

tree.inOrderTraversal();
tree.preOrderTraversal();
tree.postOrderTraversal();
