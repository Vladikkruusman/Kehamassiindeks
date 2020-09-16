const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post("/", function(request, response){
    console.log(request.body);
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let result = (num1 / (num2 * num2)).toFixed(3);
    if(result <= 19){
        console.log(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on alakaal`);
        response.send(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on alakaal`);
    }else if(result > 19 && result <= 24.9 ){
        console.log(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on normaalkaal`);
        response.send(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on normaalkaal`);
    }else if(result >= 25 && result <= 29.9 ){
        console.log(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on ülekaal`);
        response.send(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on ülekaal`);
    }else{
        console.log(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on rasvumine`);
        response.send(`${num1}kg / (${num2} * ${num2})m = ${result}(kg/m2), see on rasvumine`);
    }
});

app.listen(5000, function(){
    console.log("Server is running on Port 5000");
});