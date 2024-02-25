// Function to calculate the area of a circle
function calculateCircleArea(radius: number): number {
  return Math.PI * radius * radius;
}

// Function to check if a number is prime
function isPrimeNumber(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// Function to reverse a string
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// Function to find the maximum number in an array
function findMax(arr: number[]): number {
  return Math.max(...arr);
}

// Function to calculate the area of a rectangle
function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}

// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to check if a year is a leap year
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Function to calculate the factorial of a number
function factorial(num: number): number {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to check if a number is even
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Function to calculate the length of a string without using built-in functions
function calculateStringLength(str: string): number {
  let length = 0;
  for (const char of str) {
    length++;
  }
  return length;
}

// Function to convert a string to title case
function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Function to find the median of an array of numbers
function findMedian(numbers: number[]): number {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const mid = Math.floor(sortedNumbers.length / 2);
  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
  } else {
    return sortedNumbers[mid];
  }
}

// Function to calculate the Fibonacci sequence up to a specified limit
function fibonacciSequence(limit: number): number[] {
  const sequence: number[] = [0, 1];
  let current = 1;
  let next = 1;
  while (current + next <= limit) {
    const temp = next;
    next = current + next;
    current = temp;
    sequence.push(next);
  }
  return sequence;
}

// Function to check if a string is a valid email address
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to truncate a string to a specified length with an ellipsis
function truncateWithEllipsis(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  } else {
    return str;
  }
}

// Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(length: number, width: number): number {
  return 2 * (length + width);
}

// Function to find the mode (most frequent element) in an array
function findMode(arr: any[]): any | undefined {
  const frequencyMap = new Map();
  let maxFrequency = 0;
  let mode;
  arr.forEach((element) => {
    const frequency = frequencyMap.has(element)
      ? frequencyMap.get(element) + 1
      : 1;
    frequencyMap.set(element, frequency);
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mode = element;
    }
  });
  return mode;
}

// Function to check if a string contains only unique characters
function hasUniqueCharacters(str: string): boolean {
  const charSet = new Set(str);
  return charSet.size === str.length;
}

// Function to calculate the power of a number
function calculatePower(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

// Function to check if a number is within a specified range
function isWithinRange(num: number, min: number, max: number): boolean {
  return num >= min && num <= max;
}

// Function to remove duplicates from an array
function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// Function to check if a string is a valid URL
function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

// Function to calculate the perimeter of a triangle
function calculateTrianglePerimeter(
  side1: number,
  side2: number,
  side3: number
): number {
  return side1 + side2 + side3;
}

// Function to check if a number is a perfect square
function isPerfectSquare(num: number): boolean {
  const sqrt = Math.sqrt(num);
  return Math.floor(sqrt) === sqrt;
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to check if two arrays are equal (have the same elements in the same order)
function arraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}

// Function to generate a random integer within a specified range
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to find the intersection of two arrays
function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
  const set1 = new Set(arr1);
  const intersection: T[] = [];
  arr2.forEach((item) => {
    if (set1.has(item)) {
      intersection.push(item);
    }
  });
  return intersection;
}

// Function to format a number as currency with specified decimal places and separators
function formatCurrency(
  amount: number,
  decimalPlaces: number = 2,
  thousandsSeparator: string = ",",
  decimalSeparator: string = "."
): string {
  const fixedAmount = amount.toFixed(decimalPlaces);
  const parts = fixedAmount.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  return parts.join(decimalSeparator);
}

// Function to find the longest common subsequence of two strings using dynamic programming
function longestCommonSubsequence(str1: string, str2: string): string {
  const matrix: number[][] = [];
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [];
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  let i = str1.length;
  let j = str2.length;
  let lcs = "";
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return lcs;
}

// Function to perform matrix multiplication
function matrixMultiplication(
  matrix1: number[][],
  matrix2: number[][]
): number[][] | undefined {
  if (matrix1[0].length !== matrix2.length) {
    return undefined; // Matrices cannot be multiplied
  }
  const result: number[][] = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

// Function to perform a binary search on a sorted array
function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

// Function to find the factorial of a number using memoization
const factorialMemo: { [key: number]: number } = {};
function factorialWithMemoization(num: number): number {
  if (num <= 1) return 1;
  if (factorialMemo[num]) return factorialMemo[num];
  factorialMemo[num] = num * factorialWithMemoization(num - 1);
  return factorialMemo[num];
}

// Function to calculate the nth Fibonacci number using memoization
const fibonacciMemo: { [key: number]: number } = { 0: 0, 1: 1 };
function fibonacciWithMemoization(n: number): number {
  if (fibonacciMemo[n] !== undefined) return fibonacciMemo[n];
  fibonacciMemo[n] =
    fibonacciWithMemoization(n - 1) + fibonacciWithMemoization(n - 2);
  return fibonacciMemo[n];
}
// Function to generate all permutations of a string
function permutations(str: string): string[] {
  if (str.length === 1) {
    return [str];
  }

  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const perms = permutations(remainingChars);
    for (const perm of perms) {
      result.push(char + perm);
    }
  }

  return result;
}

