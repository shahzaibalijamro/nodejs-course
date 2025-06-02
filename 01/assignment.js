import http from 'http';

http.createServer((req, res) => {
    const {url,method} = req;
    if (url === "/") {
        res.writeHead(200, {"content-type": "text/html"});
        res.end(`<div>
            <h1>Hello World!</h1>
            <form action="/create-user" method="POST">
            <input type="text" name="username" placeholder="enter a username"/>
            <button type="submit">Create User</button>
            </form>
        </div>`)
    }
    if (url === "/create-user" && method === "POST") {
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk.toString();
        })
        req.on("end", ()=>{
            console.log(body);
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`<h1>${body}</h1>`)
        })
    }
    if (url === "/users") {
        const user = ["umer","shahzaib","raza"];
        const htmlToReturn = user.map((item,index)=>{
            return `<li>user ${index+1}: ${item}</li>`
        }).join("")
        res.writeHead(200, {"content-type": "text/html"});
        res.end(`<ul>${htmlToReturn}</ul>`)
    }
}).listen(3000, () => {
    console.log("Listening on port ", 3000);
})