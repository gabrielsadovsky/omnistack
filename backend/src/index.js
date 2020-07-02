const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3333;
app.use(express.json());

app.use(routes);

app.listen(PORT);
