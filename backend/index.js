const express = require("express");
const connectDB = require("./db");
const cors = require("cors");

connectDB();
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

//Routes:
app.get("/api", (req, res) => {
  res.send("<h1>Note Taking App</h1>");
});

// User routes:
const userRoutes = require("./routes/auth");
app.use("/api/auth", userRoutes);

// Notes routes
const notesRoutes = require("./routes/notes");
app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running is in ${process.env.PORT} mode on ${PORT}..`.yellow
  )
);
