// import mongoose from "mongoose";

// mongoose.connect(
//     process.env.DB_URL,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     }
// );

// const db=mongoose.connection;

// const dbOpen=()=>console.log("✅ mongoDB Open");
// const dbError=()=>console.log("❎ mongoDB Failed");

// db.on("error", dbError);
// db.once("open", dbOpen);