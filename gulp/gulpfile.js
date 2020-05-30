const { series, src, dest } = require('gulp');
const babel = require('gulp-babel');

function compile(cb) {
    return src('./test.js')
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(dest('dist'));
}

function defaultTask(cb){
    console.log('default task');
    cb();
}

function clean(cb) {
    cb();
}


function build(cb) {
    cb();
}

exports.default = series([defaultTask, compile]);
exports.build = series([clean, build]);