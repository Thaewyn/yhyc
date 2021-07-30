const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
