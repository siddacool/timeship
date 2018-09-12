const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const path = require('path');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const del = require('del');
const workbox = require('workbox-build');
const appPath = require('./dist/public/dist/build/rev-manifest.json');

gulp.task('html-templates', () => {
  gulp.src('./views/*.ejs')
  .pipe(ejs({
    title: 'Timeship',
    jsPath: `${appPath.app.js}`,
    cssPath: `${appPath.app.css}`,
  }))
  .pipe(rename({
    extname: '.html',
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', () => {
  del(['./dist/public/dist/build/**.js',
    './dist/public/dist/build/**.css',
    '!./dist/public/dist/build/app.js',
    '!./dist/public/dist/build/app.css',
    `!./dist/${appPath.app.js}`,
    `!./dist/${appPath.app.css}`,
  ]);
});

gulp.task('generate-service-worker', () => {
  return workbox.generateSW({
    globDirectory: './dist/',
    globPatterns: [
      '**/*.{html,js,css,webmanifest,png,ico}',
    ],
    swDest: './dist/sw.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: new RegExp('https://fonts.googleapis.com/css?family'),
        handler: 'cacheFirst',
      },
      {
        urlPattern: new RegExp('https://sid-maps-api.firebaseapp.com/mapdata'),
        handler: 'staleWhileRevalidate',
      },
    ],
  }).then(({ warnings }) => {
    // In case there are any warnings from workbox-build, log them.
    for (const warning of warnings) {
      console.warn(warning);
    }
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn('Service worker generation failed:', error);
  });
});

gulp.task('sw-files-transfer', () => {
  return gulp
  .src('./resources/sw/*')
  .pipe(gulp.dest('./dist/'));
});

gulp.task('favicon', () => {
  return gulp
  .src('./resources/favicon/*.**')
  .pipe(gulp.dest('./dist/public/dist/favicon/'));
});

gulp.task('svg-make', () => {
  return gulp
  .src('./resources/svg-assets/*.svg')
  .pipe(svgmin((file) => {
    const prefix = path.basename(file.relative, path.extname(file.relative));
    return {
      plugins: [{
        cleanupIDs: {
          prefix: `${prefix}-`,
          minify: true,
        },
      }],
    };
  }))
  .pipe(rename({ prefix: 'icon-' }))
  .pipe(svgstore())
  .pipe(gulp.dest('./views/partials/'));
});
