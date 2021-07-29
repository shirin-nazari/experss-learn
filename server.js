const express = require("express");
const app = express();
const port = 8080;
// app.get("/", (req, res) => {
//   res.send("Im Shirin Nazari");
// });
app.use("/dog/:id", (req, res) => {
  res.send("<h1>Im Shirin Nazari</h1>");
  console.log(req.params);
});
app.use("/search", (req, res) => {
  res.send(`<h1>req Search : => ${req.query.q}</h1>`);
  console.log(req.query);
});
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
