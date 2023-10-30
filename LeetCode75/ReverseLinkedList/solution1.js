function walkList(head) {
    let list = [];
    let curr = head;
    while(curr !== null) {
        list.push(curr.val);
        curr = curr.next;
    }
    return list;
}

// Iterative
// Time: O(n), Space: O(1)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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
