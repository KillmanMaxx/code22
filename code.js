// Номер 1
// let lene = document.querySelector('#lene1');
// let lene1 = document.querySelector('#lene');
// lene.addEventListener('blur', function() { 
//   let lene2 = lene.value;
//   lene1.textContent += ' ' + lene2;
//   console.log(lene1.textContent);
// });

// // Номер 2
document.querySelector('#lene').addEventListener('click', function() {
    let input1 = parseInt(document.querySelector('#input1').value);
    let input2 = parseInt(document.querySelector('#input2').value);
    let input3 = parseInt(document.querySelector('#input3').value);
    let sum = (isNaN(input1) ? 0 : input1) + (isNaN(input2) ? 0 : input2) + (isNaN(input3) ? 0 : input3);
    let result = document.querySelector('#result');
    result.textContent = `${sum}`;
    console.log(`${sum}`);
});

// // Номер 3
// document.getElementById('lene').addEventListener('blur', function() {
//   let input = this.value;
//   let sum = 0;
//   if (!isNaN(input)) {
//       let input1 = input.toString();
//       for (let i = 0; i < input1.length; i++) {
//           sum += parseInt(input1[i]);
//       }
//   }
//   console.log(`Сумма цифр числа: ${sum}`);
// });

// // Номер 4
// document.getElementById('lene').addEventListener('blur', function() {
//   let input = this.value;
//   let number = input.split(',').map(Number);
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//       sum += number[i];
//   }
//   let average = number.length > 0 ? sum / number.length : 0;
//   console.log(`Среднее арифметическое: ${average}`);
// });

// // Номер 5
// document.getElementById('lene').addEventListener('blur', function() {
//   let lene = this.value.split(' ');
//   if (lene.length >= 3) {
//       document.getleneentById('lene1').value = lene[0];
//       document.getleneentById('lene2').value = lene[1];
//       document.getleneentById('lene3').value = lene[2];
//   } else {
//       alert('Введите ФИО полностью');
//   }
// });

// // Номер 6
// document.querySelector('#lene').addEventListener('blur', function() {
//   let lene = this.value.split(' ');
//   if (lene.length >= 3) {
//       let lene1 = capitalizeFirstLetter(lene[0]);
//       let lene2 = capitalizeFirstLetter(lene[1]);
//       let lene3 = capitalizeFirstLetter(lene[2]);
//       this.value = `${lene1} ${lene2} ${lene3}`;
//   } else {
//       alert('Введите ФИО полностью');
//   }
// });
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// // Номер 7
// document.querySelector('#lene').addEventListener('blur', function() {
//   let text = this.value;
//   let words = text.split(' ');
//   let wordCount = words.filter(word => word !== '').length;
//   console.log(`Количество слов: ${wordCount}`);
// });

// // Номер 8
// document.querySelector('#lene').addEventListener('blur', function() {
//     let lene = this.value;
//     let lene1 = lene.split('.');
//     if (lene1.length === 3) {
//         let lene2 = `${lene1[2]}-${lene1[1]}-${lene1[0]}`;
//         this.value = lene2;
//     } else {
//         alert('Введите дату');
//     }
// });

// // Номер 9
// document.querySelector('#lene').addEventListener('blur', function() {
//     let word = this.value.toLowerCase();
//     let lene = word.split('').reverse().join('');
//     if (word === lene) {
//         console.log(`Слово "${word}" читается с начала и с конца одинаково`);
//     } else {
//         console.log(`Слово "${word}" не читается с начала и с конца одинаково`);
//     }
// });

// // Номер 11
// document.querySelector('#lene').addEventListener('click', function() {
//     let lene = document.querySelectorAll('p');
//     lene.forEach(function(paragraph, index) {
//         paragraph.textContent += ` (номер ${index + 1})`;
//     });
// });

// // Номер 12
// document.getElementById('lene').addEventListener('click', function() {
//     let links = document.querySelectorAll('a');

//     links.forEach(function(link) {
//         let href = link.getAttribute('href');
//         link.textContent += ` (${href})`;
//     });
// });

// // Номер 13
// document.getElementById('lene').addEventListener('click', function() {
//    let links = document.querySelectorAll('a');
//     links.forEach(function(link) {
//         let href = link.getAttribute('href');
//         if (href.startsWith('http://')) {
//             link.textContent += '→ ';
//         }
//     });
// });


