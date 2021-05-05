const express = require("express");
const cors = require("cors");
const path = require("path");
const enforce = require("express-sslify");
const app = express();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res, next) {
  const route = req.url.split("/")[1];
  if (route !== "payment" || route !== "service-worker.js") {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } else {
    next();
  }
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
