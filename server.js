const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/:id", function(req, res){
  if(req.params.id === "api"){
    res.send("Hello from API");
  } else {
    res.sendStatus(404);
  }
});

app.listen(8000, function(){
  console.log("listening on port 8000");
});
