# 11. Container With Most Water? https://leetcode.com/problems/container-with-most-water/description/
# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

max_area = 0
b = len(height) - 1
a = 0

while a < b:
    width = b - a
    length = min(height[b], height[a])

    area = width * length

    max_area = max(max_area, area)
    if (height[a] > height[b]):
        b -= 1
    else:
        a += 1 
print(max_area)

# 1. Two Sum? https://leetcode.com/problems/two-sum/
# // Input: nums = [2,7,11,15], target = 9
# // Output: [0,1]
# // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

new_dict = {}
for i in range(len(nums)):
    try:
        current_val = new_dict[nums[i]]
        if current_val >=0:
            print([current_val, i])
    except KeyError:
        diff = target - nums[i]
        new_dict[diff] = i
    print([])
print(two_sums(nums, target))

# 42. Trapping Rain Water? https://leetcode.com/problems/trapping-rain-water/description/

# Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
# Output: 6
# Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

def get_total_captured_water(heights):
    total_water = 0
    max_left = 0
    max_right = 0
    a = 0
    b = len(heights) - 1
    
    while a < b:
        if heights[a] <= heights[b]:
            if heights[a] >= max_left:
                max_left = heights[a]
            else:
                total_water += max_left - heights[a] 
            a += 1
        else:
            if heights[b] >= max_right:
                max_right = heights[b]
            else:
                total_water += max_right - heights[b]
            b -= 1
            
    return total_water
    
print(get_total_captured_water(heights))