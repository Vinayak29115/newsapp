const express=require("express")
const ejs=require("ejs")
const bodyparser=require("body-parser")
const https=require("https");
const fetch = require("node-fetch");
var path=require("path");
const app=express()

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

let news=[]

app.get("/",async function(req,res){
    const url="https://newsapi.org/v2/top-headlines?country=in&category=Health&apiKey=cf0473208c26450d9ec1a8dee6d5a54c";
        //console.log(response);
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        news = data.articles;
        res.render("index",{items:news});
});
app.get("/business",async(req,res)=>{
    const url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf0473208c26450d9ec1a8dee6d5a54c";
        //console.log(response);
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        news = data.articles;
        res.render("index",{items:news});
});
app.get("/entertainment",async(req,res)=>{
    const url="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cf0473208c26450d9ec1a8dee6d5a54c";
        //console.log(response);
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        news = data.articles;
        res.render("index",{items:news});
});
app.get("/sports",async(req,res)=>{
    const url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cf0473208c26450d9ec1a8dee6d5a54c";
        //console.log(response);
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        news = data.articles;
        res.render("index",{items:news});
});
app.get("/technology",async(req,res)=>{
    const url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cf0473208c26450d9ec1a8dee6d5a54c";
        //console.log(response);
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        news = data.articles;
        res.render("index",{items:news});
});
app.get("/science",async(req,res)=>{
    const url="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cf0473208c26450d9ec1a8dee6d5a54c";
        //console.log(response);
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        news = data.articles;
        res.render("index",{items:news});
});

app.listen("3000",function(){
    console.log("server started at port 3000.")
})
