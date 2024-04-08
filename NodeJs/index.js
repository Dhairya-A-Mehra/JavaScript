const http = require("http");

const server = http.createServer((req, res) => {
  // res is a response and rq is request
  console.log(req.url);
  res.end("Hello from the server");
  if (req.url === "/cars") {
    res.end("this is cars");
  } else if (req.url === "/fruits") {
    res.end("this is fruit");
  } else {
    res.end("Hello from the server.");
  }
});

server.listen(8001, "localhost", () => {
  console.log("Server is Started");
});
