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

var ll = new MyLinkedList();
// ll.addAtHead(1);
// ll.addAtTail(3);
// ll.addAtIndex(1, 2);  
// ll.addAtHead(7);
// ll.addAtHead(2);
// ll.addAtHead(1);
// ll.addAtIndex(0, 10);
// ll.addAtIndex(0, 20);
// ll.addAtIndex(1, 30);
// ll.addAtIndex(3, 40)
// ll.deleteAtIndex(2);
// ll.addAtHead(6);
// ll.addAtTail(4);
// ll.get(4)

console.log(ll);

