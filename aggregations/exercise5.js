/*You are now connected to an Atlas cluster and to the bird_data database. Use the sightings collection in this lab.

First, create an aggregation pipeline, which will contain two stages. (Forgot the method for aggregation? Check the hint below!)

Create a stage that filters by matching records of sightings that took place in 2022.

Add a stage that outputs the filtered data to a new collection with the name 'sightings_2022'.

Run your aggregation pipeline.

Run db.sightings_2022.findOne() to see if the new collection was created!

Once you complete this lab, compare your answer to the correct answer in the Review and Solved Code section, then select Next. */

db.sightings.aggregate([
  {
    $group: {
      _id: "$date"
    }
  },
  { $out: "sightings_2022" }
])

//ISODate("2022")

db.sightings.findOne() = {
  _id: ObjectId("62cf8ebfbb9cdbee29caab04"),
  species_common: 'Eastern Bluebird',
  species_scientific: 'Sialia sialis',
  date: ISODate("2022-01-18T21:09:00.000Z"),
  location: { type: 'Point', coordinates: [40, -74] }
}