
export default {
  basePath: 'https://virtualkalvi.github.io/my-angular-new2',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
