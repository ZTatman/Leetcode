    /**
    * @param {number[]} nums
    * @return {void} Do not return anything, modify nums in-place instead.
    */
    var moveZeroes = function(nums) {
        let snowballSize = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) snowballSize++;
            else if (snowballSize > 0) {    
                nums[i-snowballSize] = nums[i];
                nums[i] = 0;
            }
        }
    };
