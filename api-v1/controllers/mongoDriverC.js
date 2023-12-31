const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config();
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);
const collectionMD = client.db('node-api-05').collection('tasks');

const createTaskMDdriver = async (req, res) => {
  try {
    client.connect();
    const x = await collectionMD.insertOne(req.body);
    res.status(201).json(x);
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally{
    await client.close();
  }
}

const getTask = async (req, res) => { // ---> obtener un documento de para ver la estructura
  try {
    client.connect()
    const consulta = await collectionMD.findOne();
    res.status(200).json(consulta);
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally {
    await client.close();
  }
};

const getAllMongoDriver = async (req, res) => {
  try {
    client.connect();
    // this return an object, ---> do this in window because ubuntu is bugged
    const query = await collectionMD.find();
    let send = []
    await query.forEach(doc => send.push(doc));
    res.status(200).json(send);
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally {
    await client.close();
  }
}

const deleteOneMongoDriver = async (req, res) =>{

  try {
    client.connect();
    const id = req.body.id
    const query = { _id: id };
    const result = await collectionMD.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
      res.status(200).json(result);
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
      res.status(500).json({data:`no se encontro el id: ${id}`})
    }
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  }finally{
    await client.close();
  }
}

const deleteWithMongoDriver = async (req, res )=> {
  try {
    client.connect();
    console.log(req.body);
    const name = req.body.name;
    const query = {"name": name};
    console.log(query);
    const result = await collectionMD.deleteOne(query)
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
      res.status(200).json(result);
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
      res.status(500).json({data:`no se encontro el id: ${id}`})
    }
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally{
    await client.close();
  }
}

const deleteParams = async (req, res) => {
  try {
    client.connect();
    //console.log(req.params);
    const idParam = req.params.id;
    const query = {"_id": ObjectId(idParam)};
    // example of query to delete
    // const documentToDelete = { _id: ObjectId("62d6e04ecab6d8e13049749c") }
    console.log(query);
    const result = await collectionMD.deleteOne(query)
    console.log(result);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
      res.status(200).json(result);
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
      res.status(500).json({data:`no se encontro el id: ${idParam}`})
    }
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally{
    await client.close();
  }
}

const putTask = async (req, res) => {
  try {
    client.connect();
    const idParam = req.params.id;
    console.log(idParam);
    const filter = { _id: idParam };
    const options = { upsert: true };
    const nameBody = req.body.name;
    console.log(nameBody);
    const updateDoc = {
      $set: {
        name: nameBody
      }
    };
    const result = await collectionMD.updateOne(filter, updateDoc, options);  
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({msg: `algun problema`})
  } finally{
    await client.close()
  }
}

module.exports = {
  createTaskMDdriver,
  getTask,
  getAllMongoDriver,
  deleteOneMongoDriver,
  deleteWithMongoDriver,
  deleteParams,
  putTask
};
