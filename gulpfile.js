var gulp         = require("gulp"),             // (1)
    less         = require("gulp-less"),        // (2)
    concat       = require("gulp-concat"),      // (3)
    nano         = require("gulp-cssnano"),     // (4)
    browserSync  = require("browser-sync"),     // (5)
    imageMin     = require("gulp-imagemin"),    // (6)
    uglify       = require("gulp-uglify"),      // (7)
    rename       = require("gulp-rename");      // (8)
	autoprefixer = require('gulp-autoprefixer');// (9)

/*    Tasks    */

/*   optimisation mains CSS files  */
gulp.task("optiCSS",function(){
	return gulp.src("src/less/*.less")
	       .pipe(less())
	       .pipe(nano())
	       .pipe(rename({suffix: ".min"}))
		   .pipe(autoprefixer())
	       .pipe(browserSync.reload({stream: true}))
	       .pipe(gulp.dest("dist/css"));
});
/*   optimisation mains HTML files  */
gulp.task("optiHTML", function(){
	return gulp.src("*.html")
	       .pipe(browserSync.reload({stream: true}));
});
/*   optimisation mains JS files  */
gulp.task("optiJS", function(){
	return gulp.src("src/js/*.js")
	       .pipe(uglify())
	       .pipe(rename({suffix: ".min"}))
	       .pipe(browserSync.reload({stream: true}))
	       .pipe(gulp.dest("dist/js"));     
});
/*   optimisation mains HTML files  */
gulp.task("optiImages", function(){
	return gulp.src("src/img/*")
	       .pipe(imageMin())
	       .pipe(gulp.dest("dist/img"));
});
/*   optimisation mains FONTS files  */
gulp.task("optiFonts", function(){
	return gulp.src("src/fonts/**/*")
	       .pipe(gulp.dest("dist/fonts/"));
});
/*   create Sever localhost:3000   */
gulp.task("browserSync",function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});
/*   default main task   */
gulp.task("default",
	gulp.parallel(
		["optiCSS", "optiHTML", "optiJS", 
		"optiImages", "optiFonts", "browserSync"],function(){
	gulp.watch("src/less/*.less",gulp.parallel("optiCSS"));
	gulp.watch("*.html",gulp.parallel("optiHTML"));
	gulp.watch("src/js/*.js",gulp.parallel("optiJS"));
	gulp.watch("src/img/*",gulp.parallel("optiImages"));
	gulp.watch("src/fonts/**/*",gulp.parallel("optiFonts"));
}));
