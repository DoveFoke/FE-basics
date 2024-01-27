function getData() {
	const parent = document.getElementById("result");
	const child = document.createElement("div");
 
	fetch('https://randomuser.me/api', {
	  headers: {
		 'Accept': 'application/json',
	  }
	})
	  .then(response => {
		 if (!response.ok) {
			throw new Error('Network response was not ok');
		 }
		 return response.json();
	  })
	  .then(value => {
		 console.log(value);
 
		 const img = document.createElement("img");
		 img.src = value.results[0].picture.large;
		 img.width = 250;
		 img.height = 250;
		 child.appendChild(img);
 
		 const city = document.createElement("p");
		 city.appendChild(document.createTextNode("City: " + value.results[0].location.city));
		 child.appendChild(city);
 
		 const country = document.createElement("p");
		 country.appendChild(document.createTextNode("Country: " + value.results[0].location.country));
		 child.appendChild(country);

		 const postcode = document.createElement("p");
		 postcode.appendChild(document.createTextNode("Postcode: " + value.results[0].location.postcode));
		 child.appendChild(postcode);

		 const email = document.createElement("p");
		 email.appendChild(document.createTextNode("Email: " + value.results[0].email));
		 child.appendChild(email);
 
		 parent.appendChild(child);
	  })
	  .catch(error => {
		 console.error('Fetch error:', error);
	  });
 }
 