// Function to calculate the nth prime number
function nthPrime(n: number): number {
  if (n <= 0) {
    throw new Error("Invalid input. n must be a positive integer.");
  }

  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }

  return num - 1;
}

// Helper function to check if a number is prime
function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to sort an array using quicksort algorithm
function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Function to implement the Sieve of Eratosthenes algorithm to find all primes up to a given limit
function sieveOfEratosthenes(limit: number): number[] {
  const primes: boolean[] = Array(limit + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  const result: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

// Function to generate all subsets of a set
function generateSubsets<T>(set: T[]): T[][] {
  const subsets: T[][] = [[]];

  for (const element of set) {
    const newSubsets = subsets.map((subset) => [...subset, element]);
    subsets.push(...newSubsets);
  }

  return subsets;
}

// Function to implement the binary exponentiation algorithm
function binaryExponentiation(base: number, exponent: number): number {
  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

// Function to perform the Floyd-Warshall algorithm to find all shortest paths in a weighted graph
function floydWarshall(graph: number[][]): number[][] {
  const n = graph.length;
  const distances: number[][] = [...graph];

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (distances[i][k] !== Infinity && distances[k][j] !== Infinity) {
          distances[i][j] = Math.min(
            distances[i][j],
            distances[i][k] + distances[k][j]
          );
        }
      }
    }
  }

  return distances;
}

// Function to find the maximum subarray sum using Kadane's algorithm
function maxSubarraySum(arr: number[]): number {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Function to implement the Knuth-Morris-Pratt (KMP) algorithm for string searching
function kmpSearch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const prefixTable = buildPrefixTable(pattern);

  let j = 0; // Index for text
  let k = 0; // Index for pattern

  while (j < text.length) {
    if (pattern[k] === text[j]) {
      j++;
      k++;
      if (k === pattern.length) {
        result.push(j - k);
        k = prefixTable[k - 1];
      }
    } else {
      if (k !== 0) {
        k = prefixTable[k - 1];
      } else {
        j++;
      }
    }
  }

  return result;
}

// Helper function to build prefix table for KMP algorithm
function buildPrefixTable(pattern: string): number[] {
  const prefixTable: number[] = [0];
  let prefixLength = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      prefixTable[i] = prefixLength;
      i++;
    } else {
      if (prefixLength !== 0) {
        prefixLength = prefixTable[prefixLength - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }

  return prefixTable;
}

// // Function to perform the Bellman-Ford algorithm for finding shortest paths in a graph with negative edge weights
function bellmanFord(graph: number[][], start: number): number[] | null {
  const distances: number[] = Array(graph.length).fill(Infinity);
  distances[start] = 0;

  for (let i = 0; i < graph.length - 1; i++) {
    for (let j = 0; j < graph.length; j++) {
      for (let k = 0; k < graph[j].length; k++) {
        if (distances[j] + graph[j][k] < distances[k]) {
          distances[k] = distances[j] + graph[j][k];
        }
      }
    }
  }

  for (let j = 0; j < graph.length; j++) {
    for (let k = 0; k < graph[j].length; k++) {
      if (distances[j] + graph[j][k] < distances[k]) {
        return null; // Negative cycle detected
      }
    }
  }

  return distances;
}
// // Function to perform the Rabin-Karp algorithm for string searching
function rabinKarpSearch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const prime = 101;
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hashString(pattern, prime);
  let textHash = hashString(text.substring(0, patternLength), prime);

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (
      textHash === patternHash &&
      text.substring(i, i + patternLength) === pattern
    ) {
      result.push(i);
    }
    if (i < textLength - patternLength) {
      textHash = recalculateHash(text, textHash, i, patternLength, prime);
    }
  }

  return result;
}

// Helper function to calculate hash of a string
function hashString(str: string, prime: number): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * Math.pow(prime, i);
  }
  return hash;
}

// Helper function to recalculate hash in Rabin-Karp algorithm
function recalculateHash(
  text: string,
  oldHash: number,
  oldIndex: number,
  patternLength: number,
  prime: number
): number {
  let newHash = oldHash - text.charCodeAt(oldIndex);
  newHash /= prime;
  newHash +=
    text.charCodeAt(oldIndex + patternLength) *
    Math.pow(prime, patternLength - 1);
  return newHash;
}

