// updateOne(a, b, c)
//a = focumento filtrado = '<clave>': {$eq: <valor>}
//b = DSON para actualizar
//c = opcional object.

// update tiene operadores de upadate, y operadores normales
// para ayudar a actualizar documentos.
// por ahora aprenderemos 3 : $set $upsert $push.

//$set
// el operador set reemplaza el valor de una fila con el valore espesificado,
db.podcasts.updateOne(
  {
    _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8"), // no ocupamos $eq: por que viene implizito por defecto.
  },

  {
    $set: {
      subscribers: 98562,
    },
  }
)

//$upsert
// crea un nuevo documento si el match no coinside
db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true } // opcional object = upset:true
)

//$push
// operador push agrega un nuevo valor al opedador fila array.
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
)