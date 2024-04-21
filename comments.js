// Create web server
// Load comments from file
// Return comments as JSON
// Listen on port 3000
// Run: node comments.js
// Test: curl http://localhost:3000

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  fs.readFile('comments.json', function(err, data) {
    if (err) throw err;
    res.end(data);
  });
}).listen(3000);

console.log('Server running at http://localhost:3000/');