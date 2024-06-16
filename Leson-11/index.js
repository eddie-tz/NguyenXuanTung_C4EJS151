// Chọn thẻ h1 dựa trên class 'titleH1'
const h1Element = document.querySelector('.titleH1');

// Thay đổi nội dung của thẻ h1
h1Element.textContent = 'Đây là nội dung';

// Thay đổi thuộc tính style
h1Element.style.color = 'red';
h1Element.style.backgroundColor = 'blue';

// Click để thay đổi trạng thái ban đầu
const btnClick = document.querySelector('.btnClick');
let isChanged = false;
btnClick.addEventListener('click', function () {
    if (!isChanged) {
        h1Element.style.color = 'red';
        h1Element.style.backgroundColor = 'blue';
        isChanged = true;
    } else {
        h1Element.style.color = 'black';
        h1Element.style.backgroundColor = 'white';
        isChanged = false;
    }
});



// Lấy tham chiếu đến các phần tử DOM cần thao tác
const textInput = document.getElementById('textInput');
const showCheckboxBtn = document.getElementById('showCheckboxBtn');
const checkboxContainer = document.getElementById('checkboxContainer');

// Xử lý sự kiện click cho button
showCheckboxBtn.addEventListener('click', function () {
    // Lấy nội dung từ input
    const inputText = textInput.value.trim();

    // Nếu input không rỗng
    if (inputText !== '') {
        // Tạo phần tử checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkboxId';
        // Tạo nhãn cho checkbox
        const label = document.createElement('label');
        label.setAttribute('for', 'checkboxId');
        label.textContent = inputText;

        // Thêm checkbox và nhãn vào container
        checkboxContainer.innerHTML = ''; // Xóa bỏ nội dung cũ (nếu có)
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
    }
});
