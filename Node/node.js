var http = require("http");
var fs = require("fs");
var gethtml = fs.readFileSync("./Project/gmlife/index.html", "utf8",)
var scriptjs = fs.readFileSync("./Project/gmlife/script.js", "utf8",)
// var gethtml = fs.readFileSync("./Project/gmlife/index.html", "utf8",)
// var gethtml = fs.readFileSync("./Project/gmlife/index.html", "utf8",)

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; text/js; charset=utf8'})
    res.end(gethtml,scriptjs);
    
})

server.listen(3000, '127.0.0.1');
console.log("We were connected to port 3000");





// var fstxt = fs.readFileSync("index.html", "utf8");
// var htmlcode = "Html code of this website is /n " + fstxt;
// var write = fs.writeFileSync("abouthtml.txt", htmlcode);
// console.log(write);

// fs.unlink("text.txt", function(){});
// fs.mkdir("Helloworld", function(){});
// fs.rmdir("Helloworld", function(){});

// fs.mkdir("New folder", function(){
//     fs.writeFile("hello.txt", "Hello World!", function(){
//         console.log("All done")
//     })
// })

// fs.rmdir("New folder", function(){
//     console.log("New folder was deleted.")
// });

// fs.mkdir("Only", function(){
//     fs.writeFile("./only/bye.txt", "Bye-Bye", function(){
//         console.log("There isnt any error");
//     } )
// })

// fs.unlink("./Only/bye.txt", function(){});
// fs.rmdir("Only", function(){
//     console.log("Already empty foder was deleted");
// });