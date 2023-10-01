const express = require("express");
const connect = require("./database");
const check = require("./middle");

const app = express();
app.use(express.json());

connect()


const port= 8070;
app.listen(port, ()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})

