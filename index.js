const fs = require("fs")

fs.writeFileSync("hello.txt", " Hello this is aashu");
let x = fs.readFileSync("hello.txt", "utf-8")
console.log(x);
