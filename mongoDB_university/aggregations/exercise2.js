/*$project Stage

You have a database called bird_data with a collection of sightings. 
There is a lot of data in each document, but we want to return only a 
list of the time of the sighting and the common name of the bird 
that was sighted. */

db.sightings.findOne()

const dataExample = {
  _id: ObjectId("62cf8ebfbb9cdbee29caab04"),
  species_common: 'Eastern Bluebird',
  species_scientific: 'Sialia sialis',
  date: ISODate("2022-01-18T21:09:00.000Z"),
  location: { type: 'Point', coordinates: [40, -74] }
}

db.sightings.aggregate([
  {
    $project: {
      date: 1,
      species_common: 1,
      locatoin: 1,
      _id: 0
    }
  }
])