/*Find and Modify
In this activity, we will return a document in mongosh and manipulate a value in one of the document's fields using one command.

You are now connected to an Atlas cluster and the bird_data database. Use the birds collection for this lab.

Lab Instructions
Given a common_name for a bird, write a query that will find the document and modify the sightings_count field by incrementing it by 1.

Common Name: Blue Jay

Increment the sightings_count field by 1

Return the updated document

Verify that the document was updated. The resulting document should look like the following: */

a = {
  _id: ObjectId("628682d92f3fa87b7d86dcce"),
  common_name: 'Blue Jay',
  scientific_name: 'Cyanocitta cristata',
  wingspan_cm: 34.17,
  habitat: 'forests',
  diet: ['vegetables', 'nuts', 'grains'],
  sightings_count: 5,
  last_seen: ISODate("2022-05-19T20:20:44.083Z")
}

//solution:
db.birds.findAndModify({
  query: { common_name: 'Blue Jay' },
  update: { $inc: { sightings_count: 1 } },
  new: true
})