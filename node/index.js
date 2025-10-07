const express = require("express")
const bodyParser = require("body-parser")
const db = require("./db")
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bcrypt = require("bcryptjs");
const crypto = require('crypto');


const app = express()
const port = 3000;

app.use(bodyParser.json())
app.use(cors())
// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Node.js API",
            description: "API Documentation for the CRUD application",
            version: "1.0.0"
        },
           tags: [
            { name: "Auth", description: "Authentication APIs" },
            { name: "Farms", description: "Farms APIs" },
            { name: "Crops", description: "Crops API's" }     
          ]
    },
    apis: ["./index.js"] // Points to the file containing API routes with Swagger comments
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




app.get("/Auth/user", (req, res) => {
    db.query("SELECT * FROM student", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results)
    })
})
app.post("/Auth/register", (req, res) => {
     db.query("SELECT * FROM student", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results)
    })
    console.log("register");
    
})
app.listen(port, () => {
    console.log(`api docs available at http://localhost:${port}`);

})