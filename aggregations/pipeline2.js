const pipelineExample = [
  {
    $match: {
      account_type: "checking",
      balance: {
        $gte: 1500
      }
    }
  },
  {
    $sort: {
      balance: -1
    }
  },
  {
    $project: {
      _id: 0,
      account_id: 1,
      account_type: 1,
      balance: 1,
      // podemos crear una nueva fila y aplicar algun calculo
      gbp_balance: {
        $divide: ["$balance", 1.3]
      }
    }
  }
]
//--------------------------------lab:
const { MongoClient } = require("mongodb")
require("dotenv").config()
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
const safeURI = `${uri.slice(0, 14)}****${uri.slice(30, 31)}****${uri.slice(47)}`

const dbname = "bank";
const collection_name = "accounts";
const accountsCollection = client.db(dbname).collection(collection_name);

const exampleData = {
  _id: new ObjectId("62d6e04ecab6d8e130497482"),
  account_id: 'MDB333829449',
  account_holder: 'Kate Stone',
  account_type: 'checking',
  balance: new Decimal128("4688"),
  transfers_complete: [
    'TR854412948',
    'TR413308451',
    'TR328708274',
    'TR192714918',
    'TR263422717'
  ]
}
const pipeline = [
  // Stage 1: Match accounts with a balance greater than 1,500 USD
  { $match: { balance: { $gte: 1500 } } },
  // Stage 2: Sort the documents in the collection by the balance field in descending order
  { $sort: { balance: -1 } },
  // Stage 3: Project the account_id, account_type,and balance fields and a new field called gdp_balance which divides the balance field by 1.3
  {
    $project: {
      _id: 0,
      account_id: 1,
      account_type: 1,
      balance: 1,
      // podemos crear una nueva fila y aplicar algun calculo
      gbp_balance: {
        $divide: ["$balance", 1.3]
      }
    }
  }
];

const main = async () => {
  try {
    await client.connect()
    console.log(`Connected to the database 🌍\n ${safeURI}`)
    let result = await accountsCollection.aggregate(pipeline)
    //let result = await accountsCollection.findOne()
    //console.log(result);
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