let userAge = +prompt("введите свой возраст");
let creditLimit = 0;
    if (userAge < 18) {
        alert("Мы не можем выдать вам кредит");
    } else if (userAge >= 18 && userAge <= 21) {
        creditLimit = 50000;
    } else if (userAge >= 22 && userAge <= 35) {
        creditLimit = 400000;
    } else if (userAge >= 36 && userAge <= 65) {
        creditLimit = 1000000;
    } else {
        alert("вы ввели некорректный возраст");
    }
    switch (creditLimit) {
        case 50000:
            result = prompt (`Мы можем выдать максимум ${creditLimit}\nВведите сумму кратную 1000`);
            if  (result % 1000 === 0 && result <= creditLimit) {
                alert(`Вам одобрен кредит ${result}`);
            } else {
                if (result < creditLimit) {
                alert(`Вы ввели значение не кратное 1000. Можем выдать только ${Math.floor(result/1000) * 1000}`);
                } else {
                alert(`Вы ввели большее значение, чем ${creditLimit}\nПерезагрузите страницу и попробуйте ещё раз`);
            }
            }
            break;
        case 400000:
            result = prompt (`Мы можем выдать максимум ${creditLimit}\nВведите сумму кратную 1000`);
            if  (result % 1000 === 0 && result <= creditLimit) {
                alert(`Вам одобрен кредит ${result}`);
            } else {
                if (result < creditLimit) {
                alert(`Вы ввели значение не кратное 1000. Можем выдать только ${Math.floor(result/1000) * 1000}`);
                } else {
                alert(`Вы ввели большее значение, чем ${creditLimit}\nПерезагрузите страницу и попробуйте ещё раз`);
            }
            }
            break;
        case 1000000:
            result = prompt (`Мы можем выдать максимум ${creditLimit}\nВведите сумму кратную 1000`);
            if  (result % 1000 === 0 && result <= creditLimit) {
                alert(`Вам одобрен кредит ${result}`);
            } else {
                if (result < creditLimit) {
                alert(`Вы ввели значение не кратное 1000. Можем выдать только ${Math.floor(result/1000) * 1000}`);
                } else {
                alert(`Вы ввели большее значение, чем ${creditLimit}\nПерезагрузите страницу и попробуйте ещё раз`);
            }
            }
            break;
        default:
            alert("вы ввели некорректный возраст");
    }