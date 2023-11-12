const express = require('express')

const app = express()
const PORT = 8000


const cors=require('cors')

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
 
    app.get("/about",async (req,res)=>{
      res.send("This is my about route..... ")
    })



    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
  }
}
run().catch(console.dir);


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})


// Export the Express API
module.exports = app