const express = require("express");
const app = express();
const ERPfbresponses = require("./model/ERPfbresponses.model");
const port = 3001 || process.env.PORT;
const cors = require("cors");

app.use(cors());

app.use(express.json());



app.post("/insert", (req, res) => {
  const title = req.body.title;
  const ans1 = req.body.ans1;
  const ans2 = req.body.ans2;
  const ans3 = req.body.ans3;
  const ans4 = req.body.ans4;
  const ans5 = req.body.ans5;
  const ans6 = req.body.ans6;
  
  let myRecord = new ERPfbresponses({ activityName: title, question1: ans1, question2: ans2, question3: ans3, question4: ans4,question5:ans5,question6:ans6 });

  try {
    myRecord.save();
    // console.log("Inserted");
    res.json(myRecord);
  } catch (err) {
    console.log(err);
  }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  