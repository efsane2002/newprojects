const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const crypto = require("crypto");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

const SiteSchema = new mongoose.Schema({
    name: String,
    paragraf: String,
    imageURL: String,
  });
  const SiteModel = new mongoose.model("Sites", SiteSchema);
 
 

  app.get("/api", (req, res) => {
  res.send("welcome to out API!");
});

//GET- MONGO DB
app.get("/api/site", async (req, res) => {
  const { name } = req.query;
  const sites = await SiteModel.find();
  if (!name) {
    res.status(200).send(sites);
  } else {
    const searchedSites = sites.filter((x) =>
      x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    res.status(200).send(searchedSites);
  }
});
//GET  - MONGO DB
app.get("/api/site/:id", async(req, res) => {
  const { id } = req.params;
  const site = await SiteModel.findById(id)
  res.status(200).send(site);
});
//DELETE - MONGO DB
app.delete("/api/site/:id",async(req, res) => {
  const id = req.params.id;
  //delete
  const deleteSite = await SiteModel.findByIdAndDelete(id);
  res.status(203).send({
    message: `${deleteSite.name} deleted successfully!`,
  });
});
//POST  - MONGO DB
app.post("/api/site", async (req, res) => {
  const { name, paragraf, imageURL } = req.body;
  const newSite = new SiteModel({
    name: name,
    paragraf: paragraf,
    imageURL: imageURL,
  });
  await newSite.save();
  res.status(201).send({
    message: `${newSite.name} posted successfully`,
    payload: newSite,
  });
});
//EDIT- MONGO DB
app.put("/api/site/:id", async(req, res) => {
  const id = req.params.id;
  const { name, paragraf, imageURL } = req.body;
  const updatingSite = {name:name, paragraf:paragraf,imageURL:imageURL};
  await SiteModel.findByIdAndUpdate(id,updatingSite);
  res.status(200).send(`${updatingSite.name} updated successfully!`);
});



PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("Mongo DB connected!");
})