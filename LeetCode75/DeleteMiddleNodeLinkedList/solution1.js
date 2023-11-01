/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function getSize(head) {
    let count = 0;
    let curr = head;
    while(curr) {
        count++;
        curr = curr.next;
    };
    return count;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let pos = 0;
    let n = getSize(head);
    let mid = Math.floor(n / 2);

    if(n === 1) head = null;

    let curr = head;
    while(curr !== null) {
        // Walk to the node just before the middle node
        if(pos === mid - 1) {
            if(curr.next) {
                curr.next = curr.next.next;
            }
            else {
                curr.next = null;
            }
        };
        curr = curr.next;
        pos++;
    }
    return head;
};
