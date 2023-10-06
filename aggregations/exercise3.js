/*$set Stage

You have a database called bird_data with a collection of information 
about bird species. In the future, we’ll add new animals to the 
database and collection. Before we do that, we have to add a class 
field and set that field to bird in all of the existing documents in 
the collection */

db.birds.findOne()
const oneData = {
  _id: ObjectId("62684d24613e55b82d7065d9"),
  common_name: 'Palm Warbler',
  scientific_name: 'Setaphaga palmarum',
  wingspan_cm: 20.32,
  habitat: 'field',
  diet: ['insects', 'seeds', 'berries'],
  last_seen: ISODate("2022-05-19T20:20:44.083Z")
}
db.listCollections()//--> me muestra en un array [] las colecciones.