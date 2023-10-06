/*You have a database called bird_data with a collection of sightings. 
We want to see the total number of sightings of Eastern 
Bluebirds in 2022. */

db.sightings.aggregate([
  {
    $match: {
      species_common: "Eastern Bluebirds"
    }
  },
  {
    $count: "species_common"
  }
])

db.sightings.findOne()

const dataModel = {
  _id: ObjectId("62cf8ebfbb9cdbee29caab04"),
  species_common: 'Eastern Bluebird',
  species_scientific: 'Sialia sialis',
  date: ISODate("2022-01-18T21:09:00.000Z"),
  location: { type: 'Point', coordinates: [40, -74] }
}