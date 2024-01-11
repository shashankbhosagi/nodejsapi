const express = require("express");
const ip = require("ip");
const dotenv = require("dotenv");
const cors = require("cors");
const Response = require("./domain/response");
const logger = require("./util/logger");
const HttpStatus = require("./controller/patient.controller");

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "Patient API, v1.0.0 -all systems go",
      "yo"
    )
  );
});

app.listen(PORT, () => {
  logger.info(`Server running on: ${ip.address()}:${PORT}`);
});
