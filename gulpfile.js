'use strict';

require('../../gulp/gulp-init.js');

const
  SCSS = './assets/scss',
  CSS  = './assets/css',
  HTML = './',
  JS   = './assets/js';

global.$.path = {
  scss: {
    folder: SCSS + '/',
    files: SCSS + '/**/*.scss',
  },
  css: {
    folder: CSS + '/',
    files: CSS + '/**/*.css',
    filesMin: CSS + '/**/*.min.css',
    mapFolder: CSS + '/',
    mapFiles: CSS + '/**/*.map'
  },
  html: {
    folder: HTML + '',
    files: HTML + '*.html'
  },
  js: {
    folder: JS + '/',
    files: JS + '/**/*.js',
    filesMin: JS + '/**/*.min.js'
  }
};

const comb = require('../../gulp/tasks/comb.js'),
  scss     = require('../../gulp/tasks/scss.js'),
  mincss   = require('../../gulp/tasks/mincss.js'),
  uglifyes = require('../../gulp/tasks/uglify.js').uglifyes,
  { sync, syncInit } = require('../../gulp/tasks/sync.js');

function watchFiles () {
  syncInit();
  watch($.path.scss.files, series(scss, mincss));
  watch([$.path.js.files, '!' + $.path.js.filesMin], series(uglifyes, sync));
  watch($.path.html.files, sync);
}

task('combScss', comb);
task('uglifyEs6', series(uglifyes, sync));
task('sass2minCss', series(scss, mincss));
task('watch', watchFiles);