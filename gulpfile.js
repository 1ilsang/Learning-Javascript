const gulp = require("gulp");
//걸프 의존성
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");

gulp.task("default", function() {
    //ESLint를 실행.
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
    //노드 소스
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    //브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});