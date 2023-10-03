/*Lab Instructions
You are now connected to an Atlas cluster and the sample_supplies database.

You will use the sales collection for this activity.

Find the number of sales made using a coupon at the Denver location. */
db.sales.countDocuments({ storeLocation: "Denver", couponUsed: true })
//157