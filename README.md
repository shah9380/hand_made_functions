# Custom Array Methods

This project provides custom implementations of common array methods in JavaScript: `mineFilter`, `mineReduce`, and `mineMap`. These custom functions mimic the behavior of their respective built-in array methods (`filter`, `reduce`, and `map`).

## Getting Started

These custom array methods can be used in any JavaScript project to perform filtering, reducing, and mapping operations on arrays.

### Prerequisites

- Make sure you have a JavaScript environment (Node.js, a browser, etc.) where you can run JavaScript code.

### Installing

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/shah9380/hand_made_functions.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hand_made_functions
   ```

3. Use the custom array methods in your JavaScript code:

   ```javascript
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
   ```

## How They Work

### `mineFilter`

The `mineFilter` function creates a new array containing all elements of the original array for which the provided callback returns `true`. The callback is applied to each element with three arguments: the current element, the index of the current element, and the original array.

![image](https://github.com/shah9380/hand_made_functions/assets/130676464/be7c452b-244c-425c-afc0-ad53f786f10b)


### `mineReduce`

The `mineReduce` function applies a callback function against an accumulator and each element in the array (from left to right) to reduce it to a single value. The callback is applied with four arguments: the accumulator, the current element, the index of the current element, and the original array.

![image](https://github.com/shah9380/hand_made_functions/assets/130676464/c246473b-233e-4a2f-ba65-0d5af773aaad)


### `mineMap`

The `mineMap` function creates a new array with the results of calling a provided function on every element in the array. The callback is applied to each element with three arguments: the current element, the index of the current element, and the original array.

![image](https://github.com/shah9380/hand_made_functions/assets/130676464/007bd7ab-2265-4a9c-bb58-ba7ea897af98)


## Contributing

If you would like to contribute to this project, please follow the standard GitHub fork and pull request workflow. Contributions are welcome!

## Acknowledgments

- Inspiration: The custom array methods were created as an educational project to understand the inner workings of built-in array methods in JavaScript.

## Contact

For any questions or feedback, feel free to reach out:

- Your Name
  - GitHub: [YourGitHubUsername](https://github.com/shah9380)
  - Email: shahislam9380@gmail.com

This section explains how each custom function works, providing a brief overview of their functionality. Feel free to further customize the explanations based on the specifics of your implementations.
