// Циклы и массивы

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 11; i++) {
  if(i === 0){
    console.log("0 – это ноль")
  } else if(i % 2 === 0){
    console.log(`${i} - четное число`)
  } else {
    console.log(`${i} - нечетное число`)
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getArr(){
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(parseInt(Math.random() * 10));
  }
  return arr;
}

function sum(arr){
  let sum = 0;
  for(const item of arr){
    sum += item;
  }
  return sum;
}

function min(arr){
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

function threeInArr(arr){
  for(const el of arr){
    if(el === 3){
      return true;
    }
  }
  return false;
}

const myArr = getArr();
console.log(`Массив: ${myArr}`);
console.log(`Сумма элементов массива = ${sum(myArr)}`);
console.log(`Минимальный элемент = ${min(myArr)}`);
console.log((threeInArr(myArr)) ? "В массиве есть число три" : "Числа три в массиве нет");

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0, x = ""; i < 20; i++) {
  console.log(x+="x");
}