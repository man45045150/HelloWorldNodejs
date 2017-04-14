const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('first middleware' + req.params['id']);

    if(req.headers['test']){
        console.log('test middleware');
        next();
    }else{
        console.log('fail middleware');
        res.end();
    }

    
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get(['/test/','/test/:id'], function(req,res){

    var id = req.params['id']

    var result = {
        'test':'test1',
        'test2':'test2'
    }

    res.send(result);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})