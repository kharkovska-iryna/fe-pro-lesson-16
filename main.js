//1. Проверить, является ли первый символ строки прописным или нет

function upperCase(string) {
	let regexp = /[A-Z]/;
	if (regexp.test(string)) {
		console.log("String's first character is uppercase")
	} else {
        console.log("String's first character is not uppercase")
    }
};
upperCase('Abcd'); // String's first character is uppercase
upperCase('abcd'); // String's first character is not uppercase


//2. Поиск даты в строке

function isDateString(string) {
    let regexp = /[0-3]\d([\/.-])[0-1]\d([\/.-])\d{4}/g;
    if (regexp.test(string)) {
        console.log(true)
    } else {
        console.log(false)
    };
}

console.log(isDateString("01/01/2015")); // true
console.log(isDateString("32/01/2015")); // false


// 3.Написать свою версию trim функции (обрезать пробелы вначале и в конце строки) используя регулярные выражения
// let string3 = " ololo ghj jjjj    jjj jjjj "
// console.log(string3.length);
// console.log(string3.replace(/^\s+|\s+$/g, ""))


function trim(str) {
    // console.log(str.length);
    let newStr = "";
    let regexp = /^\s+|\s+$/g;
    return  newStr = str.replace(regexp, "");
}

console.log(trim(' ololo ')); // ololo

// 4. Подсчитать количество гласных (a,e,i,o,u,y) в заданной строке

function vowelCount(str) {
    let regexp = /[aouei]/gi;
    let string = str.match(regexp);
    return string === null ? 0 : string.length;
}


console.log(vowelCount('The quick brown fox jumps over the lazy dog')); 

// 5. Проверьте, является ли заданное значение почтовым индексом США или нет.

function isUSZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
     
     if (regexp.test(str)) {
         return true;
       }
     else {
         return false;
       }
};

console.log(isUSZipCode("03201-2150")); 
console.log(isUSZipCode("7892"));
