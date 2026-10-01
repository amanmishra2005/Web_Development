const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1>Welcome to Myntra</h1>");
    res.write("<p>We are the best online shopping website</p>");
    res.write(
      "<p>We have a wide range of products for men, women, and kids</p>",
    );
    res.write(
      "<p>We have a great collection of clothes, shoes, and accessories</p>",
    );
    res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to Myntra Men Section</h1>");
    res.write("<p>We have a wide range of products for men</p>");
    res.write(
      "<p>We have a great collection of clothes, shoes, and accessories</p>",
    );
    res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to Myntra Women Section</h1>");
    res.write("<p>We have a wide range of products for women</p>");
    res.write(
      "<p>We have a great collection of clothes, shoes, and accessories</p>",
    );
    res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to Myntra Kids Section</h1>");
    res.write("<p>We have a wide range of products for kids</p>");
    res.write(
      "<p>We have a great collection of clothes, shoes, and accessories</p>",
    );
    res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Your Cart is Empty</h1>");
    res.write("<p>You have not added any products to your cart yet</p>");
    res.end();
  }
  res.write(`<html>
    <body>
    <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>`);
  res.end();
});

server.listen(3001, () => {
  console.log("Server is running on address http://localhost:3001");
});
