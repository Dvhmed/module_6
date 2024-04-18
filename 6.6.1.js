
// const word = prompt('введите слово').replace(/\s+/g, '').toLowerCase();
const word = 'А роза упала на лапу Азора';
let leftToRight = word.replace(/\s+/g, '').toLowerCase();
let rightToLeft = '';
for (let i = leftToRight.length - 1; i >= 0; i -= 1) {
    rightToLeft += leftToRight[i];
}

if (leftToRight === rightToLeft) {
    // alert(`Слово <${word}> является палиндромом`);
    console.log(`Слово <${word}> является палиндромом`);
}

else {
    // alert(`Слово <${word}> не является палиндромом`);
    console.log(`Слово <${word}> не является палиндромом`);
}