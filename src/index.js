const express = require("express");
const ip = require("ip");
const dotenv = require("dotenv");
const cors = require("cors");
const { customResponse } = require("./domain/response");
const { log } = require("./util/logger");

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(
    new customResponse(200, "OK", "Patient API, v1.0.0 -all systems go", "yo")
  );
});

app.listen(PORT, () => {
  log.info(`Server running on: ${ip.address()}:${PORT}`);
});
