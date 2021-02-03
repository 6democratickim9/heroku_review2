const express = require('express')
const app = express();
const port = process.env.PORT || 3000
// http://127.0.0.1:3000/
app.get('/',(req,res) => res.send('WELCOME!'));
// app.get('/welcome',(req,res) =>  {
//     var user_name = req.param('name')
//     res.send('LUULUULUULLUULUUL[' + user_name + ']');
// });
app.get('/service',(req,res) =>  {
    var status = req.param('on')
    res.send('Response message: The system is running [Status:ON]');
});
app.get('/check',(req,res) =>  res.send("NOMNOMNOMONOMONOMNOMONONO"));
app.listen(port,() => console.log('Example app listening on port 3000'))