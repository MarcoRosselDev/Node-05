//db.<colection>.deleteOne({<fila>:<key>})
db.podcasts.deleteOne({ _id: Objectid("6282c9862acb966e76bbf20a") })
//db.<colection>.deleteMany(<fila>:<key>)
db.podcasts.deleteMany({category: "crime"})

db.birds.deleteOne({_id: ObjectId("62cddf53c1d62bc45439bebf")})

db.birds.deleteMany({sightings_count :{$lte:10}})