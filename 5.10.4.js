let userName = prompt("введите свое имя");
let yearOfBirth = +prompt("введите год рождения");
const currentYear = 2024;
let age = currentYear - +yearOfBirth;
result = age % 10;
    if (yearOfBirth != +yearOfBirth || yearOfBirth <= 1900 || yearOfBirth >= currentYear) {
        alert("вы ввели некорректный год рождения, пустое имя или год не число");
    } else 
        switch (result) {
            case 1:
                alert(`${userName}: ${age} год`);
                break;
            case 2:
                alert(`${userName}: ${age} года`);
                break;
            case 3:
                alert(`${userName}: ${age} года`);
                break;
            case 4:
                alert(`${userName}: ${age} года`);
                break;
            default:
                alert(`${userName}: ${age} лет`);
}