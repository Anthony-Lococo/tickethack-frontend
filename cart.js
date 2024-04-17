fetch("https://tickethack-backend-three-orcin.vercel.app/cart/select")
  .then((response) => response.json())
  .then((data) => {
    let sum = 0;
    for (const trip of data.message) {
      console.log(trip._id);
      let newDate = new Date(trip.travel.date);
      let newHour = newDate.getHours();
      let newMin = newDate.getMinutes();
      let newDate2 = `${newHour} : ${newMin}`;
      document.querySelector("#ajout").innerHTML += `
      <div class="trip" id="${trip._id}">
            <span>${trip.travel.departure} > ${trip.travel.arrival}</span>
            <span>${newDate2}</span>
            <span>${trip.travel.price}€</span>
            <button class="delete">X</button>
          </div>`;
      // console.log(trip.travel.arrival);

      sum += trip.travel.price;

      for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
        document
          .querySelectorAll(".delete")
          [i].addEventListener("click", function () {
            fetch(
              `https://tickethack-backend-three-orcin.vercel.app/cart/delete?id=${trip._id}`,
              {
                method: "DELETE",
              }
            )
              .then((response) => response.json())
              .then((data) =>
                console.log(data)(
                  (document.getElementById(`${trip._id}`).style.display =
                    "none")
                )
              );
          });
      }
    }
    document.querySelector(".total").textContent = `Total : ${sum} €`;
    document
      .querySelector("#purchaseBtn")
      .addEventListener("click", function () {
        for (const trip of data.message) {
          let purchase = { travel: trip.travel._id };
          console.log(trip.travel._id);
          fetch("https://tickethack-backend-three-orcin.vercel.app/booked", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchase),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
        fetch(
          "https://tickethack-backend-three-orcin.vercel.app/cart/deletemany",
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((data) => window.location.assign("bookings.html"));
      });
  });
