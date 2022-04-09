var gulp = require('gulp');
var server = require('browser-sync').create();

const paths = {
    dirs: {
        build: './dist'
    },
    html: './src/**/*.html'
}

function start(done) {
    console.log('funciona');
    done();
}

function initServer(done) {
    server.init({
        server: {
            baseDir: './dist'
        }
    });
    done();
}

function reload() {
    server.reload();
}

function html() {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.dirs.build))
}

var watcher = gulp.watch(paths.html);
watcher.on('change', function () {
    html();
    server.reload();
})

gulp.task('default', gulp.series(start, initServer, html));
