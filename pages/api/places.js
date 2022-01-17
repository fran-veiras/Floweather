const defaultPlaces = [
  {
    id: 1,
    city: 'Buenos Aires',
    country: 'Argentina',
  },
  {
    id: 2,
    city: 'Rio De Janeiro',
    country: 'Brasil',
  },
  {
    id: 3,
    city: 'Nueva York',
    country: 'Estados Unidos',
  },
  {
    id: 4,
    city: 'Madrid',
    country: 'España',
  },
  {
    id: 5,
    city: 'Cancún',
    country: 'México',
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(defaultPlaces));
};
