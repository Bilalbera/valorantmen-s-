const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/videos", (req, res) => {
  res.json([
    {
      id: 1,
      title: "TürkTube Test Videosu",
      views: 1200
    }
  ]);
});

app.listen(4000, () => {
  console.log("API çalışıyor: http://localhost:4000");
});
