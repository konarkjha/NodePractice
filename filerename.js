var fs=require ('fs');

fs.rename('myfile.txt','myrenamefile.txt',function(err){
if(err) throw err;
console.log('File Renamed!');
});