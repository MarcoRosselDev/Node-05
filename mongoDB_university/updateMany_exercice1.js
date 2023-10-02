db.birds.updateMany(
  {},
  {}
)

db.birds.find()
const exam = {
  _id: ObjectId("628682d92f3fa87b7d86dcce"),
  common_name: 'Blue Jay',
  scientific_name: 'Cyanocitta cristata',
  wingspan_cm: 34.17,
  habitat: 'forests',
  diet: [ 'vegetables', 'nuts', 'grains' ],
  sightings_count: 4,
  last_seen: ISODate("2022-05-19T20:20:44.083Z")
}
db.birds.updateMany(
  {common_name:{$in: ["Blue Jay", "Grackle"]}},
  {$set: {last_seen: new Date("2022-01-01")}}
)