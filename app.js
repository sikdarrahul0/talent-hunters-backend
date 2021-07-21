// external  imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// internal imports
const usersRouter = require("./router/usersRouter");
const jobsRouter = require("./router/jobsHandler");
const applyRouter = require("./router/candidateRouter");
const errorHandler = require("./middlewares/common/errorHandler");

dotenv.config();
const app = express();
app.use(cors());

// request parser
app.use(express.json());

// set static folder
app.use(express.static(`${__dirname}/uploads/`));

//Database Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

//Router handler
app.use("/user", usersRouter);
app.use("/job", jobsRouter);
app.use("/apply", applyRouter);

app.get("/", (req, res) => {
  res.send("Welcome To Talent Hunters Server");
});

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
