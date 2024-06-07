const arrayMap = (arr, target) => {
  let left=0 ,currentSum = 0
    for (let right = 0; right < arr.length; right++) {
        if(arr[right]>0 && target === 0) return false
        currentSum += arr[right]
        while (currentSum > target) {
            currentSum -= arr[left]; left++
        }
        if (currentSum === target )return true
    }
    return false
}
