const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});