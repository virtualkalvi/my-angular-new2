
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://virtualkalvi.github.io/my-angular-new2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-angular-new2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 476, hash: '40b0c48826d5159269d4223905a578effa35c37ed0bae0a8579a42f0baaa8925', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 989, hash: '69a1d7c6b7d9724e8fb497dfdcc5ec7ef6544ebe5114004b03bd98d5d088462b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 651, hash: 'fa6825ece0f33e7ac37c12c35e6f9fa7d12eb8d62e6fbb98251a4dd3918a7630', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
