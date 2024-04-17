fetch("http://localhost:3000/booked/results")
  .then((response) => response.json())
  .then((data) => console.log(data));
