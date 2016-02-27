/// <binding AfterBuild='moveToLibs' />

var gulp = require('gulp');

var paths = {
    npmSrc: "node_modules/",
    libTarget: "wwwroot/libraries/",
    libTargetAngular2: "wwwroot/libraries/angular2/"
};

var angularLibsToMove = [
   paths.npmSrc + '/systemjs/dist/system.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/reflect-metadata/reflect.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js'
];

gulp.task('moveToLibs', function () {
    return gulp.src(angularLibsToMove).pipe(gulp.dest(paths.libTargetAngular2));
});