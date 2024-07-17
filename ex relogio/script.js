const hourHnad = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

function setRotation(element, rotationPercentage) {
    element.style.setProperty("--rotation", rotationPercentage * 360);
}

function setClock() {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercetage = currentDate.getMinutes() / 60;
  const hoursPercentage = currentDate.getHours() / 12;

  setRotation(secondsHand,secondsPercentage);
  setRotation(minutesHand, minutesPercetage);
  setRotation(hoursHand, hoursPercentage);
};
setClock();

setInterval(setClock, 1000);