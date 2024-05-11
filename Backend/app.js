const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))

const port = process.env.port || 3030;

// healthy route
// app.use("/", (req, res) => {
//   res.json({
//     status: "server is running",
//     server: "OK",
//   });
// });

const userRoute = require('./routes/web');
const userLogin = require("./routes/userlogin");
const admin = require("./routes/admin");
const product = require("./routes/product");
const authRoute = require('./routes/authRoutes')

app.use("/api/v1/user", userRoute);
app.use("/api/v1/user",userLogin);
app.use("/api/v1/admin",admin);
app.use("/api/v1/product",product);
app.use("/api/v1/user",authRoute);


// mongodb
mongoose
  .connect(
    "mongodb+srv://server:wOoR1urS0RrW8jWM@cluster0.pcq2fw5.mongodb.net/product"
  )
  .then((res) => console.log("mongodb is connected"))
  .catch((error) => console.log(`Error ${error.message}`));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
