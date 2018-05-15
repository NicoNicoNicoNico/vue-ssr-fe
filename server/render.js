/* eslint-disable */
const Express = require('express');
const path = require('path');
const fs = require('fs');
const app = Express();

app.use(Express.static(path.join(__dirname, '../dist')));

const { createBundleRenderer } = require('vue-server-renderer');
// const bundle = require('./dist/vue-ssr-server-bundle.json');
// const WindowMock = require('window-mock').default;
// let window = new WindowMock();
// global.window = window;
// global.localStorage = window.localStorage;
// global.document = window.document;

function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, options);
}

function render (req, res) {
  const s = Date.now()
  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    url: req.url,
    data: {
      helloText: 'hello world'
    }
  }

  // In production: create server renderer using template and built server bundle.
  // The server bundle is generated by vue-ssr-webpack-plugin.
  const template = fs.readFileSync(path.join(__dirname, '../template.html'), 'utf-8')

  const bundle = require('../dist/vue-ssr-server-bundle.json');
  
  // The client manifests are optional, but it allows the renderer
  // to automatically infer preload/prefetch links and directly add <script>
  // tags for any async chunks used during render, avoiding waterfall requests.
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })

  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    console.log('---------------')
    
    res.send(html);
    // if (!isProd) {
    //   console.log(`whole request: ${Date.now() - s}ms`)
    // }
  })
}

app.get('*', render);

app.listen(8388, e => {
  console.log('server start on port 8388')
});