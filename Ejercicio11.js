const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    const elemento = list[i];

    if (typeof elemento === 'number') {
      total += elemento;
    } else if (typeof elemento === 'string') {
      total += elemento.length;
    }
  }

  return total;
}

// Ejemplo de uso:
console.log(averageWord(mixedElements)); // Muestra el resultado combinado