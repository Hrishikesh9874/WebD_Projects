const express=require("express");
const app=express();

app.get("/", function(request, response){
    response.send("<h1>Hello World.!!</h1>My name is Hrishikesh");
})

app.get("/contact", function(req, res){
    res.send("This is my contact info");
})

app.get("/about", function(req, res){
    res.send("Hey..Welcome to my about page!!");
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});
