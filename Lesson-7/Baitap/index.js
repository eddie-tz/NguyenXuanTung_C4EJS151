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

// BAO TAP 7
console.log('Câu 7');
