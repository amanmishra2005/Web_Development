const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body><h1>Welcome to Calculator</h1></body>
        <a href="/calculator">Go to Calculator</a>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body><h1>Here is the Calculator</h1></body>
        <form action="/calculate" method="POST">
        <input type="text" name="first" placeholder="Enter first number">
        <input type="text" name="second" placeholder="Enter second number">
        <input type="submit" value="Sum">
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculate" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body><h1>404 - Page Not Found</h1></body>
        <a href="/">Go to Home</a>
      </html>
    `);
  return res.end();
};

exports.requestHandler = requestHandler;
