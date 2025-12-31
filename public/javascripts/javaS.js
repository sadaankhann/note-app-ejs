const fs = require('fs');
const deleteTask = (path_){
    console.log(path_);
    fs.unlink(path_);
}