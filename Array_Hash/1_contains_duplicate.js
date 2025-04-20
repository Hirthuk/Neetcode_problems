// ✅ NeetCode 75 - Problem 1: Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

let nums = [1, 2, 3, 3];

// ----------------------------
// ✅ Your Version - Using Map
// ----------------------------

var containsDuplicate = function(nums) {
    // Create a Map to store the elements we've seen
    let hash = new Map();

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is already in the Map, it's a duplicate
        if (hash.has(nums[i])) {
            return true;
        } else {
            // Otherwise, add it to the Map
            hash.set(nums[i]);
        }
    }

    // No duplicates found
    return false;
};


// ----------------------------
// ⭐ Better Version - Using Set
// ----------------------------

var containsDuplicate1 = function(nums) {
    // Create a Set to store unique values
    let num = new Set();

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // If element already exists in Set, it's a duplicate
        if (num.has(nums[i])) {
            return true;
        } else {
            // Add the number to the Set
            num.add(nums[i]);
        }
    }

    // No duplicates found
    return false;
};


// ----------------------------
// 📌 Explanation and Learning
// ----------------------------

/*
✅ Problem Summary:
  - You are given an array of integers.
  - Return true if any value appears more than once.
  - Return false if all values are unique.

✅ Your Solution:
  - Used a Map to store seen elements.
  - If we see the same element again, return true.
  - Otherwise, keep adding to the map.

✅ Better Solution:
  - Used a Set, which is made specifically to store only unique values.
  - If Set already has the element, return true.
  - Cleaner and uses less memory compared to Map.

📊 Time Complexity (both solutions):
  - O(n) — Single pass through the array

📦 Space Complexity:
  - O(n) — In the worst case, all values are unique and stored in Map/Set

🔁 When to use Set vs Map?
  - Use Set when you only care about existence (uniqueness).
  - Use Map when you need to associate values with keys (e.g., for counting, mapping indices, etc.)

🎯 Takeaway:
  - Set is more readable, lighter, and semantically appropriate for this problem.
  - Always think: Do I need both key and value? If not, prefer Set.
*/
