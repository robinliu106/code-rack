const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "..", "public"); //__dirname is current directory

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
