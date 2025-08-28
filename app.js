const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js running on ECS with EC2!");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});


