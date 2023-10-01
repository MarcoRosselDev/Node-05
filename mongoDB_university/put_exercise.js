//Replace a Single Document
/* In this activity, we will use the MongoDB shell to replace a document while keeping the original document's _id field.

You are now connected to an Atlas cluster and the bird_data database. Use the birds collection for this lab.

Lab Instructions
Find the document with a common_name of Northern Cardinal and take note of the _id field.

Use the _id from Step 1 to create a query that will replace the Northern Cardinal document with the following document:
 */
const a = {
  "common_name": "Morning Dove",
  "scientific_name": "Zenaida macroura",
  "wingspan_cm": 37.23,
  "habitat": ["urban areas", "farms", "grassland"],
  "diet": ["seeds"],
}
//Verify that the operation was successful. A successful replacement will return the following output:

const ckeck = {
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 1,
  "modifiedCount": 1,
  "upsertedCount": 0
}

//-------------------------------solution:
db.birds.findOne({"common_name": {$eq:"Northern Cardinal"}})

const output1 = {
  _id: ObjectId("6286809e2f3fa87b7d86dccd"),
  common_name: 'Northern Cardinal',
  scientific_name: 'Cardinalis cardinalis',
  wingspan_cm: 25.32,
  habitat: 'woodlands',
  diet: [ 'grain', 'seeds', 'fruit' ],
  last_seen: ISODate("2022-05-19T20:20:44.083Z")
}

// como tenemos el _id seguimos con el paso 2:
db.birds.replaceOne({_id: ObjectId("6286809e2f3fa87b7d86dccd")},{
  "common_name": "Morning Dove",
  "scientific_name": "Zenaida macroura",
  "wingspan_cm": 37.23,
  "habitat": ["urban areas", "farms", "grassland"],
  "diet": ["seeds"],
})

const output2 = {
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

// paso 3: comporobacion
db.birds.findOne({_id: ObjectId("6286809e2f3fa87b7d86dccd")})

const output3 = {
  _id: ObjectId("6286809e2f3fa87b7d86dccd"),
  "common_name": "Morning Dove",
  "scientific_name": "Zenaida macroura",
  "wingspan_cm": 37.23,
  "habitat": ["urban areas", "farms", "grassland"],
  "diet": ["seeds"],
}