'use strict';

const fs = require('fs');
let path = "natsuiro matsuri";

const getAllDirFiles = function(dirPath, arrayOfFiles) {
    var files = fs.readdirSync(dirPath)
  
    arrayOfFiles = arrayOfFiles || []
  
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(file)
      }
    })
    return arrayOfFiles
}
  
let result = getAllDirFiles(path+'/API');

var Items = [],max=result.length,rawData,dtda,tes;
for(var d = 0;d<max;d++){
    rawData = fs.readFileSync(path+'/API/'+result[d]);
    dtda = JSON.parse(rawData);
    //reverse position (firstvid = 0)
    tes = dtda.pageInfo.totalResults;
    for(var i=0;i < dtda.items.length;i++){
        dtda.items[i].snippet.position = tes-dtda.items[i].snippet.position;
        Items.push(dtda.items[i]);
    }
}
console.log(tes);
dtda.items = Items;
let data = JSON.stringify(dtda,null,2);
fs.writeFile(path+'/'+path+'.json', data, (err) => {if(err) throw err;console.log('file wrote!')});