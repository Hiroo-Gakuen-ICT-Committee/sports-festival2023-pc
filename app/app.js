const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const app = express()


app.use(express.static("public"))
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(
  session({
    secret: "my_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  if (req.session.status === "ok") {
    res.redirect("/content")
  } else {
    res.render("index.ejs")
  }
});

app.post("/login", (req, res) => {
  if (req.body.id === "hirogaku" && req.body.pass === "hirogaku") {
    req.session.status = "ok"
    res.redirect("/content")
  } else {
    res.render("index.ejs")
  }
})

app.get("/content", (req, res) => {
  if (req.session.status === "ok") {
    res.sendFile(__dirname + '/public/high.html');

  } else {
    res.redirect("/")
  }
})

app.listen(3001);