// // Номер 14
// document.querySelectorAll('.number').forEach(function(paragraph) {
//     let number = parseInt(paragraph.textContent);
//     let square = Math.pow(number, 2);
//     paragraph.textContent = square;
// });

// // Номер 15
// document.getElementById('lene').addEventListener('blur', function() {
//     let lene = this.value;
//     let lene1 = lene.split('.');
//     if (lene1.length === 3) {
//         let day = parseInt(lene1[0]);
//         let month = parseInt(lene1[1]) - 1;
//         let year = parseInt(lene1[2]);
//         let daysWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//         let dateOb = new Date(year, month, day);
//         let dayWeek = daysWeek[dateOb.getDay()];
//         console.log(`День недели: ${dayWeek}`);
//     } else {
//         alert('Введите дату в формате дд.мм.гггг');
//     }
// });

// // Номер 16
// let input = document.getElementById('lene');
// let increment = document.getElementById('increment');
// let decrement = document.getElementById('decrement');
// increment.addEventListener('click', function() {
//     let lene = parseInt(input.value);
//     input.value = lene + 1;
// });
// decrement.addEventListener('click', function() {
//     let lene = parseInt(input.value);
//     if (lene > 0) {
//         input.value = lene - 1;
//     }
// });

// // Номер 17
// let click = 0;
// document.querySelectorAll('p').forEach(function(paragraph) {
//     paragraph.addEventListener('click', function() {
//         click++;
//         document.getElementById('lene').value = click;
//     });
// });

// // Номер 18
// document.querySelectorAll('.text-div').forEach(function(div) {
//     let text = div.textContent;
//     if (text.length > 10) {
//         let trimmedText = text.slice(0, 10) + '...';
//         div.textContent = trimmedText;
//     }
// });

// // Номер 19
// document.getElementById('lene1').addEventListener('click', function() {
//     let random = generateRandomString(8);
//     document.getElementById('lene').value = random;
// });
// function generateRandomString(length) {
//     let characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters[randomIndex];
//     }
//     return result;
// }


// // Номер 20
// document.getElementById('lene1').addEventListener('click', function() {
//     let input = document.getElementById('lene');
//     let input1 = input.value;   
//     let input2 = input1.split('').sort(function() { return 0.5 - Math.random() }).join('');
//     input.value = input2;
// });

// // Номер 21
// document.getElementById('lene').addEventListener('click', function() {
//     let input = document.getElementById('inputTemp').value;
//     let fahrenheit = parseFloat(input);
//     if (!isNaN(fahrenheit)) {
//         let celsius = (fahrenheit - 32) * 5/9;
//         document.getElementById('result').textContent = `Температура в Цельсиях: ${celsius.toFixed(2)} °C`;
//     } else {
//         document.getElementById('result').textContent = 'Неверно';
//     }
// });

// // Номер 22
// document.getElementById('lene').addEventListener('click', function() {
//     let input= document.getElementById('input').value;
//     let number = parseInt(input);
//     if (!isNaN(number) && number >= 0) {
//         let factorial = 1;
//         for (let i = 1; i <= number; i++) {
//             factorial *= i;
//         }
//         document.getElementById('result').textContent = `Факториал числа ${number} равен ${factorial}`;
//     } else {
//         document.getElementById('result').textContent = 'Введите неотрицательное целое число.';
//     }
// });

// // Номер 23
// document.getElementById('lene3').addEventListener('click', function() {
//     let a = parseFloat(document.getElementById('lene').value);
//     let b = parseFloat(document.getElementById('lene1').value);
//     let c = parseFloat(document.getElementById('lene2').value);
//     let d = b*b - 4*a*c;
//     if (d > 0) {
//         let x1 = (-b + Math.sqrt(d)) / (2*a);
//         let x2 = (-b - Math.sqrt(d)) / (2*a);
//         document.getElementById('result').textContent = `Корни уравнения: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
//     } else if (d === 0) {
//         let x = -b / (2*a);
//         document.getElementById('result').textContent = `У уравнения один корень: x = ${x.toFixed(2)}`;
//     } else {
//         document.getElementById('result').textContent = 'Уравнение не имеет действительных корней.';
//     }
// });






