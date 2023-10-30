function walkList(head) {
    let list = [];
    let curr = head;
    while(curr !== null) {
        list.push(curr.val);
        curr = curr.next;
    }
    return list;
}

// Recursive
// Time: O(n), Space: O(n), becuase each fn call is stored in call stack.
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return p;
};
