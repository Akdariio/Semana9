var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin');

gulp.task('default', ['demo', 'imagemin']);

gulp.task('demo', function () {
	gulp.src('js/source/*.js')
	.pipe(concat('compilado.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js/build/'))

});

gulp.task("imagemin", function(){
	gulp.src("img/*.jpg")
	.pipe(imagemin())
	.pipe(gulp.dest("imagen"))
});