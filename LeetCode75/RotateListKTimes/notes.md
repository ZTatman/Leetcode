# 61. Rotate List

(https://leetcode.com/problems/rotate-list/)

Medium

## The Problem

Given the `head` of a linked list, rotate the list to the right by `k` places.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

```
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [4,5,1,2,3]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)

```
<strong>Input:</strong> head = [0,1,2], k = 4
<strong>Output:</strong> [2,0,1]
```

**Constraints:**

-   The number of nodes in the list is in the range `[0, 500]`.
-   `-100 <= Node.val <= 100`
-   `0 <= k <= 2 * 10<sup>9</sup>`


### My Initial Approach

I am thinking that I might need at least two pointers to keep track of the `tail` node of the linked list and maybe a `prev` pointer to point to the node before the `tail`. 

My idea use an outer while loop whose condition is `k > 0` .  In this while loop, I will have an inner while loop which will walk the list until I find the `tail` and `prev` nodes.

Once `tail` and `prev` are found:
1. Assign `tail`'s next pointer to be the current `head`.
2. Assign `prev`'s next pointer to be null (the new tail)
3. Assign 'head` to be current tail, `tail` (Becomes the new head)
4. Finally, decrement `k`, and repeat starting from step 1

**The code**
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null || head.next == null) return head;
    while(k > 0) {
        let tail = head;
        let prev;
        while(tail.next !== null) {
            prev = tail;
            tail = tail.next;
        }
        // console.log(`- prev: ${prev.val}, tail: ${tail.val}`);
        // re-assignment here
        tail.next = head;
        prev.next = null;
        head = tail;
        k--;
    }
    return head;
};
```

**Analysis**
This solution above **does** work... however, it doesnt take into account the problems constraints and it gives a **Time Limit Exceeded** exception.

The constraints are as follows:

1.   The number of nodes in the list is in the range `[0, 500]`.
2.   `-100 <= Node.val <= 100`
3.   `0 <= k <= 2 * 10<sup>9</sup>`

The solution above fails the case where:
`list = [1,2,3]`
`k = 2,000,000,000`

This is just the case where `k` has reached the upper limit, what if the list has 500 nodes? This would be exceedingly slow. So... I am thinking instead of rotating the list **one node at a time**, what if this question is really asking something else. 

I think what this question is really asking for is for me to find the `Kth` to last node in the linked list. If I can find the `Kth` to last node in the list... I can partition the list into 2 lists. 

One being nodes `1 to  k - 1`, the list`first`,  and the second being nodes `k to n`, the list `second`. The list `first` points to `second` so what if I just point `second`'s tail to `first` and then `first`'s tail to `null`. Then I have effectively rotated the list by `k` nodes, without actually having needed to `k * n` operations or a O(k * n) runtime.

**Edge Cases**

what if `k > n'?
If k > n like in the test case below:

the total size of the list is too small to be partitioned by k. We would have to loop over the list `k` times before stopping at some node `n` in the list. The problem is how to find the kth node in the list when k > n or just when `k` reaches upwards of 2^10, without doing 2^10 operations. I think i might be able to use the `%` modulo operator to simplify this step.

where the position of the kth node from the end of the list  is `pos = k % n`.
This is not enough though. For example if `k =  1` and `n = 3`, the kth node from the end of the list is `1 % 3 = 1`, but how do we know that we have reached the 1st from last node in the list, we only have a singly linked list and we cannot iterate starting from the tail of the list we must start at the head. To accomplish this, lets subtract the kth nodes position from the tail of the list from the total size of the list. So now we get the number of steps we need to iterate to get to the kth node from the end of the list:

`stepsToKthNode = n - (k % n)`

The node found after iterating `stepsToKthNode` will be the `newHead`

The `newTail` by extension can be found iterating over the list again with `stepsToNewTail` being:

`stepsToNewTail = n - (k % n) - 1`

The `oldTail` can be found just by walking down the list until we get to the last node.

Using a `newHead`, `newTail`, and `oldTail` we can rotate the list and return the `newHead` as the head of the list in `O(n)` time complexity and `O(1)` space complexity.

**Optimized Solution**
```javascript
function listSize(head) {
    let count = 0;
    let curr = head;
    while (curr !== null) {
        count++;
        curr = curr.next;
    }
    return count;
}

var rotateRight = function (head, k) {
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
```




