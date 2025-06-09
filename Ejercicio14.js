const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const counter = {};

  for (const word of list) {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }

  return counter;
}

// Ejemplo de uso:
console.log(repeatCounter(words));

/*
Resultado:
{
  code: 4,
  repeat: 1,
  eat: 1,
  sleep: 3,
  enjoy: 2
}
*/