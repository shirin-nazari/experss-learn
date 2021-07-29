const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Im Shirin Nazari");
});
app.use()
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
