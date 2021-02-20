module.exports = {
  runtimeCompiler: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'TCL 会员中心',
    },
    css: {
      entry: 'src/css.js',
      template: 'public/css.html',
      filename: 'css.html',
      title: 'css',
    },
  },
};
