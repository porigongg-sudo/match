const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;

// MongoDB接続設定
const mongoUri = process.env.MONGO_URI;
if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log("MongoDB connection error:", err));
}

// フォルダ内のHTMLやCSSをそのまま表示できるようにする設定
app.use(express.static(__dirname));

// アクセスが来たら user_list.html を返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "user_list.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
