function validateForm() {
	let form = document.forms["input-form"];
	var errorMessages = document.querySelectorAll("label.wrong-input");
	var res = true;
	const fullnamePattern = /[\wа-яА-ЯІ]+\s[\wа-яА-ЯІ].[\wа-яА-ЯІ]./
	if (!fullnamePattern.test(form['fullname'].value)) {
		errorMessages[0].hidden = false;
		res = false;
	}
	else {
		errorMessages[0].hidden = true;
	}

	const telephonePattern = /\d{3}-\d{3}-\d{2}-\d{2}/
	if (!telephonePattern.test(form['telephone'].value)) {
		errorMessages[1].hidden = false;
		res = false;
	}
	else {
		errorMessages[1].hidden = true;
	}

	const idCardPattern = /[\wа-яА-ЯІ]{2}\s№\d{6}/
	if (!idCardPattern.test(form['id-card'].value)) {
		errorMessages[2].hidden = false;
		res = false;
	}
	else {
		errorMessages[2].hidden = true;
	}

	const departmentPattern = /[\wа-яА-ЯІ]{4}/
	if (!departmentPattern.test(form['department'].value)) {
		errorMessages[3].hidden = false;
		res = false;
	}
	else {
		errorMessages[3].hidden = true;
	}

	const datePattern = /\d{2}.\d{2}.\d{4}/
	if (!datePattern.test(form['date'].value)) {
		errorMessages[4].hidden = false;
		res = false;
	}
	else {
		errorMessages[4].hidden = true;
	}

	if (res) {
		var info = document.getElementById("data");
		var oldUl = document.getElementById("data-ul");

		var ul = document.createElement("ul");
		ul.setAttribute("id", "data-ul");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Full Name: " + form['fullname'].value));
		ul.appendChild(li);
		li.appendChild(document.createTextNode("Telephone: " + form['telephone'].value));
		ul.appendChild(li);
		li = document.createElement("li");
		li.appendChild(document.createTextNode("Id-card: " + form['id-card'].value));
		ul.appendChild(li);
		li = document.createElement("li");
		li.appendChild(document.createTextNode("Department: " + form['department'].value));
		ul.appendChild(li);
		li = document.createElement("li");
		li.appendChild(document.createTextNode("Date: " + form['date'].value));
		ul.appendChild(li);
		li = document.createElement("li");
		info.replaceChild(ul, oldUl);
	}
	else
		return res;
}
