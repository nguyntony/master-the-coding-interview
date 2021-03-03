class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      // this is a standard check to see if a root element even exists, if it does not then we will make the newNode the root element.
      this.root = newNode;
    } else {
      // if this.root does exist then we need to select it for traversal
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // going left
          if (!currentNode.left) {
            // is there a left element already? if there is not then we can simply assign the newNode to the currentNode.left
            currentNode.left = newNode;
            return this;
          }
          // if a currentNode.left does exist, we will need to go down another level by going to the left and then the above will re run
          currentNode = currentNode.left;
        } else {
          // if the value is greater than the currentNode.value then we go right

          if (!currentNode.right) {
            // same as above, does a right element already exist? if so then we can just make it the currentNode.right
            currentNode.right = newNode;
            return this;
          }
          // if the currentNode.right does exist, we need to go to the right and then the loop will re run.
          currentNode = currentNode.right;
        }

        // it is important to note that each time we go down one level we come back to the very beginning of this looop where we are asking if the value is less then or greater. this will ensure that each child node will be placed on either side depending on its value.
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    // we need a reference to the parentNode.
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        // go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // we have a match

        if (!currentNode.right) {
          // option 1 if the current node does not have a right side.
          if (!parentNode) {
            // this will only occur if this is the very first item
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              // if the current value is less than the parent value
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        } else if (!currentNode.right.left) {
          // option 2
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          // option 3
          // find the right child's left most child
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }

        return true;
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(290);
tree.insert(2);
tree.insert(5);
tree.insert(10);
tree.insert(161);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(161));
console.log(tree.lookup(11));
console.log(tree.remove(2));
console.log(JSON.stringify(traverse(tree.root)));
