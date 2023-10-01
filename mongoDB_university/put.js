// replaceOne(a, b, c)-->methods
// a = id, del documento a actualizar
// b = {DSON con el contenido a reemplazar o actualizar}
// c = no se vera por ahora, ???==> opcional

// example:
const example_replaceOne = db.books.replaceOne(
  { _id: ObjectId("9012831267c334c") },
  {
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1234-3",
    thumbnaiUrl: "http://via.placeholder.com/640x380",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"]
  },//BSON
)

// cuando ejecutamos el mandato, la salida nos muestra una lista de coincidencias

const output = {
  acknowleadged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

// esto nos asegura que se realizo la actualizacion de datos pero pordemos
// checkear ejecutando .findOne()

const check = db.books.findOne({ _id: ObjectId("9012831267c334c") });
// nos retornara el documento esta vez actualizado







// example db university
db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"),
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  }
)