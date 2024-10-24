const http = require('http');
const PORT = 8000;
const servidor = http.createServer((req, res) =>
  {
    if (req.url === '/'){
    res.writeHead(404, "Content-Type", "text/html");
    res.write("<h1>Olá, home page!</h1>")
    res.end();
  } else if (req.url === '/sobre'){
        res.writeHead(404, "Content-Type", "text/html");
        res.write("<h1>Sabia mais...</h1>")
        res.end();
}
    });
servidor.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});