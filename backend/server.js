const express = require("express");
const cors = require("cors");
const { PORT, DATABASE_URL } = require("./config/config");
const app = express();

app.use(cors());
app.get("/", (req, res) => res.send("Hey there!!"));

app.listen(PORT, () => console.log(`On port ${PORT}`));
