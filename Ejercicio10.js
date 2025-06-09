const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }

  const promedio = sum / numberList.length;
  return promedio;
}

// Ejemplo de uso:
console.log(average(numbers)); // Mostrará: 23.428571428571427