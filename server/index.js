const vueServerRenderer = require('vue-server-renderer');
var fs = require("fs");
const path = require('path');

const p = path.join(__dirname, '../dist/src/Comp.js')
const code = fs.readFileSync(p, 'utf8');

const bundleRenderer = vueServerRenderer.createBundleRenderer(code);

bundleRenderer.renderToString((err, html) => {
  if (err) {
      console.log(err.message);
      console.log(err.stack);
  }
  console.log("success",html);
  // resp.send(html)
});