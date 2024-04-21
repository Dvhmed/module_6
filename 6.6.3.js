const number = +prompt("Введите число");

const arr = [];

if (!isNaN(number)) {
    for (let i = 0; i <= number; i += 1) {
        arr.push(i);
    }
  
} else {
    console.log("Вы ввели не число!");
  
  }


console.log(arr);