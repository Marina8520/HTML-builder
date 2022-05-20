
const fs = require('fs');
const path = require('path');

 
var stream = new fs.ReadStream(path.join(__dirname,'text.txt'), {encoding: 'utf-8'});
 
stream.on('readable', function(){
    var data = stream.read();
    if(data != null){
    console.log(data);
    }
});


 /*
stream.on('end', function(){
    console.log("THE END");
});
*/

/*
Первоначальный вариант с readFile, а не ReadStream
var fs = require('fs');
 
fs.readFile("text.txt", function(err, data){
    if(err){
        console.error(err);
    }else{
        console.log(data.toString());
    }
});*/