/*Using deleteMany()

You can delete multiple documents from a collection in a single operation 
by calling the deleteMany() method on a collection object.To specify which 
documents to delete, pass a query filter that matches the documents that you 
want to delete.If you provide an empty document, MongoDB matches all documents 
in the collection and deletes them.In the following example, we delete all 
accounts with a balance of less than 500 by using a query filter.Then, 
we print the total number of deleted documents.
*/
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

const documentsToDelete = { balance: { $lt: 500 } }

const main = async () => {
  try {
    await connectToDatabase()
    let result = await accountsCollection.deleteMany(documentsToDelete)
    result.deletedCount > 0
      ? console.log(`Deleted ${result.deletedCount} documents`)
      : console.log("No documents deleted")
  } catch (err) {
    console.error(`Error deleting documents: ${err}`)
  } finally {
    await client.close()
  }
}

main()