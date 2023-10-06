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

//show collections ---> muestra la lista de colecciones
db.sightings.findOne()
db.sightings.aggregate([
  {
    $out: "end-of-the-year"
  }
])

a = {
  _id: ObjectId("62cf8ebfbb9cdbee29caab04"),
  species_common: 'Eastern Bluebird',
  species_scientific: 'Sialia sialis',
  date: ISODate("2022-01-18T21:09:00.000Z"),
  location: { type: 'Point', coordinates: [40, -74] }
}
/*You have a database called bird_data with a collection of sightings. We're starting to put together our end-of-the-year report on how many birds were seen. We want to put the sightings records in their own collection so that we can manipulate the data later. To do that, you'll use the aggregation stage $out to create a new collection. */

db.sightings.aggregate([
  {
    $group: {
      _id: "$species_common",
      total_sightings: { $count: "$species_common" }
    }
  },
  {
    $out: "random"
  }
])