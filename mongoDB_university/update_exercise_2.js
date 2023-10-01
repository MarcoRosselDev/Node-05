/*1 = Adding Values to an Array
In this activity, we will add an element to an array field within a document.

You are now connected to an Atlas cluster and the bird_data database. Use the birds collection for this lab.

Lab Instructions
Write a query that will update a document with an _id of ObjectId("6268471e613e55b82d7065d7") and add the following to the diet array without removing any existing values: */

diet: ["newts", "opossum", "skunks", "squirrels"]

//A successful update will return the following:
o = {
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//2 Find the document to verify the diet array has been updated.

//--------------------------------------soluction:

//1:
db.birds.updateOne(
  { _id: ObjectId("6268471e613e55b82d7065d7") },
  { $set: { diet: ["newts", "opossum", "skunks", "squirrels"] } },
  { upsert: true }
)

//2:
db.birds.findOne({ _id: ObjectId("6268471e613e55b82d7065d7") })


const firstWrond = {
  _id: ObjectId("6268471e613e55b82d7065d7"),
  common_name: 'Great Horned Owl',
  scientific_name: 'Bubo virginianus',
  wingspan_cm: 111.76,
  habitat: ['grasslands', 'farmland', 'tall forest'],
  diet: [
    'mice',
    'small mammals',
    'rabbits',
    'shrews',
    ['newts', 'opossum', 'skunks', 'squirrels'] //--> no deveria estar dentro de un array
  ],
  last_seen: ISODate("2022-05-19T20:20:44.083Z")
}

// segundo intento

