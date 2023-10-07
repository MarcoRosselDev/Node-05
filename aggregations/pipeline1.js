const dataModel = {
  _id: new ObjectId("62d6e04ecab6d8e13049748b"),
  account_id: 'MDB659507055',
  account_holder: 'Jacob Thompson',
  account_type: 'checking',
  balance: new Decimal128("3887.53000000000"),
  transfers_complete: ['TR806791572', 'TR437437431', 'TR512378671']
}
//----------------------------------------
const { MongoClient } = require("mongodb")
require("dotenv").config()
const uri = process.env.MONGODB_URI
const safeURI = `${uri.slice(0, 14)}****${uri.slice(30, 31)}****${uri.slice(47)}`

const client = new MongoClient(uri)
const dbname = "bank";
const collection_name = "accounts";
const accountsCollection = client.db(dbname).collection(collection_name);

const pipeline = [
  // Stage 1: Get the accounts with a balance less than $1,000
  {
    $match: {
      balance: { $lt: 1000 }
    }
  },
  // Stage 2: Calculate average balance and total balance
  {
    $group: {
      _id: "$account_type",
      avarabe_balance: { $avg: "$balance" },
      total_balance: { $sum: "$balance" }
    }
  }
]

const main = async () => {
  try {
    await client.connect()
    console.log(`Connected to the database 🌍. \nFull connection string: ${safeURI}`)
    //let result = await accountsCollection.findOne()
    let result = await accountsCollection.aggregate(pipeline)
    //console.log(result)
    for await (const doc of result) {
      console.log(doc)
    }
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`)
  } finally {
    await client.close()
  }
}

main()
//--------------------------------------output:
const output = [{
  _id: 'savings',
  avarabe_balance: new Decimal128("503.8450000000000"),
  total_balance: new Decimal128("2015.3800000000000")
},
{
  _id: 'checking',
  avarabe_balance: new Decimal128("377.9366666666666666666666666666667"),
  total_balance: new Decimal128("1133.810000000000")
}]