/*
Updating a Document Field
In this lab, you’ll add a new field to a document.

You are now connected to an Atlas cluster and the bird_data database. Use the birds collection for this lab.

Lab Instructions
Run a findOne() query for a document with a common_name of Canada Goose and examine its contents:
*/

const a = {
  _id: ObjectId("6268413c613e55b82d7065d2"),
  common_name: 'Canada Goose',
  scientific_name: 'Branta canadensis',
  wingspan_cm: 152.4,
  habitat: 'wetlands',
  diet: ['grass', 'algae']
}

/*2 - Update the document by adding a new field titled tags and set it to an array containing the following strings: geese, herbivore, and migration using the appropriate MongoDB update operator. The following output should indicate the document was updated: */

const upset = {
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

/*3 - Verify that a new field tags was added by running a findOne() command with the common_name of the bird. The command will return the following output: */

const solution = {
  _id: ObjectId("6268413c613e55b82d7065d2"),
  common_name: 'Canada Goose',
  scientific_name: 'Branta canadensis',
  wingspan_cm: 152.4,
  habitat: 'wetlands',
  diet: ['grass', 'algae'],
  tags: ['geese', 'herbivore', 'migration']
}

//------------------------------solution:

//1:
db.birds.findOne({ common_name: 'Canada Goose' })

const return1 = {
  _id: ObjectId("6268413c613e55b82d7065d2"),
  common_name: 'Canada Goose',
  scientific_name: 'Branta canadensis',
  wingspan_cm: 152.4,
  habitat: 'wetlands',
  diet: ['grass', 'algae'],
  last_seen: ISODate("2022-05-19T20:20:44.083Z")
}
//2:
db.birds.updateOne(
  { _id: ObjectId("6268413c613e55b82d7065d2") },
  { $set: { tags: ["geese", "herbivore", "migration"] } },
  { upsert: true })

db.birds.updateOne({ _id: ObjectId("6268413c613e55b82d7065d2") }, { $set: { tags: ["geese", "herbivore", "migration"] } }, { upsert: true })

const return2 = {
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//3:
db.birds.findOne({ common_name: 'Canada Goose' })

const return3 = {
  _id: ObjectId("6268413c613e55b82d7065d2"),
  common_name: 'Canada Goose',
  scientific_name: 'Branta canadensis',
  wingspan_cm: 152.4,
  habitat: 'wetlands',
  diet: ['grass', 'algae'],
  last_seen: ISODate("2022-05-19T20:20:44.083Z"),
  tags: [['geese', 'herbivore', 'migration']]
}