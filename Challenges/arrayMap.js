const arrayMap = (arr, target) => {
  let left=0 ,currentSum = 0
    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right]
        while (currentSum > target) {
            currentSum -= arr[left]; left++
        }
        if (currentSum === target)return true
    }
    return false
}
console.log(arrayMap([4, 2, 7, 1, 9, 5], 17)) 
