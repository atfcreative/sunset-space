const express = require('express');
const app = express();
const port = 4000;

app.use()
app.use()


app.get('/', req, res) => {
    res.send(<h1>Saludos, saludos amigos!</h1>);
    console.log('Hello World');
}

app.listen(port, () => console.log(`Server moonwalking like Mike J. on port ${port}`));

