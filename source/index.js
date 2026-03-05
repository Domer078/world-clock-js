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

    let melbourneElement = document.querySelector("#Melbourne");
    if (melbourneElement) {
      let melbourneDateElement = document.querySelector("#date");
      let melbourneTimeElement = document.querySelector("#time");
      let melbourneTime = moment().tz("Australia/Melbourne");

      melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
      melbourneTimeElement.innerHTML = melbourneTime.format(
        "h:mm:ss [<strong>]A[</strong>",
      );
    }
  }
}
updateTime();
setInterval(updateTime, 1000);
