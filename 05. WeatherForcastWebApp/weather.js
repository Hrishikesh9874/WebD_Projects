const express = require("express");
const https = require("https");
const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");    

})

app.post("/", function(req, res){
    // console.log(req.body.cityName);
    const query=req.body.cityName;
    const apiKey="e419f43b640e8911b23ca6d004067b8b";
    const unit="metric";

    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const weatherDescription=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imgUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";

            res.setHeader("Content-Type", "text/html");
            res.write("<h3>The weather is "+ weatherDescription+" in "+query+" </h3>");
            res.write("<h1>The temperature in "+query+" is "+temp+" degree celcius</h1>");
            res.write("<img src="+imgUrl+">");
            res.send()
        })
    })
})


app.listen(3000, function () {
    console.log("The server is running on port 3000.!!");
})
