// 1. getAvarage([1,2,3]) => 2
function getAvarage(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return Math.floor(sum / arr.length);
}
console.log(getAvarage([1, 2, 3])); // 2

// 2. invert([1,2,3]) => [-1,-2,-3]
function invert(arr) {
    return arr.map(num => -num);
}
console.log(invert([1, 2, 3])); // [-1,-2,-3]

// 3. getBonus(500, true) => 5000
function getBonus(salary, isBonus) {
    return isBonus ? salary * 10 : salary;
}
console.log(getBonus(500, true)); // 5000
console.log(getBonus(1000, false)); // 1000

// 4. solution("drow") => "word"
function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution("drow")); // "word"

// 5. enough(10, 5, 5) => 0
function enough(cap, on, wait) {
    return Math.max(0, on + wait - cap);
}
console.log(enough(10, 5, 5)); // 0
console.log(enough(12, 5, 10)); // 3

// 6. formatMoney(39.99) => "$39.99"
function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}
console.log(formatMoney(39.99)); // "$39.99"
console.log(formatMoney(3)); // "$3.00"

// 7. position("a") => 1
function position(letter) {
    return letter.toLowerCase().charCodeAt(0) - 96;
}
console.log(position("a")); // 1
console.log(position("z")); // 26
console.log(position("e")); // 5
