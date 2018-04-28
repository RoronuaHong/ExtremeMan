const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({ extended: true }) ); // to support URL-encoded bodies

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("X-Powered-By", "3.2.1");
    res.header("Access-Control-Allow-Headers", "Content-Type");

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
    const params = req.body;

    res.json({
        id: 1,
        tel: 18606977713
    });
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/users', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.listen(3000, () => console.log("The app to be listening at port 3000!"));
