'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

//编译 sass
gulp.task('sass',function(){
	return gulp.src('src/*.sass')
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(gulp.dest('build/'));
});

gulp.task('default',['sass'],function(){
	
});