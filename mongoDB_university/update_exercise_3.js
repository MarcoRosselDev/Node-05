db.birds.updateOne(
  { common_name: "Robin Redbreast" },
  { $set: { $inc: { sightings: 1 } } },
  { $set: { last_updated: new Date() } },
  { upsert: true }
)

db.birds.findOne({ "common_name": "Robin Redbreast" })

{
  $inc: {
    <field1>: <amount1>, <field2>: <amount2>, ... } }

      db.birds.findOne({common_name: "Robin Redbreast"})