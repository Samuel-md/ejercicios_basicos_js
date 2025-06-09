function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else if (numberTwo > numberOne) {
    console.log(numberTwo);
  } else {
    console.log("Ambos números son iguales:", numberOne);
  }
}

// Ejemplo de llamada:
greaterNumber(10, 20); // Mostrará 20
greaterNumber(30, 15); // Mostrará 30
greaterNumber(5, 5);   // Mostrará que son iguales