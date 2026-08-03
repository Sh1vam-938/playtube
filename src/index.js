import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB();













// import express from "express"
// const app =express()
// ( async()=>{   //iffi
//    try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("errror" ,(error) => {
//         console.log("ERRR:" ,error );
//         throw error
//        })
//     app.listen( process.env.PORT,() => {
//         console.log(`APP is listening on porst${process.env.DB_NAMEPORT}`);
//     })
//    }
//    catch (error){
//              console.error("ERROR:",error)
//              throw err
//    }


// })()