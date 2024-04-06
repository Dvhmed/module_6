let userName = prompt("введите свое имя");
let yearOfBirth = prompt("введите год рождения");
const currentYear = 2024;
    if (+yearOfBirth >= 1900 && +yearOfBirth <= currentYear) {
        alert(`${userName}: ${currentYear - +yearOfBirth}`);
    } else if (yearOfBirth != +yearOfBirth) {
        alert("Год должен быть числом");
    } else {
        alert("вы ввели некорректный год рождения");
    }