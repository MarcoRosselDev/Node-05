db.birds.updateOne(
  { common_name: "Robin Redbreast" },
  { $set: { $inc: { sightings: 1 } } },
  { $set: { last_updated: new Date() } },
  { upsert: true }
)

db.birds.findOne({ "common_name": "Robin Redbreast" })

// {
//   $inc: {
//     <field1>: <amount1>, <field2>: <amount2>, ... } }

//       db.birds.findOne({common_name: "Robin Redbreast"})

// second chanse

db.birds.updateOne({ common_name: "Robin Redbreast" },
  [{ $set: { $inc: { "sightings": 1 } } },
  { $set: { last_updated: new Date() } }],
  { upsert: true }
)

/*Return, Update, and Add a Document
In this activity, we will perform an operation that can return, edit, and optionally add a new document to a collection in one step.

You are now connected to an Atlas cluster and the bird_data database. Use the birds collection for this lab.

Lab Instructions
1 Write a query to update a document in the birds collection.
a. In the filter document, use the common_name field with a value of Robin Redbreast to search for the document.
b. In the update document, use the $inc operator to increment the sightings field by 1. Additionally, your query should set a new field called last_updated to the current date and time, using new Date().
c. Add an option to the updateOne() method to create a new document if no documents match your query.
Note
If you get an unexpected result of upsertedCount: 0, where the output of the command is as follows: */