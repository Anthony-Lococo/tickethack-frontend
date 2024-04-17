document.querySelector("#searchBtn").addEventListener("click", function () {
  let departure = document.querySelector("#departure").value;
  let arrival = document.querySelector("#arrival").value;
  let date = document.querySelector("#date").value;

  fetch(
    `http://localhost:3000/trajets/search?departure=${departure}&arrival=${arrival}&date=${date}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.result === false) {
        document.querySelector("#train").src = "./assets/images/notfound.png";
        document.querySelector("#text").textContent = "No trip found";
      } else {
        document.querySelector("imageTrain").style.display = "none";
        for (const value of data.message) {
          let newHour = new Date(value.date).getHours();
          let newMinutes = new Date(value.date).getMinutes();
          if (newMinutes < 10) {
            newMinutes = "0" + newMinutes;
          }

          document.querySelector(
            ".block2"
          ).innerHTML += `<div class ="total"><div class="price"><div class="revealSearch">
            ${value.departure} > ${value.arrival}&nbsp;&nbsp;&nbsp;${newHour}:${newMinutes}&nbsp;&nbsp;&nbsp;<strong>${value.price}€</strong>
          </div></div><button id="bookCart">Book</button></div>`;
          for (let i = 0; i < document.querySelectorAll(".total").length; i++) {
            let newTravel = {
              id: value._id,
            };
            document
              .querySelectorAll(".total")
              [i].addEventListener("click", function () {
                fetch("http://localhost:3000/cart", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(newTravel),
                })
                  .then((response) => response.json())
                  .then((data) => console.log(data));
              });
          }
        }
      }
    });
});

for (let i = 0; i < document.querySelectorAll(".total").length; i++) {
  document.querySelectorAll(".total")[i].addEventListener("click", function () {
    fetch(
      `http://localhost:3000/trajets/search?departure=${departure}&arrival=${arrival}&date=${date}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}
