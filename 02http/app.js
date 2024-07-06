/*const http = require('http');

var server = http.createServer(function(req,res){
   res.end("chala rhaa hai")
})
server.listen(3000) */


// Routing in Node.js Directing Requests to Handlers
// Routing mtlb - app alag urls bana skte ho and unpar kya hoga yh bhi tay kar skte hai

const http = require('http');

   if(req.url === '/'){
   res.end("hey")
}
else if(req.url === "/profile"){
   res.end("profile page")
}
else{
   res.end("page not found")
}

server.listen(3000)