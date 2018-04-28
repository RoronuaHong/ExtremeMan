const express = require("express");
const app = express();

app.all("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", "3.2.1");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    next();
});

const GETMethod = (url, json, mes) => {
    //交换参数
    if(typeof json === "string") {
        mes = json;
        json = undefined;
    }

    app.get(url, (req, res) => {
        const params = req.query;

        json && res.json(json);

        mes && res.send(mes);
    });
}

const POSTMethod = (url, json, mes) => {
    app.post("/abc", (req, res) => {
        const params = req.params;
    });
}

GETMethod("/", "GET method.");

GETMethod("/aa", {
    abc: 1
});

app.post("/abc", (req, res) => {
    console.log(req.query);
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/users', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.listen(3000, () => console.log("The app to be listening at port 3000!"));
