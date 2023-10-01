// replaceOne(a, b, c)-->methods
// a = id, del documento a actualizar
// b = {DSON con el contenido a reemplazar o actualizar}
// c = no se vera por ahora, ???==> opcional

// example:
const example_replaceOne = db.books.replaceOne(
    {_id: ObjectId("9012831267c334c")},
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
    acknowleadged:true,
    insertedId:null,
    matchedCount:1,
    modifiedCount:1,
    upsertedCount:0
}

// esto nos asegura que se realizo la actualizacion de datos pero pordemos
// checkear ejecutando .findOne()

const check = db.books.findOne({_id: ObjectId("9012831267c334c")});
// nos retornara el documento esta vez actualizado