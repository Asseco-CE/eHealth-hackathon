var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');
var jsonFormat = require('gulp-json-format');
var lineEnding = require('gulp-line-ending-corrector');
 
gulp.task('default', function () {
	gulp.src('Xml/**/*.xml')
		.pipe(xml2json({            
            mergeAttrs: true,
            explicitArray: false
        }))
        // jsonFormat(n) -> n is the number of space characters to use as white space
        .pipe(jsonFormat(4))
        // eolc Desired End of Line character. can be CR (\r), LF(\n) (Default), CRLF(\r\n)
        .pipe(lineEnding({verbose: true, eolc: 'CRLF', encoding:'utf8'}))
		.pipe(rename({extname: '.json'}))
		.pipe(gulp.dest('Json'));
});
