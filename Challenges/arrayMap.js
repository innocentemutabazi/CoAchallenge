const hasSubarrayWithTargetSum = (arr, target) => {
    let left = 0;
    let currentSum = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] > 0 && target === 0) return false;
        currentSum += arr[right];
        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }
        if (currentSum === target) return true;
    }
    return false;
};

console.log(hasSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 34], 0));
