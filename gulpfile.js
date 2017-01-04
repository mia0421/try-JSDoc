var gulp = require("gulp");
var bs = require("browser-sync").create();
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var jsdoc = require('gulp-jsdoc3');

var path = {
    ts: ["TypeScripts/**/*.ts","Components/**/*.ts"],
    js: ["TypeScripts/**/*.js","Components/**/*.js"],
    html: ["index.html"],
    build: ["build/output.js", "index.html"],
    all: ["build/output.js", "index.html"]
};

gulp.task("ts", function () {
    return gulp.src(path.ts)
        .pipe(ts());
});

gulp.task("concat", function () {
    return gulp.src(path.js)
        .pipe(concat("output.js"))
        .pipe(gulp.dest("build"));
});

gulp.task('browser-sync', function () {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('doc', function (cb) {
    var config = require('./jsdoc.json');
    gulp.src(["TypeScripts/**/*.js","Components/**/*.js"], {read: false})
        .pipe(jsdoc(config,cb));
});


gulp.task("init", ["concat", "browser-sync", "watch-all"]);

gulp.task("watch-all", function () {
    gulp.watch(path.js, ["concat"]);
    gulp.watch(path.build, ["doc", function () {
        bs.reload();
    }]);
});


