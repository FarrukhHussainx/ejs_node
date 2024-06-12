import express from "express";
const app = express();

app.use(express.json());

let bowl = ["apple", "orange", "pears"];
app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: "a weak day",
    advice: "its time to work hard",
    fruits: bowl,
  });
});
app.post("/submit", (req, res) => {
  const name = req.body.namex;
  console.log(name);
  res.send(200);
});

app.listen(3000, () => {
  console.log("app listen a 3000");
});
