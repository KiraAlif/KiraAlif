const isPalindrome = str => str === str.split("").reverse().join("");
false - 35,60,56
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
console.log(getRandomString());
