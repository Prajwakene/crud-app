const express = require('express');
const mongoose =require('mongoose')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const recordRoutes = require('./routes/recordRoutes');

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection setup
mongoose.connect("mongodb://127.0.0.1:27017/crud-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


// Listen for the MongoDB connection event
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
// Use routes
app.use('/auth', authRoutes);
app.use('/records', recordRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
