const structure =
{
  _id: ObjectId("5bd761dcae323e45a93cd028"),
  saleDate: ISODate("2015-08-13T22:50:27.807Z"),
  items: [
    {
      name: 'envelopes',
      tags: ['stationary', 'office', 'general'],
      price: Decimal128("20.88"),
      quantity: 3
    },
    {
      name: 'notepad',
      tags: ['office', 'writing', 'school'],
      price: Decimal128("11.02"),
      quantity: 5
    },
    {
      name: 'binder',
      tags: ['school', 'general', 'organization'],
      price: Decimal128("21.97"),
      quantity: 5
    }
  ],
  storeLocation: 'Austin',
  customer: { gender: 'F', age: 44, email: 'midro@te.cy', satisfaction: 5 },
  couponUsed: false,
  purchaseMethod: 'Phone'
}

//Return the data on all sales, ordered by date from oldest to newest.(Forgot the command? Check the hints below!)

db.sales.find({}, { saleDate: 1 }).sort({ saleDate: -1 })

//2: You will use the sales collection.

// Return the data on all sales made online using a coupon, ordered by date from the most recent to the oldest. (Forgot the command ? Check the hints below!)

db.sales.find({ couponUsed: true }, { saleDate: 1 }).sort({ saleDate: 1 })

//3. You are now connected to an Atlas cluster and the sample_supplies database.

// You will use the sales collection.

// Return the data on the three most recent sales made from the London store that included one or more of the following items: a laptop, a backpack or printer paper.(Forgot the command ? Check the hints below!)

db.sales.find({ storeLocation: "London", "items.name": { $in: ["laptop", "backpack", "printer paper"] } }, { storeLocation: 1, "items.name": 1 }).sort({ saleDate: -1 }).limit(3)

const result = [
  {
    _id: ObjectId("5bd761deae323e45a93cde93"),
    items: [{ name: 'printer paper' }],
    storeLocation: 'London'
  },
  {
    _id: ObjectId("5bd761ddae323e45a93cd727"),
    items: [
      { name: 'laptop' },
      { name: 'envelopes' },
      { name: 'binder' },
      { name: 'envelopes' },
      { name: 'notepad' },
      { name: 'printer paper' },
      { name: 'pens' },
      { name: 'notepad' }
    ],
    storeLocation: 'London'
  },
  {
    _id: ObjectId("5bd761ddae323e45a93cdb75"),
    items: [
      { name: 'notepad' },
      { name: 'envelopes' },
      { name: 'pens' },
      { name: 'printer paper' },
      { name: 'binder' },
      { name: 'pens' },
      { name: 'backpack' }
    ],
    storeLocation: 'London'
  }
]