// Custom mineFilter function
function mineFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// Custom mineReduce function
function mineReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

// Custom mineMap function
function mineMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Using mineFilter
const filteredNumbers = mineFilter(numbers, (num) => num % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4]

// Using mineReduce
const sum = mineReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Using mineMap
const squaredNumbers = mineMap(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
