const express = require('express');
const cors=require('cors')
const app = express()
const PORT = 8000
app.use(cors())
app.use(express.json())









const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://softcar:7yh2ApDUPpxnvA7Z@softopark.ockrkce.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    app.get("/about", async (req, res) => {
      res.send("This is my about route..... ");
    });
        

    



    app.listen(PORT,()=>{
      console.log(`Server is running on port ${PORT}`)
    })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Add cleanup or additional logic if needed
  }
}








run().catch(errors=>{console.log(errors)})




// Export the Express API
module.exports = app