function createTable() {
	var table = document.createElement("table");

	let tdArr = [];
	let trArr = [];
	let rows = 6;
	let columns = 6;

	// creating two-dimensional array
	for (let i = 0; i < rows; i++) {
		tdArr[i] = document.createElement('td');
		trArr[i] = [];
		for (let j = 0; j < columns; j++) {
			trArr[i][j] = document.createElement('tr');
			trArr[i][j].setAttribute("class", "tr");
			trArr[i][j].appendChild(document.createTextNode(rows * i + j + 1));
			tdArr[i].appendChild(trArr[i][j])
		}
		table.appendChild(tdArr[i]);
	}


	// trArr[0][3].setAttribute("data-jscolor", "{ onChange: 'update(this, this)' , preset: 'dark', closeButton: true, closeText: 'OK' }");  
	trArr[0][2].setAttribute("class", "variant-td");
	trArr[0][2].onmouseover = function () {
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		trArr[0][2].style.backgroundColor = "#" + randomColor;
	}

	var hueb = new Huebee(trArr[0][2], {
		setText: false
	})

	trArr[0][2].ondblclick = function () {
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);

		for (let i = 0; i < rows; i++) {
			trArr[i][i].style.backgroundColor = "#" + randomColor;

		}
	}

	var div = document.getElementById("table-div");
	div.appendChild(table);
}


createTable();