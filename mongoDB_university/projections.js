// Inlusion & exclusion statements can't be combined in projections
// _id field is an exception

/* Returning Specific Data from a Query in MongoDB

Review the following code, which demonstrates how to return selected fields from a query.

Add a Projection Document
To specify fields to include or exclude in the result set, add a projection document as the second parameter in the call to db.collection.find().

Syntax:

db.collection.find( <query>, <projection> )
Include a Field
To include a field, set its value to 1 in the projection document.

Syntax:

db.collection.find( <query>, { <field> : 1 })

Example:

// Return all restaurant inspections - business name, result, and _id fields only
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1 }
)

Exclude a Field

To exclude a field, set its value to 0 in the projection document.

Syntax:

db.collection.find(query, { <field> : 0, <field>: 0 })

Example:

// Return all inspections with result of "Pass" or "Warning" - exclude date and zip code
db.inspections.find(
  { result: { $in: ["Pass", "Warning"] } },
  { date: 0, "address.zip": 0 }
)
While the _id field is included by default, it can be suppressed by setting its value to 0 in any projection.

// Return all restaurant inspections - business name and result fields only
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1, _id: 0 }
) */

//---------------------------------------lab
/* Lab Instructions
You are now connected to an Atlas cluster and the sample_supplies database.

You will use the sales collection for this activity. (Suggestion: run db.sales.findOne() to return a sample document and review the structure of the data in this collection.)

1 - Query for all sales at the Denver store. Return only the sale date, store location, purchase method and _id fields. */

db.sales.findOne()
// soulution:
db.sales.find({}, { items: 0, customer: 0, couponUsed: 0 })

const structureDocuments = {
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