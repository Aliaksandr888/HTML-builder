const fs = require('fs');
const path = require('path');
const input = fs.createReadStream(path.join(__dirname,'text.txt'), "utf8"); 
input.on('readable', (err)=>{
    if(err) throw err
    console.log(input.read())
}) 
