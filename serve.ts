import { extname } from "https://deno.land/std/path/mod.ts";

Deno.serve({ port: 8000 }, async (req) => {
    try {
        const url = new URL(req.url);
        const filePath = url.pathname === "/" ? "./index.html" : `.${url.pathname}`;

        const resolvedPath = new URL(filePath, `file://${Deno.cwd()}/`).pathname;
        if (!resolvedPath.startsWith(Deno.cwd())) {
            return new Response("Доступ запрещён", { status: 403 });
        }

        const file = await Deno.readFile(filePath);
        const ext = extname(filePath);
        const contentType = {
            ".html": "text/html",
            ".js": "application/javascript",
            ".css": "text/css",
            ".json": "application/json",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".svg": "image/svg+xml",
        }[ext] ?? "application/octet-stream";

        return new Response(file, {
            status: 200,
            headers: { "content-type": contentType },
        });
    } catch {
        return new Response("Файл не найден", { status: 404 });
    }
});
