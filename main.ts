import { createApp } from "https://servestjs.org/@v1.0.0/mod.ts";
const app = createApp();
const a: string = "/";

app.handle(a, async (req: any) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: "hello World!",
  });
});
app.listen({ port: 8000 });
