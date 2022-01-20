import "dotenv/config";

import "./db.js";

// Import DB Models

import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log("✅ I'm Running!");
})