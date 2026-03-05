function updateTime() {
  let londonElement = document.querySelector("#London");
  if (londonElement) {
    let londonDateElement = document.querySelector("#date");
    let londonTimeElement = document.querySelector("#time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<strong>]A[</strong>]",
    );
  }

  let torontoElement = document.querySelector("#Toronto");
  if (torontoElement) {
    let torontoDateElement = document.querySelector("#date");
    let torontoTimeElement = document.querySelector("#time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format(
      "h:mm:ss [<strong>]A[</strong>]",
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
