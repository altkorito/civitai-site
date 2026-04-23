const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.static("public"));

const headers = {
  Authorization: "Bearer YOUR_API_KEY"
};

app.get("/api/model/:id", async (req, res) => {
  try {
    const r = await axios.get(
      `https://civitai.com/api/v1/models/${req.params.id}`,
      { headers }
    );
    res.json(r.data);
  } catch {
    res.status(500).send("Error");
  }
});

app.listen(process.env.PORT || 3000);
