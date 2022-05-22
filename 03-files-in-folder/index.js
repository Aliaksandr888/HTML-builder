const path = require('path');
const fs = require('fs');
const { dirname } = require('path');
//   node 03-files-in-folder

console.log(path.join(__filename))


fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, items) => {
    if (!err) {
        items.forEach((elem) => {
            const fileDir = path.join(__dirname, 'secret-folder', elem.name);
            if(elem.isFile()){
                let fileSize =0;
                fs.stat(fileDir, (err, stats) => {if (!err) {
                    console.log(path.basename(fileDir,path.extname(fileDir)) +
                     " - " +
                      path.extname(fileDir) +
                      ' - '+ stats.size/1000+'kb')}});
            } 
        })
    }
});




