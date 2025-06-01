import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    const { method, url } = req;
    if (method === "GET" && url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`
            <div>
  <form action="/message" method="POST">
    <input type="text" name="input" placeholder="Enter your message" required />
    <button type="submit">Submit</button>
  </form>
</div>
            `);
        return;
    }
    if (method === "POST" && url === "/message") {
        let body = "";
        req.on("data", chunk => {
            console.log(chunk);
            
            body += chunk.toString();
        });
        req.on("end", () => {
            // res.writeHead(200, { "content-type": "text/plain" });
            // res.end(`You submitted: ${body}`);`
            console.log(`You submitted: ${body}`);
            fs.writeFileSync("message.txt", body.split("=")[1]);
        });
        res.writeHead(303, { "location": "/" });
        res.end();
        return;
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
});