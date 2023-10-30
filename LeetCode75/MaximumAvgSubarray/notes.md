# The Problem
You are given an integer array ```nums``` consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

## Initial Approach

We need to find a **contiguous** subarray. Contiguous means "next to or touching another", so we need to find a subarray of length ```k``` no breaks in between.

The **maximum average value** to me sounds similar to a maximum sum. If this were the desired result we'd want to loop through the array and add k elements together. Each time comparing the sum we get to the current maximum. In this case we will take the average of ```k``` numbers.

This is a brute force approach that would require nested for looping, or, O(n^2) time complexity.


