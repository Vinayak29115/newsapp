const express=require("express")
const ejs=require("ejs")
const bodyparser=require("body-parser")
const https=require("https");
var path=require("path");
const app=express()

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

let news=[]

app.get("/",function(req,res){
    const url="https://newsapi.org/v2/top-headlines?country=in&category=Health&apiKey=cf0473208c26450d9ec1a8dee6d5a54c";
    
    
    
    https.get(url,function(response){
        //console.log(response);
        response.on("data", function(data){
            news+=data;
        })

        response.on("end", function(){
            finalnews=JSON.parse(news).articles;
            console.log(finalnews);
            res.render("index", {items:finalnews})
        })
    })
});

app.listen("3000",function(){
    console.log("server started at port 3000.")
})