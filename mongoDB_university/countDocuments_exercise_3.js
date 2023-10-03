/*Lab Instructions
You are now connected to an Atlas cluster and the sample_supplies database.

You will use the sales collection for this activity.

Find the number of sales that included a laptop that cost less that $600. */
db.sales.countDocuments({ "items.name": "laptop", "items.price": { $lt: 600 } })
//2233