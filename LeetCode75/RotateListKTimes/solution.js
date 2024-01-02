function listSize(head) {
    let count = 0;
    let curr = head;
    while (curr !== null) {
        count++;
        curr = curr.next;
    }
    return count;
}

var rotateRight = function(head, k) {
    if (head == null || head.next == null) return head;

    let n = listSize(head); // O(n)

    if (k % n == 0) return head;

    let stepsToKthNode = n - (k % n), stepsToNewTail = n - (k % n) - 1;
    let oldTail = head, newTail = head, newHead = head;

    while (oldTail.next) { // O(n)
        oldTail = oldTail.next;
    }

    // O(n - (k % n) - 1) -> O(n)
    for (let i = stepsToNewTail; i > 0; i--) {
        if (newTail.next) {
            newTail = newTail.next;
        }
    }

    for (let i = stepsToKthNode; i > 0; i--) { // O(n)
        if (newHead.next) {
            newHead = newHead.next;
        }
    }

    oldTail.next = head;
    newTail.next = null;
    head = newHead;

    // console.log(`- newHead: ${newHead.val}, oldTail: ${oldTail.val}, newTail: ${newTail.val}`)

    return head;
};
