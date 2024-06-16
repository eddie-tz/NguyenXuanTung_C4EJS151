// CÂU 1
console.log('CÂU 1')
const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === targetCounting) {
    count++;
  }
}

console.log(count); // Output: 4


// CÂU 2
console.log('CÂU 2')

const numbers2 = [5, 2, 9, 3, 7, 11, 8];
const maxNumber = numbers2.reduce((max, current) => (current > max ? current : max), numbers2[0]);
console.log(maxNumber); // Output: 11

// Cau 3
console.log('CÂU 3')

const array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


// Cau 4
console.log('CÂU 4')
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(duplicatesArray)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Cau 5
console.log('CÂU 5')
const students = [
    { name: "Alice", age: 20, grades: [80, 85, 90] },
    { name: "Bob", age: 21, grades: [75, 88, 95] }
];

// Hàm tính trung bình của một mảng số
const average = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

// Tính điểm trung bình cho từng học sinh
students.forEach(student => {
    student.averageGrade = average(student.grades);
});

console.log(students);
const overallAverage = average(students.map(student => student.averageGrade));

console.log(overallAverage); // Output: 85.5

// Cau 6
console.log('CÂU 6')


const products = [
    { name: "Áo", price: 20 },
    { name: "Quần", price: 30 },
    { name: "Giày", price: 50 }
];

const cheapestProduct = products.reduce((cheapest, product) => {
    return (product.price < cheapest.price) ? product : cheapest;
}, products[0]);

console.log(cheapestProduct); // Output: { name: "Áo", price: 20 }
