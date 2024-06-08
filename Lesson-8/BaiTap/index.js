// CÂU 1:
console.log('Cau 1');
let totalSum = 0;

for (let i = 1; i <= 100; i++) {
    totalSum += i;
}

console.log("Tổng các số từ 1 đến 100 là:", totalSum);

//CÂU 2:
console.log('Câu 2');

for (let i = 0; i <= 100; i++) {
    if (i % 3 ==0 && i % 5 ==0) {
        console.log(i);
    }
}