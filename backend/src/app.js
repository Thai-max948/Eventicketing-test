const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(
  cors({
     origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api", routes);

app.use(errorMiddleware);

module.exports = app;