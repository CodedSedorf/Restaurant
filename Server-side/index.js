require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()
const port = process.env.PORT
const userRouter = require("../Server-side/routes/usersRoute")



//middlewares
app.use(cors());+
app.use(express.json());
app.use("/user", userRouter);


//MongoDB Snippet
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    //database & Collections
    const menuCollections = client.db("food-mern-stack").collection("menus");
    const cartCollections = client.db("food-mern-stack").collection("cartItems");

    //All menu items operations
    app.get("/menu", async(req, res)=>{
        const result = await menuCollections.find().toArray();
        res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);









app.get('/', (req, res) => {
  res.send('Hello World!')
})      





























































app.listen(port, () => {
  console.log(`This app listening on port ${port}`)
})