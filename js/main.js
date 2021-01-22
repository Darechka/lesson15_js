// 1 - Создание переменных со значениями

var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
    first: 'First Name', 
    last: 'Last Name'
};

// 2 - Форматирование числа в переменной myNum

decimal2 = myNum.toFixed(2);


// 3 - Префиксный и постфиксный инкремент и декремент 

var i = 100;
console.log(i++); // 100
console.log(i++); // 101
console.log(++i); // 103
console.log(++i); // 104
console.log(--i); // 103
console.log(i--); // 103
console.log(--i); // 101
console.log(i); // 101

// 4 - Операторы +-, -=, *=, /=, %=

var myTest = 20; 
myTest += myNum; // myTest = myTest + myNum --> 30
console.log(myTest);
myTest -= myNum; // myTest = myTest - myNum --> 20
console.log(myTest);
myTest *= 20; // myTest = myTest * 20 --> 400
console.log(myTest);
myTest /= 4; // myTest = myTest / 4 --> 100
console.log(myTest);
myTest %= 3; // myTest = myTest % 3 --> 1
console.log(myTest);

// 5 - Объект Math

myPi = Math.PI; 
console.log(myPi);
myRound = Math.round(89.279); 
console.log(myRound);
myRandom = Math.random() * 10; 
console.log(myRandom);
myPow = Math.pow(3, 5); 
console.log(myPow);

// 6 - Создание объекта и длина строки

var strObj = {
   str: 'Мама мыла раму, рама мыла маму'
};

strObj.length = strObj.str.length;

// 7 - Поиск элемента текста в строке

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

// 8 - Переименование подстроки

var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
console.log(strReplace);

// 9 - Преобразование в верхний и нижний регистры

console.log(strObj.str.toUpperCase());
console.log(strObj.str.toLowerCase());



