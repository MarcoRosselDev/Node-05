db.sightings.aggregate([
  {
    $match: { species_common: "Eastern Bluebird" }
  },
  {
    $group: {
      _id: "$location.coordinates",
      totalSightings: { $count: {} }
    }
  }
])

/*
$match and $group Stages

You have a database called bird_data with a collection of sightings[avistamientos, saitings]. 
We want to use this data to find out where we should go to see our 
favorite bird, Eastern Bluebirds. We’ll use the location coordinates
(latitude and longitude) and the number of sightings in each location 
to identify the best places to view the Eastern Bluebirds. */

db.sightings.findOne()
const output = {
  _id: ObjectId("62cf8ebfbb9cdbee29caab04"),
  species_common: 'Eastern Bluebird',
  species_scientific: 'Sialia sialis',
  date: ISODate("2022-01-18T21:09:00.000Z"),
  location: { type: 'Point', coordinates: [40, -74] }
}