const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
// connect mongodb server
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// signup schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});
//signup models:
const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("server is connected");
});

// signup
app.post("/signup", async (req, res) => {
  //   console.log(req.body);
  try {
    const { email } = req.body;
    const data = await userModel.findOne({ email: email });

    // console.log(data);
    if (data) {
      res.send({ message: "Email is already Exists", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully Signup", alert: true });
    }
  } catch (err) {
    console.log(err);
  }
});

// api login
app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { email } = req.body;
    const data = await userModel.findOne({ email: email });
    if (data) {
      console.log(data);
      const dataSend = {
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image,
      };
      console.log("hdgh", dataSend);
      res.send({ message: "Successfully Login", alert: true, data: dataSend });
    } else {
      res.send({
        message: "Email is not available, please signup",
        alert: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// product section:

// product schema:
const productSchema = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: Number,
  description: String,
});
// product model:
const productModel=mongoose.model("product",productSchema)

// product api
app.post("/uploadProduct",async(req,res)=>{
  // console.log(req.body)
  try {
    const data = await productModel(req.body);
    const dataSave = await data.save();
    res.send({ message: "Responce is successfully" });
  } catch (err) {
    console.log(err);
  }
});
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});
app.listen(PORT, () => {
  console.log("Server is Running at Port:", PORT);
});
