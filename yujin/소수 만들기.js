function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = [nums[i], nums[j], nums[k]].reduce(
          (a, b) => a + b,
          0
        );

        if (isPrime(sum)) count++;
      }
    }
  }

  return count;
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if (num % i === 0) return false;
  return num > 1;
}
