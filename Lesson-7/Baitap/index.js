// BAI TAP 1
console.log('Câu 1')

let length = 5;
let width = 4;
let area = length * width;
let perimeter = (length + width) * 2;

console.log('Diện tích hình chữ nhật là ' + area);
console.log('Chu vi hình chữ nhật là ' + perimeter);


// BAI TAP 2
console.log('Câu 2');

let S = 12345;
let gio = (S - S % 3600)/3600;
let phut = ((S % 3600) - (S % 3600) % 60) / 60;
let giay = S - phut * 60 - gio * 3600;

console.log('Cho ví dụ S = 12345 giây')
console.log('Sau khi chuyển đổi được: ' + gio + ' giờ ' + phut + " phút " + giay + ' giây');

// BAI TAP 3
console.log('Câu 3')

let luyThua = 2;
let coSo = 5;
let ketQua = coSo ** luyThua;

console.log('Lũy Thừa = ' + luyThua);
console.log('Cơ Số = ' + coSo);
console.log('Kết quả = ' + ketQua);


// BAI TAP 4
console.log('Câu 4');

let so1 = 53;
let so2 = 34;
let so3 = 105;
let trungBinh = (so1 + so2 +so3) / 3;

console.log('Cho 3 số bất kì: ' + so1 + ' ' + so2 + ' ' + so3);
console.log('Trung bình của 3 số là: ' + trungBinh);


// BAI TAP 5
console.log('Câu 5');

let xA = 12;
let yA = 42;
let xB = 53;
let yB = 95;
let khoangCach = Math.sqrt((xB - xA) ** 2 + (yB - yA) ** 2);

console.log('Cho tọa độ 2 điểm A và B như sau:');
console.log("A(" + xA + ';' + yA +') ' + 'B(' + xB + ';' + yB + ')');
console.log('Khoảng cách giữa 2 điểm A và B là: ' + khoangCach);

// BAI TAP 6
console.log('Câu 6');

let soThu1 = 43;
let soThu2 = 95;
let soThu3 = 12;

console.log('Cho 3 số để so sánh: ' + soThu1 + ';' + soThu2 + ';' + soThu3);
console.log(soThu1 > soThu2 > soThu3); 

// BAI TAP 7
console.log('Câu 7');

let giaTri1 = 5;
let giaTri2 = 5;

console.log(giaTri1 == giaTri2)

// BAI TAP 8
console.log('Câu 8')

const number = parseFloat(prompt("Nhập để kiểm tra số dương:"));
const isPositive = number > 0;
console.log(number + " " + isPositive);

//BAI TAP 9
console.log('Câu 9')

const year = parseInt(prompt("Nhập số năm để biết năm nhuận hay không:"));
const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
console.log(year + " " + isLeapYear);

//BAI TAP 10
console.log('Câu10')

const hour1 = parseInt(prompt("Nhập giờ thứ 1:"));
const minute1 = parseInt(prompt("Nhập số phút thứ 1:"));

const hour2 = parseInt(prompt("Nhập giờ thứ 2:"));
const minute2 = parseInt(prompt("Nhập số phút thứ 2:"));

const time1InMinutes = hour1 * 60 + minute1;
const time2InMinutes = hour2 * 60 + minute2;

const isFirstTimeEarlier = time1InMinutes < time2InMinutes;

console.log("Thời gian " + hour1 + 'h' + minute1 + " lớn hơn " + hour2 + 'h' + minute2);
