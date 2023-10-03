/* 2 - Lab Instructions
You are now connected to an Atlas cluster and the sample_supplies database.

You will use the sales collection for this activity.

Find the data on sales to customers less than 30 years old in which the customer satisfaction rating was greater than three. Return only the customer's age and satisfaction rating, the sale date and store location. Do not include the _id field. */

db.sales.find({ "customer.age": { $lt: 30 }, "customer.satisfaction": { $gt: 3 } }, { _id: 0, "customer.age": 1, "customer.satisfaction": 1, saleDate: 1, storeLocation: 1 })

//customer menor de 30 con ratio de satisfaction mayor a 3
// retornar solo la edad y ration de satisfaction,
// la fecha y el local, no incluir el _id

// successful