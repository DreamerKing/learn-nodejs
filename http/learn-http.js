import { createServer } from "http";
import path, { dirname } from "path";
import { readFile } from "fs";
import { fileURLToPath } from "url";
import mime from "mime";

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = createServer((req, res) => {
  console.log(req.url, mime.getType(req.url));

  if (req.url === "/") {
    const content = readFile(
      path.join(__dirname, "../public/index.html"),
      (err, content) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content, "utf8");
      }
    );
  }
});

server.listen(5000, (err) => {
  console.log("server listening on 5000");
});
