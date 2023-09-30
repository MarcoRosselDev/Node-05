// $and  a y b
// $or a o b
db.routes.find({
  $and: [
    {"airline": "Shouthwest Airlines"},
    {"stops": {$gte: 1}}
  ]
})

// $or example
db.routes.find({
  $and: [
    { $or: [
      {dst_airport: 'SEA'},
      {src_airport: 'SEA'}
    ]},
    { $or: [
      {airline: 'American Airlines'},
      {airplane: 320}
    ]}
  ]
})
//retornar las 2 condiciones:
  // cualquiera de las dos coinsidencias
  // cualquiera de las dos coinsidencias
// esto es un encadenamiento de ors dentro de un and

//implicit and
db.routes.find({ "airline.name": "Southwest Airlines", stops: { $gte: 1 } })

//or example
db.routes.find({
  $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }],
})

// usar and para multiples peticiones or
// si no aplico el and sobreescribira el valor que se repitan en las preguntas
db.routes.find({
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ]
})