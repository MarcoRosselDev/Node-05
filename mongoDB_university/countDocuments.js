//db.collection.countDocuments( <query>, <options> )

// example:
// Count number of docs in trip collection
db.trips.countDocuments({})
// Count number of trips over 120 minutes by subscribers
db.trips.countDocuments({ tripduration: { $gt: 120 }, usertype: "Subscriber" })

/* 1 - You will use the sales collection for this activity. (Suggestion: run db.sales.findOne() to return a sample document and review the structure of the data in this this collection.)

Find the total number of documents in the sales collection. */
db.sales.findOne()
db.sales.countDocuments()

const structureData = {
  _id: ObjectId("5bd761dcae323e45a93ccfec"),
  saleDate: ISODate("2017-12-03T18:39:48.253Z"),
  items: [
    {
      name: 'backpack',
      tags: ['school', 'travel', 'kids'],
      price: Decimal128("127.59"),
      quantity: 3
    },
    {
      name: 'notepad',
      tags: ['office', 'writing', 'school'],
      price: Decimal128("17.6"),
      quantity: 4
    },
    {
      name: 'binder',
      tags: ['school', 'general', 'organization'],
      price: Decimal128("18.67"),
      quantity: 2
    },
    {
      name: 'pens',
      tags: ['writing', 'office', 'school', 'stationary'],
      price: Decimal128("60.56"),
      quantity: 3
    },
    {
      name: 'notepad',
      tags: ['office', 'writing', 'school'],
      price: Decimal128("28.41"),
      quantity: 1
    },
    {
      name: 'envelopes',
      tags: ['stationary', 'office', 'general'],
      price: Decimal128("15.28"),
      quantity: 7
    },
    {
      name: 'laptop',
      tags: ['electronics', 'school', 'office'],
      price: Decimal128("1259.02"),
      quantity: 3
    }
  ],
  storeLocation: 'London',
  customer: { gender: 'M', age: 40, email: 'dotzu@ib.sh', satisfaction: 4 },
  couponUsed: false,
  purchaseMethod: 'In store'
}