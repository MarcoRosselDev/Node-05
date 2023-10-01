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

db.sales.find({"Purchase": "online"})

asdfa = 
  {
    _id: ObjectId("5bd761dcae323e45a93cd00e"),
    saleDate: ISODate("2013-09-30T15:18:53.756Z"),
    items: [
      {
        name: 'notepad',
        tags: [ 'office', 'writing', 'school' ],
        price: Decimal128("39.91"),
        quantity: 2
      },
      {
        name: 'notepad',
        tags: [ 'office', 'writing', 'school' ],
        price: Decimal128("27.87"),
        quantity: 3
      },
      {
        name: 'binder',
        tags: [ 'school', 'general', 'organization' ],
        price: Decimal128("13.54"),
        quantity: 4
      },
      {
        name: 'envelopes',
        tags: [ 'stationary', 'office', 'general' ],
        price: Decimal128("5.43"),
        quantity: 9
      },
      {
        name: 'printer paper',
        tags: [ 'office', 'stationary' ],
        price: Decimal128("16.15"),
        quantity: 9
      },
      {
        name: 'pens',
        tags: [ 'writing', 'office', 'school', 'stationary' ],
        price: Decimal128("40.01"),
        quantity: 5
      },
      {
        name: 'envelopes',
        tags: [ 'stationary', 'office', 'general' ],
        price: Decimal128("13.37"),
        quantity: 6
      },
      {
        name: 'laptop',
        tags: [ 'electronics', 'school', 'office' ],
        price: Decimal128("1597.31"),
        quantity: 4
      },
      {
        name: 'notepad',
        tags: [ 'office', 'writing', 'school' ],
        price: Decimal128("30.99"),
        quantity: 4
      }
    ],
    storeLocation: 'Denver',
    customer: { gender: 'F', age: 59, email: 'veb@molog.eu', satisfaction: 3 },
    couponUsed: false,
    purchaseMethod: 'Online'
  }

  db.sales.find({$and : [
    {$or: [{purchaseMethod: "Online"},{"cuponUsed": true},{"customer" : {"age": {$lte: 25}}}]}
  ]})

asdfkalsdjfa = {
    _id: ObjectId("5bd761dcae323e45a93cd049"),
    saleDate: ISODate("2013-10-17T13:18:46.279Z"),
    items: [
      {
        name: 'printer paper',
        tags: [ 'office', 'stationary' ],
        price: Decimal128("14.68"),
        quantity: 5
      },
      {
        name: 'backpack',
        tags: [ 'school', 'travel', 'kids' ],
        price: Decimal128("176.47"),
        quantity: 3
      },
      {
        name: 'envelopes',
        tags: [ 'stationary', 'office', 'general' ],
        price: Decimal128("24.88"),
        quantity: 3
      },
      {
        name: 'binder',
        tags: [ 'school', 'general', 'organization' ],
        price: Decimal128("13.41"),
        quantity: 9
      },
      {
        name: 'pens',
        tags: [ 'writing', 'office', 'school', 'stationary' ],
        price: Decimal128("33.55"),
        quantity: 1
      },
      {
        name: 'binder',
        tags: [ 'school', 'general', 'organization' ],
        price: Decimal128("20.21"),
        quantity: 4
      },
      {
        name: 'pens',
        tags: [ 'writing', 'office', 'school', 'stationary' ],
        price: Decimal128("70.71"),
        quantity: 1
      }
    ],
    storeLocation: 'San Diego',
    customer: { gender: 'M', age: 49, email: 'aroru@ti.yt', satisfaction: 2 },
    couponUsed: false,
    purchaseMethod: 'In store'
  }

db.sales.find({
  $and: [
    {$or:[{"items.name": "pens"},{"items.tags": "writing"}]}
  ]
})