// Function to find the longest increasing subsequence in an array
function longestIncreasingSubsequence(nums: number[]): number[] {
  const dp: number[] = new Array(nums.length).fill(1);
  let maxLength = 1;
  let endIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        if (dp[i] > maxLength) {
          maxLength = dp[i];
          endIndex = i;
        }
      }
    }
  }

  const longestSubsequence: number[] = [];
  let currentLength = maxLength;
  for (let i = endIndex; i >= 0; i--) {
    if (dp[i] === currentLength) {
      longestSubsequence.unshift(nums[i]);
      currentLength--;
    }
  }

  return longestSubsequence;
}

// Function to perform the Levenshtein distance algorithm for string similarity
function levenshteinDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = new Array(m + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// Function to perform the Kruskal's algorithm for finding minimum spanning tree in a graph
function kruskal(
  graph: Map<string, Map<string, number>>
): Map<string, Map<string, number>> {
  const sortedEdges: [string, string, number][] = [];
  const mst: Map<string, Map<string, number>> = new Map();
  const parent: Map<string, string> = new Map();

  for (const [vertex, neighbors] of graph.entries()) {
    mst.set(vertex, new Map());
    parent.set(vertex, vertex);
    for (const [neighbor, weight] of neighbors.entries()) {
      sortedEdges.push([vertex, neighbor, weight]);
    }
  }

  sortedEdges.sort((a, b) => a[2] - b[2]);

  for (const [source, target, weight] of sortedEdges) {
    const sourceRoot = find(parent, source);
    const targetRoot = find(parent, target);
    if (sourceRoot !== targetRoot) {
      union(parent, sourceRoot, targetRoot);
      mst.get(source)?.set(target, weight);
      mst.get(target)?.set(source, weight);
    }
  }

  return mst;
}

function find(parent: Map<string, string>, vertex: string): string {
  while (parent.get(vertex) !== vertex) {
    vertex = parent.get(vertex) || "";
  }
  return vertex;
}

function union(
  parent: Map<string, string>,
  source: string,
  target: string
): void {
  parent.set(find(parent, source), find(parent, target));
}

function getLowestFScore(
  openList: number[][],
  fScore: Map<string, number>
): number[] {
  let lowestFScore = Infinity;
  let lowestNode: number[] = [];

  for (const node of openList) {
    const score = fScore.get(node.toString()) ?? Infinity;
    if (score < lowestFScore) {
      lowestFScore = score;
      lowestNode = node;
    }
  }

  return lowestNode;
}

function heuristic(node: number[], goal: number[]): number {
  return Math.abs(node[0] - goal[0]) + Math.abs(node[1] - goal[1]);
}

function getNeighbors(grid: number[][], node: number[]): number[][] {
  const neighbors: number[][] = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const [dx, dy] of directions) {
    const x = node[0] + dx;
    const y = node[1] + dy;
    if (
      x >= 0 &&
      x < grid.length &&
      y >= 0 &&
      y < grid[0].length &&
      grid[x][y] !== 1
    ) {
      neighbors.push([x, y]);
    }
  }

  return neighbors;
}

function reconstructPath(
  cameFrom: Map<string, number[]>,
  current: number[]
): number[][] {
  const path: number[][] = [current];

  while (cameFrom.has(current.toString())) {
    current = cameFrom.get(current.toString()) || [];
    path.unshift(current);
  }

  return path;
}

// Function to generate a random maze using Prim's algorithm
function generateRandomMaze(rows: number, cols: number): number[][] {
  const maze: number[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 1)
  );
  const walls: number[][] = [];
  const startRow = Math.floor(Math.random() * rows);
  const startCol = Math.floor(Math.random() * cols);

  maze[startRow][startCol] = 0;
  addWalls(walls, maze, startRow, startCol);

  while (walls.length > 0) {
    const randomIndex = Math.floor(Math.random() * walls.length);
    const [row, col] = walls[randomIndex];
    walls.splice(randomIndex, 1);
    if (maze[row][col] === 1 && countAdjacentWalls(maze, row, col) === 1) {
      maze[row][col] = 0;
      addWalls(walls, maze, row, col);
    }
  }

  return maze;
}

function addWalls(
  walls: number[][],
  maze: number[][],
  row: number,
  col: number
): void {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (
      newRow >= 0 &&
      newRow < maze.length &&
      newCol >= 0 &&
      newCol < maze[0].length &&
      maze[newRow][newCol] === 1
    ) {
      walls.push([newRow, newCol]);
    }
  }
}

function countAdjacentWalls(
  maze: number[][],
  row: number,
  col: number
): number {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let count = 0;
  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (
      newRow >= 0 &&
      newRow < maze.length &&
      newCol >= 0 &&
      newCol < maze[0].length &&
      maze[newRow][newCol] === 1
    ) {
      count++;
    }
  }
  return count;
}
