const express = require("express") ;
const URLrouter = require("./routes/url");
const {connectToMongoDB} = require("./connect");
const url = require("./models/url");
const path = require("path");

const app = express();

//connection
connectToMongoDB("mongodb://localhost:27017/short-url").then(() => console.log("Connected to MongoDB"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

//middlewares

app.use(express.json());

app.get("/test", async (req,res) => {
    const allURLs = await url.find({});
    return res.render("home", {urls: allURLs})
})

app.use("/url", URLrouter);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate(
        {shortId}, {
            $push: {
                visitHistory: {timestamp: Date.now()}
            }
        }
    )

    return res.redirect(entry.redirectURL)
})

app.listen(8000, () => console.log("Server stated at port 8000"));