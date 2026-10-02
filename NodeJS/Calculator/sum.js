const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body><h1>Sum of ${bodyObj.first} and ${bodyObj.second} is ${result}</h1></body>
    `);
  });
};

exports.sumRequestHandler = sumRequestHandler;
