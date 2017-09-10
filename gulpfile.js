const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const precss = require('precss');
// const scss = require('postcss-scss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pump = require('pump');
const changed = require('gulp-changed');
// const merge = require('merge-stream');
const header = require('gulp-header');
const footer = require('gulp-footer');
const eslint = require('gulp-eslint');

const atImport = require("postcss-import")

const spritesmith = require('gulp.spritesmith');


const jsSrc = 'src/js/**/*.js';
let jsDest = 'dist/js';
const libSrc = 'src/libs/**/*.js';
let libDest = 'dist/libs';
const cssSrc = ['src/css/**/*.css', '!src/css/**/_*.css'];
let cssDest = 'dist/css';
const fontsSrc = 'src/fonts/**';
let fontsDest = 'dist/fonts';

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('cleanbuild', function () {
  return del([
    'build/**/*'
  ]);
});

gulp.task('lint', () => {
  return gulp.src([jsSrc, libSrc])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      globals: [
        'jQuery',
        '$'
      ],
      envs: [
        'browser',
        'es6'
      ]
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

gulp.task('icons', function () {
  var spriteData = gulp.src('src/icons/*.png').pipe(spritesmith({
    imgName: 'icons.png',
    cssName: 'icons.css',
    padding: 10,
    // cssTemplate: 'src/icons/handlebarsStr.css.handlebars',
    // cssHandlebarsHelpers: {
    //   half: function (num) { return parseInt(num, 10)/2 + 'px'; }
    // }
  }));
  return spriteData.pipe(gulp.dest(process.env.NODE_ENV === 'production' ? 'build/icons' : 'dist/icons/'));
});

gulp.task('css', () => {
  cssDest = process.env.NODE_ENV === 'production' ? 'build/css' : cssDest;
  var processors = [
    atImport(),
    precss(),
    autoprefixer({browsers: AUTOPREFIXER_BROWSERS})
  ];
  if (process.env.NODE_ENV === 'production') {
    processors.push(cssnano({safe: true}));
  }
  return gulp.src(cssSrc)
    // .pipe(changed(cssDest))
    .pipe(postcss(processors))
    .pipe(gulp.dest(cssDest));
})

gulp.task('iconfont', function() {
  fontsDest = process.env.NODE_ENV === 'production' ? 'build/fonts' : fontsDest;
  return gulp.src(fontsSrc)
    .pipe(changed(fontsDest))
    .pipe(gulp.dest(fontsDest));
});

gulp.task('script', (cb) => {
  jsDest = process.env.NODE_ENV === 'production' ? 'build/js' : jsDest;
  let pumpArray = [
    gulp.src(jsSrc),
    changed(jsDest),
    sourcemaps.init(),
    babel({
      presets: [["env", {
        "targets": {
          "browsers": ["last 3 versions", "safari >= 7"]
        }
      }]],
      // plugins: ['transform-runtime']
    }),
    // concat('all.js'),
    sourcemaps.write('.'),
    gulp.dest(jsDest)
  ];
  if (process.env.NODE_ENV === 'production') {
    pumpArray = [
      gulp.src(jsSrc),
      sourcemaps.init(),
      babel({
        presets: [["env", {
          "targets": {
            "browsers": ["last 3 versions", "safari >= 7"]
          }
        }]],
      }),
      // concat('all.min.js'),
      uglify(),
      sourcemaps.write('.'),
      gulp.dest(jsDest)
    ];
  }
  pump(pumpArray, cb);
});

gulp.task('libs', (cb) => {
  // 自己写的 libs 合并到一个文件。
  libDest = process.env.NODE_ENV === 'production' ? 'build/libs' : libDest;
  let pumpArray = [
    gulp.src(libSrc),
    changed(libDest),
    sourcemaps.init(),
    babel({
      presets: ['es2015'],
      plugins: ['transform-runtime']
    }),
    header('(function() {'),
    footer('})();'),
    concat('libs.js'),
    sourcemaps.write('.'),
    gulp.dest(libDest)
  ];
  if (process.env.NODE_ENV === 'production') {
    pumpArray = [
      gulp.src(libDest),
      sourcemaps.init(),
      babel({
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }),
      header('(function() {'),
      footer('})();'),
      concat('libs.min.js'),
      uglify(),
      sourcemaps.write('.'),
      gulp.dest(libDest)
    ];
  }
  pump(pumpArray, cb);
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*.*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(process.env.NODE_ENV === 'production' ? 'build/images' : 'dist/images'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(jsSrc, ['script']);
  gulp.watch(libSrc, ['libs']);
  gulp.watch('src/vendors/**/*.js', ['vendors']);
  gulp.watch(['src/css/**/*.css', 'src/css/**/_*.css'], ['css']);
  gulp.watch(fontsSrc, ['iconfont']);
  gulp.watch('src/images/**/*.*', ['images']);
  gulp.watch('src/icons/*.png', ['icons']);
});

gulp.task('default', ['watch', 'css', 'script', 'libs', 'iconfont', 'images', 'icons'], () => {
  console.log('gulp watching');
});

gulp.task('build', ['cleanbuild'], function() {
  process.env.NODE_ENV = 'production';
	gulp.start('css', 'script', 'libs', 'iconfont', 'images', 'icons');
});
