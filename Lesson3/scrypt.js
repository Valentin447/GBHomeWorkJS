// Семинар. Знакомство с функциями в JavaScript
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function exp(number) {
  return number ** 3;
}

console.log(exp(2));
console.log(exp(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const number = Number(prompt("Введите заработную плату"));

function taxes(num){
  if(isNaN(num)){
    console.log("Значение задано неверно");
  } else {
    console.log(`Размер заработной платы за вычетом налогов равен ${num * 0.87}`);
  }
}

taxes(number);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const number1 = Number(prompt("Введите первое число"));
const number2 = Number(prompt("Введите второе число"));
const number3 = Number(prompt("Введите третье число"));

function maxNumber(...numbers){
  return Math.max(...numbers);
}
console.log(maxNumber(number1, number2, number3));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function add(num1, num2){
  return num1 + num2;
}
function sub(num1, num2){
  if(num1 >= num2){
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}
function multi(num1, num2){
  return num1 * num2;
}
function div(num1, num2){
  return num1 / num2;
}

console.log(add(2, 6));
console.log(sub(2, 6));
console.log(multi(2, 6));
console.log(div(2, 6));