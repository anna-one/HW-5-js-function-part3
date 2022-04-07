console.log("--------#4");

function numbers(a, b) {
  if (a > b) {
    return;
  }

  console.log(a);

  numbers(a + 1, b);
}

numbers(1, 9);

console.log("--------#5");

const dateElement = document.getElementById("time");

setInterval(() => {
  let now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds();

  dateElement.innerText = hour + ":" + minute + ":" + second;
}, 1000);
