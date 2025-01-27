const express = require("express");
const cors = require("cors");
const init = require("./db");
require("dotenv").config();

const requestedTime = require("./middelware/requestedTime");
const certificatesRoute = require("./routes/certificatesRoute");
const sendEmail = require("./routes/sendEmail");
const PORT = process.env.PORT || 4041;

const server = express();

server.use(express.json());
server.use(cors());
server.use(requestedTime);
server.use("/", certificatesRoute);
server.use("/", sendEmail);
init();

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
