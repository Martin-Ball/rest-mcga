const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require("./routes/routes");

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`app port: ${port}`);
});