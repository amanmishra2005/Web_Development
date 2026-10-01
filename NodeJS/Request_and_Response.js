const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();  // Stops Event-Loop

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Backend Development</title></head>");
    res.write("<body><h1>This is my Development Journey</h1><body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/topics") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Backend Development</title></head>");
    res.write("<body><h1>NodeJS, ExpressJS, MongoDB</h1><body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Backend Development</title></head>");
  res.write("<body><h1>I am currently Learning Backend Development</h1><body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
