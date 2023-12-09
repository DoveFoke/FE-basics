// Завдання №1
function validateForm() {
    var pibPattern = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}\s[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]\.[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]\.$/;
    var variantPattern = /^\d{2}$/;
    var groupPattern = /^[А-Яа-яЁёІіЇїЄєҐґ]{2}-\d{2}$/;
    var phonePattern = /^\(\d{2,3}\)-\d{3}-\d{2}-\d{2}$/;
    var idCardPattern = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2} №\d+$/;

    var pibInput = document.getElementById('pib');
    var variantInput = document.getElementById('variant');
    var groupInput = document.getElementById('group');
    var phoneInput = document.getElementById('phone');
    var idCardInput = document.getElementById('idCard');

    var result = document.getElementById('result');

    var isValid =
        pibPattern.test(pibInput.value) &&
        variantPattern.test(variantInput.value) &&
        groupPattern.test(groupInput.value) &&
        phonePattern.test(phoneInput.value) &&
        idCardPattern.test(idCardInput.value);

    if (isValid) {
        result.innerHTML = '';
        var ul = document.createElement('ul');
        ul.innerHTML = `
            <li>ПІБ: ${pibInput.value}</li>
            <li>Варіант: ${variantInput.value}</li>
            <li>Група: ${groupInput.value}</li>
            <li>Телефон: ${phoneInput.value}</li>
            <li>ID-Card: ${idCardInput.value}</li>
        `;
        result.appendChild(ul);
    } else {
        result.innerHTML = '<p class="error-message">Інформація введена невірно, перевірте та виправте ваші дані.</p>';
        if (!pibPattern.test(pibInput.value)) pibInput.classList.add('error');
        else pibInput.classList.remove('error');

        if (!variantPattern.test(variantInput.value)) variantInput.classList.add('error');
        else variantInput.classList.remove('error');

        if (!groupPattern.test(groupInput.value)) groupInput.classList.add('error');
        else groupInput.classList.remove('error');

        if (!phonePattern.test(phoneInput.value)) phoneInput.classList.add('error');
        else phoneInput.classList.remove('error');

        if (!idCardPattern.test(idCardInput.value)) idCardInput.classList.add('error');
        else idCardInput.classList.remove('error');
    }
}

//Завдання №2
document.addEventListener("DOMContentLoaded", function () {
    var colorTable = document.getElementById("colorTable");
    var colorPicker = document.getElementById("colorPicker");
    var cells = [];

    for (var i = 0; i < 6; i++) {
        var row = colorTable.insertRow();
        for (var j = 0; j < 6; j++) {
          var cell = row.insertCell();
          cell.textContent = i * 6 + j + 1;
          cells.push(cell);
        }
    }

    function getRandomColor() {
        var varters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += varters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    cells[4].addEventListener("mouseover", function () {
        cells[4].style.backgroundColor = getRandomColor();
    });
    
    cells[4].addEventListener("click", function () {
        cells[4].style.backgroundColor = colorPicker.value;
    });
    
    cells[4].addEventListener("dblclick", function () {
        var selectedColor = colorPicker.value;
        cells.forEach(function (cell, index) {
            if (index !== 4) {
                cell.style.backgroundColor = selectedColor;
            }
        });
    });
});