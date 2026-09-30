const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
// }

// http.createServer(function (req, res) {
//   console.log(req);
// });

const server = http.createServer((req, res) => {
  console.log(req);
});

// http.createServer(requestListener);

// server.listen(3000);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
