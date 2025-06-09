const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);
  
  if (index !== -1) {
    return { found: true, index: index };
  } else {
    return false;
  }
}

// Ejemplo de uso:
console.log(nameFinder(names, 'Tony'));    // { found: true, index: 2 }
console.log(nameFinder(names, 'Wanda'));   // false