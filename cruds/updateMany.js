/*  Using updateMany()

In this example, we update many documents by adding a value to 
the transfers_complete array of all checking account documents. 
The updateMany() method is appended to the collection object. 
The method accepts a filter that matches the document(s) that we want to update 
and an update statement that instructs the driver how to change the matching document. 
Both the filter and the update documents are stored 
in variables. The updateMany() method updates all the documents in the collection 
that match the filter. */

const database = client.db(dbname);
const bank = database.collection(collection_name);

const documentsToUpdate = { account_type: "checking" };

const update = { $push: { transfers_complete: "TR413308000" } }

const main = async () => {
  try {
    await connectToDatabase()
    let result = await accountsCollection.updateMany(documentsToUpdate, update)
    result.modifiedCount > 0
      ? console.log(`Updated ${result.modifiedCount} documents`)
      : console.log("No documents updated")
  } catch (err) {
    console.error(`Error updating documents: ${err}`)
  } finally {
    await client.close()
  }
}

main()
// error mas comund el de incluir await en las peticiones crud