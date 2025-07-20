const express = require ("express")
const app = express()

// // Database connection
 require("./database/connection");

// Route imports
// const bookRoute = require("./Routes/bookRoute");
// app.use("/api", bookRoute); // Optional: change "/books" to your desired route path

app.get("/books",function(req,res){
   users.findAll()
   res.json({
    message : "book fetched seccessfully"
   })
})

app.post("/books",function(req,res){
   res.json({
    message : "Book added seccessfully"
   })
})

app.delete("/books/:id",function(req,res){
   res.json({
    message : "Book deleted seccessfully"
   })
})

app.patch("/books/:id",function(req,res){
   res.json({
    message : "Book update seccessfully"
   })
})
postgresql://postgres.jjhvqsbpgkjvbtrsdrvk:@shmit@12@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
// Server start
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
