let threeSum = (nums, target) => {
    nums.sort((a, b) => a-b);
    let closest = null;

    for(let i = 0; i < nums.length; i++) {
        let low = i + 1, high = nums.length - 1;

        while(low < high) {
            let sum = nums[i] + nums[low] + nums[high];
            let diff = Math.abs(target - sum);
            let currentDiff = Math.abs(target - closest);

            if(diff < currentDiff || closest == null) {
                currentDiff = sum;
            }

            if(sum == target) 
                return sum;
            else if(sum < target) 
                low++;
            else 
                high--;
        }
        while(nums[i]== nums[i+1]) 
            i++;
    }
    return closest;
}

console.log(threeSum([1,2,-1,0], 2));
