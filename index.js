const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    fs.readdir('./Files', function(err,files){
        res.render('index', {files : files})
    })
})

app.post('/create', function(req,res){
    fs.writeFile(`./Files/${req.body.title.trim().split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/');
    })
})

app.get('/Files/delete/:filename', function(req,res){
    fs.unlink(`./Files/${req.params.filename}`, function(err){
        res.redirect('/');
    });
})

app.get('/Files/:filename', function(req,res){

    fs.readFile(`./Files/${req.params.filename}`, "utf8" ,function(err, data){
        res.render('showDetails', {filename : req.params.filename, data : data});
    })

})

app.post('/rename', function(req,res){
    const oldName = `./Files/${req.body.oldFileName}`;
    const newName = `./Files/${req.body.title.trim().split(' ').join('')}.txt`;
    fs.rename(oldName,newName, function(err){
        res.redirect(`/Files/${req.body.title.trim().split(' ').join('')}.txt`);
    });
})

app.listen(3000, ()=>{
    console.log("Server is Started..!");
})