/*$sort and $limit Stages

You have a database called bird_data with a collection of sightings. 
We want to use this data to find the birds that are sighted 
furthest North. */

db.sightings.findOne();
const exampleDate = {
  _id: ObjectId("62cf8ebfbb9cdbee29caab04"),
  species_common: 'Eastern Bluebird',
  species_scientific: 'Sialia sialis',
  date: ISODate("2022-01-18T21:09:00.000Z"),
  location: { type: 'Point', coordinates: [40, -74] }
}

db.sightings.aggregate([
  { $sort: { species_common: -1 } },
  { $limit: 1 }
])