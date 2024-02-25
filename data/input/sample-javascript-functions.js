function isEven(number) {
  return number % 2 === 0;
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function findMaxNumber(arr) {
  return Math.max(...arr);
}
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// Function to check if a string is a valid email address
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to shuffle an array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Function to convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

// Function to find the sum of all numbers in an array
function findArraySum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Function to find the longest word in a sentence
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Function to remove vowels from a string
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Function to generate a Fibonacci sequence up to a given number of terms
function generateFibonacci(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}

// Function to count the occurrences of each character in a string
function countCharacterOccurrences(str) {
  const charMap = {};
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// Function to check if two arrays are equal (contain the same elements in the same order)
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// Function to flatten a nested array
function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
}

// Function to check if a string is an anagram of another string
function isAnagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

// Function to calculate the nth power of a number recursively
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
// Function to find all permutations of a given string
function findPermutations(str) {
  if (str.length <= 1) {
    return [str];
  }
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const innerPermutations = findPermutations(remainingChars);
    for (let j = 0; j < innerPermutations.length; j++) {
      permutations.push(char + innerPermutations[j]);
    }
  }
  return permutations;
}

// Function to deep clone an object
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const clonedObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}

// Function to perform a deep comparison between two objects
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
// Function to implement a basic throttle mechanism
function throttle(func, delay) {
  let throttled = false;
  return function (...args) {
    if (!throttled) {
      func.apply(this, args);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, delay);
    }
  };
}

// Function to find the median of an array of numbers
function findMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
}

// Function to find the intersection of multiple arrays
function findMultipleIntersection(arrays) {
  if (arrays.length === 0) {
    return [];
  }
  return arrays.reduce((acc, curr) =>
    acc.filter((value) => curr.includes(value))
  );
}

// Function to generate a random password with specified length
function generateRandomPassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Function to calculate the factorial of a number iteratively
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Function to implement a simple event emitter
function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function (event, listener) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(listener);
};

EventEmitter.prototype.emit = function (event, ...args) {
  if (this.events[event]) {
    this.events[event].forEach((listener) => listener.apply(this, args));
  }
};

// Function to perform a binary search on a sorted array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Function to implement a basic promise polyfill
function CustomPromise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;
  const resolve = (value) => {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
    }
  };
  const reject = (reason) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
    }
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

CustomPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.state === "fulfilled") {
    onFulfilled(this.value);
  } else if (this.state === "rejected") {
    onRejected(this.reason);
  }
};

// Function to calculate the n-th Fibonacci number using memoization
const fibonacci = memoize(function (n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// Function to find the most frequent element in an array
function findMostFrequentElement(arr) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  arr.forEach((element) => {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = element;
    }
  });

  return mostFrequentElement;
}

// Function to implement a simple debounce with immediate option
function debounce(func, delay, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);

    if (callNow) func.apply(context, args);
  };
}

// Function to find the first non-repeating character in a string
function findFirstNonRepeatingCharacter(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

// Function to check if an array contains a subarray
function containsSubarray(arr, subarray) {
  for (let i = 0; i <= arr.length - subarray.length; i++) {
    if (
      arr
        .slice(i, i + subarray.length)
        .every((value, index) => value === subarray[index])
    ) {
      return true;
    }
  }
  return false;
}

// Function to check if a number is a perfect square
function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt - Math.floor(sqrt) === 0;
}

// Function to sort an array of objects by a specific property
function sortByProperty(arr, property) {
  return arr.sort((a, b) => a[property] - b[property]);
}

// Function to remove falsy values from an array
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// Function to generate a random permutation of an array
function generateRandomPermutation(arr) {
  const permutation = [...arr];
  for (let i = permutation.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }
  return permutation;
}
// Function to calculate the Hamming distance between two strings of equal length
function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error("Strings must have equal length");
  }
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
}

// Function to generate a random hexadecimal color code
function generateRandomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

// Function to flatten an array recursively
function flattenArrayRecursive(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val)
        ? acc.concat(flattenArrayRecursive(val))
        : acc.concat(val),
    []
  );
}

