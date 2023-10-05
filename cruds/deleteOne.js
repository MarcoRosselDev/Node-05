/*  Using deleteOne()

To delete a single document from a collection, use the deleteOne() 
method on a collection object.This method accepts a query filter that 
matches the document that you want to delete.If you do not specify a filter, 
MongoDB matches and deletes the first document in the collection.Here's an example:
*/
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

const documentToDelete = { _id: ObjectId("62d6e04ecab6d8e13049749c") }

const main = async () => {
  try {
    await connectToDatabase()
    let result = await accountsCollection.deleteOne(documentToDelete)
    result.deletedCount === 1
      ? console.log("Deleted one document")
      : console.log("No documents deleted")
  } catch (err) {
    console.error(`Error deleting documents: ${err}`)
  } finally {
    await client.close()
  }
}

main()