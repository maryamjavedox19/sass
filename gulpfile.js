const { src, dest, watch, series } = require('gulp')
// src to  sass source file, dest to css outpul file destination
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('index.scss')
    .pipe(sass())   //to compiled into css file
    .pipe(dest('css'))  //going to compile it and out css file and css folder
}

// when we make changes its going to automatically run buildstyle function
function watchTask() {
  watch(['index.scss'], buildStyles)  //1st arg array of files to watch, 2nd arg function we want to run when file changes
}

exports.default = series(buildStyles, watchTask)   //to export them in order