// Function to calculate the greatest common divisor (GCD) of two numbers using Euclid's algorithm
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeFirstLetterOfEachWord(sentence) {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Function to implement a deep merge of objects
function deepMerge(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isPlainObject(target) && isPlainObject(source)) {
    for (const key in source) {
      if (isPlainObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}

// Helper function to check if an object is a plain object
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

// Function to implement memoization with a cache size limit
function memoizeLimited(fn, limit) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    if (cache.size >= limit) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
    cache.set(key, result);
    return result;
  };
}

// Function to perform a deep clone of an object using JSON serialization
function deepCloneJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Function to implement a simple version of async/await using promises
function asyncAwait(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const callback = function (result) {
        resolve(result);
      };
      fn.apply(null, [...args, callback]);
    });
  };
}
// Function to implement a basic version of map function
function customMap(arr, callback) {
  const mappedArray = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i], i, arr));
  }
  return mappedArray;
}

// Function to implement a basic version of reduce function
function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Function to implement a basic version of filter function
function customFilter(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

// Function to generate a random UUID
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Function to implement a basic version of debounce with leading and trailing options
function customDebounce(func, delay, options = {}) {
  let timeoutId;
  return function (...args) {
    const context = this;
    const later = function () {
      timeoutId = null;
      if (!options.leading) func.apply(context, args);
    };
    const callNow = options.leading && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
    if (callNow) func.apply(context, args);
  };
}
// Function to implement a basic version of throttle with leading and trailing options
function customThrottle(func, delay, options = {}) {
  let lastExecuted = 0;
  let timeoutId;
  return function (...args) {
    const context = this;
    const now = Date.now();
    const elapsed = now - lastExecuted;
    const execute = () => {
      lastExecuted = now;
      func.apply(context, args);
    };
    if (!lastExecuted && !options.leading) {
      lastExecuted = now;
    }
    if (elapsed >= delay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      execute();
    } else if (!timeoutId && options.trailing) {
      timeoutId = setTimeout(execute, delay - elapsed);
    }
  };
}

// Function to implement a basic version of curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// Function to implement a basic version of memoization
function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func.apply(this, args);
    }
    return cache[key];
  };
}

// Function to implement a basic version of chunking an array
function chunkArray(arr, size) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray;
}

// Function to implement a basic version of zip to combine arrays into an array of arrays
function zipArrays(...arrays) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const zippedArray = [];
  for (let i = 0; i < maxLength; i++) {
    zippedArray.push(arrays.map((arr) => arr[i]));
  }
  return zippedArray;
}

// Function to implement a basic version of unzip to separate an array of arrays into arrays
function unzipArray(arr) {
  return arr.reduce(
    (acc, val) => val.map((v, i) => (acc[i] || []).concat(v)),
    []
  );
}

// Function to implement a basic version of deep freeze for objects
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (
      obj[prop] !== null &&
      (typeof obj[prop] === "object" || typeof obj[prop] === "function") &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}

// Function to implement a basic version of groupBy to group elements of an array by a specified key
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const keyValue = obj[key];
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(obj);
    return acc;
  }, {});
}

// Function to implement a basic version of memoization with a custom cache size and eviction strategy
function memoizeWithEviction(fn, cacheSize, evictionStrategy = "LRU") {
  const cache = new Map();
  const cacheKeys = [];
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      // Update cache key position for LRU strategy
      if (evictionStrategy === "LRU") {
        const index = cacheKeys.indexOf(key);
        if (index !== -1) {
          cacheKeys.splice(index, 1);
          cacheKeys.push(key);
        }
      }
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    if (cache.size >= cacheSize) {
      const keyToRemove =
        evictionStrategy === "LRU" ? cacheKeys.shift() : cacheKeys.pop();
      cache.delete(keyToRemove);
    }
    cache.set(key, result);
    cacheKeys.push(key);
    return result;
  };
}

// Function to implement a basic version of a priority queue
function PriorityQueue() {
  this.queue = [];

  this.enqueue = function (item, priority) {
    this.queue.push({ item, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  };

  this.dequeue = function () {
    return this.queue.shift().item;
  };

  this.isEmpty = function () {
    return this.queue.length === 0;
  };
}

// Function to implement a basic version of a trie data structure
function TrieNode() {
  this.children = new Map();
  this.isEndOfWord = false;
}

function Trie() {
  this.root = new TrieNode();

  this.insert = function (word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  };

  this.search = function (word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  };

  this.startsWith = function (prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  };
}
