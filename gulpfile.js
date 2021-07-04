// Load modules
const gulp = require('gulp')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create()
// const notify = require('gulp-notify')
const postcss = require('gulp-postcss')
const sass = require('gulp-dart-sass')
const sourceMaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

// paths
const path = {
  styles: {
    watch: './scss/**/*.scss'
  },
  scripts: {
    src: ['./js/scripts.js'],
    dest: './sevenalter/js',
    watch: './js/*.js'
  }
}

const multiPaths = {
  main: {
    styles: {
      src: ['./scss/styles.scss'],
      dest: './sevenalter/css/'
    }
  },
  toolbar: {
    styles: {
      src: ['./scss/toolbar.scss'],
      dest: './sevenalter_toolbar/css/'
    }
  }
}

// browserSync watch
function browsersync () {
  browserSync.init({
    port: 3777,
    proxy: 'http://local.drupal9.test',
    reloadDebounce: 1000,
    open: false,
    notify: false,
    ghostMode: false,
    ui: false
  })
}

function reload (done) {
  browserSync.reload()
  done()
}

// Scss : expanded or compressed
function styles (done) {
  Object.keys(multiPaths).forEach(val => {
    gulp.src(multiPaths[val].styles.src)
      .pipe(sourceMaps.init())
      .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', function (err) {
        console.log(err.toString())
        this.emit('end')
      }))
      .pipe(postcss([autoprefixer()]))
      .pipe(sourceMaps.write('./'))
      .pipe(gulp.dest(multiPaths[val].styles.dest))
      .pipe(browserSync.stream())
      // .pipe(notify({
      //   message: 'Sass compiled successfully', onLast: true
      // }))
  })

  done()
}

// Minify JS
function scripts (done) {
  gulp.src(path.scripts.src)
    .pipe(sourceMaps.init())
    .pipe(uglify()).on('error', function (err) {
      console.log(err.toString())
      this.emit('end')
    })
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest(path.scripts.dest))
    .pipe(browserSync.stream())
    // .pipe(notify({
    //   message: 'JS uglified successfully', onLast: true
    // }))

  done()
}

function watchfiles () {
  gulp.watch(path.styles.watch, gulp.series(styles))
  gulp.watch(path.scripts.watch, gulp.series(scripts, reload))
}

gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('default', gulp.parallel(styles, scripts))
gulp.task('watch', gulp.parallel(browsersync, watchfiles))
