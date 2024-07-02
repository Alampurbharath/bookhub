import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import getRoute from './route/book.route.js';
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();

// Load environment variables
dotenv.config();

app.use(cors());


// Middleware for parsing JSON
app.use(express.json());

const port = process.env.PORT || 4000;
const uri = process.env.mongoDBURI;

if (!uri) {
  throw new Error('mongoDBURI is not defined in the environment variables');
}

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to database'))
  .catch(error => console.error('Error:', error));

// Define routes
app.use('/book', getRoute);
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
