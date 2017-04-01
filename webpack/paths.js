const { resolve, join } = require('path');

const cwd = process.cwd();
const srcPath = resolve(cwd, 'src');
const appPath = resolve(srcPath, 'app.js');
const distPath = resolve(cwd, 'dist');
const publicPath = '/';
const appHtml = resolve(cwd, 'public/index.html');
const favicon = join(cwd, 'public/favicon.ico');
const stylesPath = 'css/[name].[contenthash:8].css';

module.exports = {
  srcPath,
  appPath,
  distPath,
  publicPath,
  appHtml,
  favicon,
  stylesPath
};
