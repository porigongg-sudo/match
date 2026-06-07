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

// アクセスが来たら index.html を返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/user_list", (req, res) => {
  res.sendFile(path.join(__dirname, "user_list.html"));
});

app.get("/profile_edit", (req, res) => {
  res.sendFile(path.join(__dirname, "profile_edit.html"));
});

app.get("/message", (req, res) => {
  res.sendFile(path.join(__dirname, "message.html"));
});

app.get("/user_detail", (req, res) => {
  res.sendFile(path.join(__dirname, "user_detail.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
