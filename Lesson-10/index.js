// CÂU 1

console.log('CÂU 1');
function myFunction(arr) {
    return arr.sort((a, b) => a - b);
}
const anotherNumbers = [5, 3, 8, 1, 2];
const sortedAnotherNumbers = myFunction(anotherNumbers);

console.log(sortedAnotherNumbers); // Output: [1, 2, 3, 5, 8]


// CÂU 2

console.log('CÂU 2');
function myFunction2(arr, k) {
    // Loại bỏ các phần tử trùng lặp
    const uniqueArray = [...new Set(arr)];
    
    // Sắp xếp mảng theo thứ tự giảm dần
    uniqueArray.sort((a, b) => b - a);
    
    // Kiểm tra điều kiện k phải <= số lượng phần tử của mảng sau khi loại bỏ phần tử trùng nhau
    if (k <= uniqueArray.length) {
        // Trả về phần tử lớn thứ k
        return uniqueArray[k - 1];
    } else {
        throw new Error('k phải <= số lượng phần tử của mảng sau khi loại bỏ phần tử trùng nhau');
    }
}

const numberCau2 = [1, 3, 3, 5, 6, 6, 8];
const anotherK = 2;
const anotherResult = myFunction2(numberCau2, anotherK);

console.log(anotherResult); // Output: 6

// CÂU 3

console.log('CÂU 3');
function myFunction3(arr) {
    // Tạo một đối tượng để lưu số lần xuất hiện của mỗi số
    const frequency = {};
    
    // Đếm số lần xuất hiện của mỗi số trong mảng
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    // Tìm số có số lần xuất hiện nhiều nhất
    let maxFrequency = 0;
    let maxNumber = null;

    for (const num in frequency) {
        if (frequency[num] > maxFrequency || 
            (frequency[num] === maxFrequency && parseInt(num) > maxNumber)) {
            maxFrequency = frequency[num];
            maxNumber = parseInt(num);
        }
    }

    return maxNumber;
}

// Ví dụ sử dụng
const numbers = [1, 2, 3, 2, 2, 1, 4, 5, 10];
const result = myFunction3(numbers);

console.log(result); // Output: 2

// CÂU 4

console.log('CÂU 4');
function splitWords(str) {
    return str.split(' ');
}
const sentence = "This is a test";
const wordsArray = splitWords(sentence);

console.log(wordsArray); // Output: ["This", "is", "a", "test"]

// CÂU 5

console.log('CÂU 5');
function sumNumbers(obj) {
    let sum = 0;
    
    // Duyệt qua từng thuộc tính của đối tượng
    for (let key in obj) {
        // Kiểm tra nếu giá trị của thuộc tính là số
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    
    return sum;
}

// Đối tượng dữ liệu
const data = { a: 1, b: 'hello', c: 3, d: 'world' };

// Tính tổng các giá trị là số trong đối tượng
const totalSum = sumNumbers(data);

console.log(totalSum); // Output: 4

