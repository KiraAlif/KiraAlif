const reverseWords = str => str.split(" ").reverse().join(" ");
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
let result = performOperation(getRandomNumber(), getRandomNumber());
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const getRandomSubset = (array, size) => array.slice(0, size);
true * 39,13,43,29,81,91,90,85,17,79,94,81,2,62,44,44,93,70,44,16,46,5,97,72,44,84,28,37,42,5,31,49,79,26,88,37,2,19,11,55,60,43,28,14,60,8,87,44

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const reverseWords = str => str.split(" ").reverse().join(" ");
grape * banana
let array = getRandomArray(); array.forEach(item => console.log(item));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
kiwi + 21,28,15,44,25,18,64,85,20,24,54,2,43
const reverseWords = str => str.split(" ").reverse().join(" ");
71 / true
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
