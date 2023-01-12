// // 11. Container With Most Water? https://leetcode.com/problems/container-with-most-water/description/
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

let max_area = 0;
let max_index = height.length - 1;
let min_index = 0;

while (min_index < max_index) {
  let length = Math.min(height[min_index], height[max_index]);
  let width = max_index - min_index;
  let area = length * width;
  max_area = Math.max(max_area, area);
  if (height[min_index] > height[max_index]) {
    max_index--;
  } else {
    min_index++;
  }
}

console.log(max_area);

// 1. Two Sum? https://leetcode.com/problems/two-sum/

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

for (let i = 0; i < nums.length; i++) {
  diff = target - nums[i];
  for (let j = i + 1; j < nums.length; j++) {
    if (diff === nums[j]) {
      console.log([i, j]);
    }
  }
}
console.log(null);

// # 42. Trapping Rain Water? https://leetcode.com/problems/trapping-rain-water/description/

// # Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// # Output: 6
// # Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

function getTotalCaptureWater(height) {
  totalWater = 0;
  maxLeft = 0;
  maxRight = 0;
  left = 0;
  right = height.length - 1;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }
      right--;
    }
  }

  return totalWater;
}

console.log(getTotalCaptureWater(height));
