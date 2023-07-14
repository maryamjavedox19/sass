const { src, dest, watch, series } = require('gulp')
// src to  sass source file, dest to css outpul file destination
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')


function buildStyles() {
  return src('shinobi/**/*.scss')    //**=look for subfolder */
    .pipe(sass())   //to compiled into css file
    .pipe(purgecss({ content: ['*.html'] }))   //it will look for any public html file and see what css is using in connected
    //  css file if theres some extra css which is not being used in html then it will remove it
    .pipe(dest('css'))  //going to compile it and out css file and css folder
}

// when we make changes its going to automatically run buildstyle function
function watchTask() {
  watch(['shinobi/**/*.scss'], buildStyles)
  //1st arg array of files to watch, 2nd arg function we want to run when file changes
}

exports.default = series(buildStyles, watchTask)   //to export them in order