const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
];

const filteredPlaces = [];

for (let i = 0; i < placesToTravel.length; i++) {
  const place = placesToTravel[i];
  if (place.id !== 11 && place.id !== 40) {
    filteredPlaces.push(place);
  }
}

console.log(filteredPlaces);