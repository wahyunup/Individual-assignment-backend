const path = require("path")

require("dotenv").config({ path: path.join(__dirname, "../.env")})

const express = require("express");

const app = express();

const authRouter = require("./routes/auth.route")
const kelasRouter = require("./routes/kelas.route")
const matapelajaranRouter = require("./routes/matapelajaran.route")
const babRouter = require("./routes/bab.route")
const subbabRouter = require("./routes/subbab.route")
const materialRouter = require("./routes/material.route")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/kelas", kelasRouter)
app.use("/api/mata_pelajaran", matapelajaranRouter)
app.use("/api/bab", babRouter)
app.use("/api/subbab", subbabRouter)
app.use("/api/material", materialRouter)

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log("server is running")
})