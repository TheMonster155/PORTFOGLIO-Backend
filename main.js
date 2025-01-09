const express = require("express");
const cors = require("cors");
const init = require("./db");
require("dotenv").config();

const requestedTime = require("./middelware/requestedTime");
const certificatesRoute = require("./routes/certificatesRoute");

const PORT = process.env.PORT || 4041;

const server = express();

server.use(express.json());
server.use(cors());
server.use(requestedTime);
server.use("/", certificatesRoute);

init();

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
