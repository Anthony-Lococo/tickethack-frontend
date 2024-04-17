fetch("https://tickethack-backend-three-orcin.vercel.app/booked/results")
  .then((response) => response.json())
  .then((data) => {
    for (const value of data.message) {
      let newDate = new Date(value.travel.date);
      let hour = newDate.getHours();
      let minute = newDate.getMinutes();
      console.log(minute);
      if (minute < 10) {
        minute === "0" + minute;
      }
      const nowDate = new Date();
      const time = Math.floor((nowDate - newDate) / 6000000);

      document.querySelector(".insert").innerHTML += `<div class="allTrajets">
        <div class="travel">
          ${value.travel.departure} > ${value.travel.arrival}
        </div>
        <div>
          ${hour}:${minute}
        </div>
        <div>${value.travel.price}€</div>
        <div>Departure in ${time} hours</div>
      `;
    }
  });
