document.querySelector("#search").addEventListener("click", function () {
  let departure = document.querySelector("#departure").value;
  let arrival = document.querySelector("#arrival").value;
  let date = document.querySelector("#date").value;

  fetch(
    `http://localhost:3000/trajets/search?departure=${departure}&arrival=${arrival}&date=${date}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   const container2 = document.querySelector("#block2");

      //   container2.innerHTML = "";

      //   for (const item of data) {
      //     const newItem = document.createElement("div");
      //     newItem.textContent = item;
      //     container2.appendChild(newItem);
    });
});
