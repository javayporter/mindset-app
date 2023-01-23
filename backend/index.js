import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 8800;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Almena#262004",
  database: "mindset-app",
});

app.use(express.json());
app.use(cors);

const dateAdded = () => {
  function minTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = minTwoDigits(date.getMonth() + 1);
  const day = minTwoDigits(date.getDate());
  const hours = minTwoDigits(date.getHours());
  const mins = minTwoDigits(date.getMinutes());
  const secs = minTwoDigits(date.getSeconds());
  const formattedDate = `${year}-${month}-${day} ${hours}:${mins}:${secs}`;
  return formattedDate;
};

app.get("/", (req, res) => {
  res.send("hey, backend.");
});

app.get("/entries", (req, res) => {
  const q = "SELECT * FROM entries";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/entries", (req, res) => {
  const q =
    "INSERT INTO entries(`id`, `date_added`, `title`, `entry`) VALUES (?)";

  // const values = [1, dateAdded(), "Test Title", "Test Entry"];
  const values = [req.body.id, dateAdded(), req.body.title, req.body.entry];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log("connected");
});
