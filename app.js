const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require("./routes/routes");

app.get('*', function(req, res){
    res.status(404).send('Error, not found path');
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`app port: ${port}`);
});