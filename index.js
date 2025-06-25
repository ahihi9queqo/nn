const express = require("express");
const cors = require("cors");
const app = express();

let ledStatus = "off";

app.use(cors());
app.use(express.json());

app.get("/api/led", (req, res) => {
  res.json({ status: ledStatus });
});

app.post("/api/led", (req, res) => {
  const { status } = req.body;
  if (status === "on" || status === "off") {
    ledStatus = status;
    return res.json({ message: "Status updated", status });
  }
  res.status(400).json({ error: "Invalid status" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
