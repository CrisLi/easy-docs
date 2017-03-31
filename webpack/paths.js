const { resolve } = require('path');

const cwd = process.cwd();
const appPath = resolve(cwd, 'src/app.jsx');
const distPath = resolve(cwd, 'dist');
const publicPath = '/';
const appHtml = resolve(cwd, 'public/index.html');
const stylesPath = 'css/styles.css';

module.exports = {
  appPath,
  distPath,
  publicPath,
  appHtml,
  stylesPath
};
