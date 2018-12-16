'use strict';

require('../../gulp/gulp-init.js')({HTML: '.'});

const comb = require('../../gulp/tasks/comb.js'),
    scss     = require('../../gulp/tasks/scss.js').scss,
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
task('sass', series(scss));
task('watch', watchFiles);