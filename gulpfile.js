var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');
var jsonFormat = require('gulp-json-format');
 
gulp.task('default', function () {
	gulp.src('Xml/**/*.xml')
		.pipe(xml2json({            
            mergeAttrs: true
        }))
        .pipe(jsonFormat(4))
		.pipe(rename({extname: '.json'}))
		.pipe(gulp.dest('Json'));
});
