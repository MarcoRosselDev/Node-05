db.companies.find({ category_code: "musica" }).sort({ name: 1 })
// sort({<key>: 1 | -1})---> 1 ordena ascendente, -1 descendente

db.companies.find({ category_code: "musica" }, { name: 1, number_of_employees: 1 }).sort({ number_of_employees: -1 }).limit(3)

/*  Sorting and Limiting Query Results in MongoDB

Review the following code, which demonstrates how to sort and limit query results.


Sorting Results

Use cursor.sort() to return query results in a specified order. Within the parentheses of sort(), include an object that specifies the field(s) to sort by and the order of the sort. Use 1 for ascending order, and -1 for descending order.

Syntax:

db.collection.find(<query>).sort(<sort>)

Example:

// Return data on all music companies, sorted alphabetically from A to Z.
db.companies.find({ category_code: "music" }).sort({ name: 1 });
To ensure documents are returned in a consistent order, include a field that contains unique values in the sort. An easy way to do this is to include the _id field in the sort. Here's an example:

// Return data on all music companies, sorted alphabetically from A to Z. Ensure consistent sort order
db.companies.find({ category_code: "music" }).sort({ name: 1, _id: 1 });
Limiting Results
Use cursor.limit() to return query results in a specified order. Within the parentheses of limit(), specify the maximum number of documents to return.

Syntax:

db.companies.find(<query>).limit(<number>)
Example:

// Return the three music companies with the highest number of employees. Ensure consistent sort order.
db.companies
  .find({ category_code: "music" })
  .sort({ number_of_employees: -1, _id: 1 })
  .limit(3); */