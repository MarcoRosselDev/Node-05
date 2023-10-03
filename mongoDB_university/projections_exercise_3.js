/*Lab Instructions

You are now connected to an Atlas cluster and the sample_supplies database.

You will use the sales collection for this activity.

Find data on all sales from the Seattle and New York stores. Return all data except the purchase method, customer information, and whether a coupon was used.  */

db.sales.find({ storeLocation: { $in: ["New York", "Seattle"] } }, { purchaseMethod: 0, customer: 0, cuponUsed: 0 })

//successful