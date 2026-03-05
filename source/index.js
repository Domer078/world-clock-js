function updateTime() {
  let londonElement = document.querySelector("#London");
  if (londonElement) {
    let londonDateElement = document.querySelector(".date");
    let londonTimeElement = document.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<strong>]A[</strong>]",
    );
  }

  let monacoElement = document.querySelector("#Monaco");
  if (monacoElement) {
    let monacoDate = monacoElement.querySelector(".date");
    let monacoTime = monacoElement.querySelector(".time");
    let monacoCurrentTime = moment().tz("Europe/Monaco");

    monacoDate.innerHTML = monacoCurrentTime.format("MMMM Do YYYY");
    monacoTime.innerHTML = monacoCurrentTime.format(
      "h:mm:ss [<strong>]A[</strong>]",
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
