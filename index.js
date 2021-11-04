setInterval(() => {
  const time = document.getElementById("time");
  let date = new Date();
  let hours = date.getHours();
  let minutss = date.getMinutes();
  let second = date.getSeconds();
  let day_night = "AM"

  if (hours > 12) {
    hours = hours - 12;
    day_night = "PM"
  }
  if (hours === 0) {
    hours = 12;
  }
  if (minutss < 10) {
    minutss = "0" + minutss;
  }

  if (second < 10) {
    second = "0" + second;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  time.textContent = hours + ":" + minutss + ":" + second + " " + day_night;
});
