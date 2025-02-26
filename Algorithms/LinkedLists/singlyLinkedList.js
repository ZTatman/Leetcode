var Node = function(data) {
    this.value = data;
    this.next = null;
};

var MyLinkedList = function() {
    this.head = null;
};

MyLinkedList.prototype.get = function(index) {
  let pos = 0;
  let curr = this.head;
  
  while(curr !== null) {
    if(pos === index) {
      return curr.value;
    }
    curr = curr.next;
    pos++;
  }
  return -1;
}

MyLinkedList.prototype.size = function() {
    let size = 0;
    let curr = this.head;
    while(curr !== null) {
        size++;
        curr = curr.next;
    }
    return size;
}

MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
};

MyLinkedList.prototype.addAtTail = function(val) {
  if(this.head === null) {
    this.head = new Node(val);
  }
  else {
    let newNode = new Node(val);
    let curr = this.head;
    while(curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  };
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === this.size()) {
    this.addAtTail(val);
  }
  else {  
    let pos = 0;
    let curr = this.head;
    let prev = null;
    while(curr !== null) {
      if(pos === index) {
        let newNode = new Node(val);
        prev ? prev.next = newNode : this.addAtHead(val)
        newNode.next = curr;
      }
      prev = curr;
      curr = curr.next;
      pos++;
    }
  }
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  let pos = 0;
  let prev = null;
  let curr = this.head;
  while(curr !== null) {
    if (index === 0) {
      this.head = curr.next;
      return;
    }
    if(pos === index) {
      prev.next = curr.next;
    }
    prev = curr;
    curr = curr.next;
    pos++;
  }
};

var reverseList = function(head) {
  if(!head) return head;
  let prev = null, curr = head, next = null;

  while(curr !== null) {
    next = curr.next; // get next node
    curr.next = prev; // point curr to prev (prev starts null)
    prev = curr; // update prev pointer to curr node
    curr = next; // update curr pointer to next node
    // console.log("-> list: ", walkList(prev));
  };
  return prev;
};

var reverseListRecursive = function(head) {
    if(head === null || head.next === null) return head;
    const p = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return p;
}

var ll = new MyLinkedList();
ll.addAtHead(1);
ll.addAtTail(3);
ll.addAtTail(7);
reverseListRecursive(ll.head);
console.log("ll: \n", ll)
