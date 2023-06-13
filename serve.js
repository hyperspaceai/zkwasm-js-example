const sirv = require("sirv");
const polka = require("polka");

const assets = sirv("public", {
  dev: true,
  setHeaders(res) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  },
});

const { PORT = 3000 } = process.env;

polka()
  .use(assets)
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
