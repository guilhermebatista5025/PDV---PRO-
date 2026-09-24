import { createServer } from "node:http";
import { readFile, stat, watch } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

// O servidor fica em backend/, mas publica a raiz do projeto.
const root = fileURLToPath(new URL("../", import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".json":"application/json; charset=utf-8", ".svg":"image/svg+xml" };
const liveClients = new Set();
let liveStarted = false;

async function watchChanges() {
  try {
    const watcher = watch(root, { recursive: true });
    for await (const event of watcher) {
      if (!event.filename || /(^|[\\/])(?:\.git|node_modules)(?:[\\/]|$)/i.test(event.filename)) continue;
      for (const client of liveClients) client.write("data: reload\n\n");
    }
  } catch (error) {
    console.warn("Live reload indisponível:", error.message);
  }
}

createServer(async (req, res) => {
  try {
    if (!liveStarted) {
      liveStarted = true;
      watchChanges();
    }
    if (new URL(req.url, "http://" + req.headers.host).pathname === "/__live-reload") {
      res.writeHead(200, {"Content-Type":"text/event-stream; charset=utf-8","Cache-Control":"no-cache","Connection":"keep-alive","Access-Control-Allow-Origin":"*"});
      res.write(": conectado\n\n");
      liveClients.add(res);
      req.on("close", () => liveClients.delete(res));
      return;
    }
    const urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
    const relative = normalize(urlPath === "/" ? "index.html" : urlPath.slice(1));
    if (relative.startsWith("..")) throw new Error("invalid path");
    let file = join(root, relative);
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream", "Cache-Control":"no-cache" });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type":"text/plain; charset=utf-8" });
    res.end("Arquivo não encontrado");
  }
}).listen(port, () => console.log(`ÁguaPro disponível em http://localhost:${port}`));
