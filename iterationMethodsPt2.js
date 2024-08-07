const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

let result = temperatures.filter((tem) => {
  return tem >= 25;
});

let result1 = temperatures.filter((tem) => {
  return tem < 20;
});

let result2 = temperatures.map((tem) => {
  return (tem * 9) / 5 + 32;
});

let result3 = temperatures.map((tem) => {
  if (tem >= 25) {
    return "warm";
  } else if (tem >= 20 && tem <= 24) {
    return "mild";
  } else if (tem < 20) {
    return "cool";
  }
});

let max = 0;

temperatures.forEach((tem) => {
  if (tem > max) {
    max = tem;
  }
});

let max1 = temperatures[0];

temperatures.forEach((tem) => {
  if (tem < max1) {
    max1 = tem;
  }
});

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(max);
console.log(max1);
