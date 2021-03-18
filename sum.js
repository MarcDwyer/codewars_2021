function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const remain = target - curr;
    const hasN = map.get(remain);
    console.log({ remain, map, hasN });
    if (typeof hasN === "number") {
      return [hasN, i];
    }
    map.set(curr, i);
  }
}

const numsEx = [2, 7, 11, 15];
const targetEx = 9;

// console.log(twoSum([1, 3, 4, 2], 6));
console.log(twoSum([2, 7, 11, 15], 9));
