const app = require("./app");
const dotenv = require("dotenv");
const PORT = 5000;
const { default: mongoose } = require("mongoose");

dotenv.config({
  path: `${__dirname}/config.env`,
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
console.log(DB);

// ----------------- Connecting MONGODB database with mongoose.connect() ----------------
mongoose
  .connect(DB)
  .then(con => console.log("Database successfully connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
