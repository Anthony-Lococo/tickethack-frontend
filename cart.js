fetch("http://localhost:3000/cart/select")
  .then((response) => response.json())
  .then((data) => console.log(data.message));

fetch("http://localhost:3000/cart/delete")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("http://localhost:3000/booked", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(),
});

fetch("htttp://localhost:3000/cart/deletemany")
  .then((response) => response.json())
  .then((data) => console.log(data));
