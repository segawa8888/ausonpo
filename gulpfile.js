//フォルダパスの設定
const options = {
  SASS_SRC_PATH: "./src/scss",
  SASS_BUILD_PATH: "./common_2024/css",
  JS_SRC_PATH: "./src/js",
  JS_BUILD_PATH: "./src/js/temp",
  JS_PUBLIC_PATH: "./common_2024/js",
  IMG_CMN_SRC_PATH: "./src/img/common_2024",
  IMG_SUB_SRC_PATH: "./src/img/sub",
  IMG_CMN_PUBLIC_PATH: "./common_2024/img",
  IMG_SUB_PUBLIC_PATH: "./pc",
  MINIFY_JS: true,
};
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); //Sassコンパイル
const plumber = require("gulp-plumber"); //エラー時の強制終了を防止
const notify = require("gulp-notify"); //エラー発生時にデスクトップ通知する
const sassGlob = require("gulp-sass-glob"); //@importの記述を簡潔にする
const postcss = require("gulp-postcss"); //autoprefixerとセット
const autoprefixer = require("autoprefixer"); //ベンダープレフィックスの自動付与
const cssdeclsort = require("css-declaration-sorter"); //cssプロパティーの並べ替え
const mqpacker = require("css-mqpacker"); //メディアクエリまとめ
const concat = require("gulp-concat"); //javascriptの結合
const rename = require("gulp-rename"); //リネーム
const uglify = require("gulp-uglify"); //javascriptのminify
const imageMin = require("gulp-imagemin"); //画像の圧縮
const mozjpeg = require("imagemin-mozjpeg"); //.jpegの圧縮対応
const pngquant = require("imagemin-pngquant"); //.pngの圧縮率を上げる
const changed = require("gulp-changed"); //画像の再圧縮を監視
const webp = require("gulp-webp");
const connect = require("gulp-connect"); //localhostの起動
const path = require("path");
const fs = require("fs");

// サブフォルダを取得する関数
function getFolders(dir) {
  return fs.readdirSync(dir).filter(function (subDir) {
    return fs.statSync(path.join(dir, subDir)).isDirectory();
  });
}

// scssのコンパイル
const compileSass = () => {
  const postcssPlugins = [
    autoprefixer({
      // ☆Androidは5以上、その他は最新1バージョンで必要なベンダープレフィックスを付与する
      overrideBrowserslist: ["last 1 versions", "Android >= 9"],
      cascade: false,
    }),
    cssdeclsort({
      order: "alphabetical", //プロパティをソートし直す(アルファベット順)
    }),
    mqpacker(),
  ];
  return gulp
    .src(`${options.SASS_SRC_PATH}/**/*.scss`)
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) //エラーチェック
    .pipe(sassGlob()) //importの読み込みを簡潔にする
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest(`${options.SASS_BUILD_PATH}`)); //コンパイル後の出力先
};
//javascriptの結合
const concatInit = () => {
  return gulp
    .src(`${options.JS_SRC_PATH}/init/*.js`)
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) //エラーチェック
    .pipe(concat("init.js"))
    .pipe(gulp.dest(`${options.JS_BUILD_PATH}`));
};
const concatPlugin = () => {
  return gulp
    .src(`${options.JS_SRC_PATH}/plugin/*.js`)
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) //エラーチェック
    .pipe(concat("plugin.js"))
    .pipe(gulp.dest(`${options.JS_BUILD_PATH}`));
};

const concatScript = () => {
  return gulp
    .src(`${options.JS_SRC_PATH}/script/*.js`)
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) //エラーチェック
    .pipe(concat("script.js"))
    .pipe(gulp.dest(`${options.JS_BUILD_PATH}`));
};

const concatAll = () => {
  return gulp
    .src([`${options.JS_BUILD_PATH}/init.js`, `${options.JS_BUILD_PATH}/plugin.js`, `${options.JS_BUILD_PATH}/script.js`])
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) //エラーチェック
    .pipe(concat("script.js"))
    .pipe(gulp.dest(`${options.JS_PUBLIC_PATH}`));
};

const jsMin = () => {
  return gulp
    .src(`${options.JS_PUBLIC_PATH}/script.js`)
    .pipe(uglify())
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) //エラーチェック
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(gulp.dest(`${options.JS_PUBLIC_PATH}`));
};

const imageTinyCmn = () => {
  return gulp
    .src(`${options.IMG_CMN_SRC_PATH}/**/*.{jpg,jpeg,png,gif,svg}`, { base: options.IMG_CMN_SRC_PATH })
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) //エラーチェック
    .pipe(changed(`${options.IMG_CMN_PUBLIC_PATH}/`))
    .pipe(imageMin([pngquant({ quality: [0.7, 0.8], speed: 1 }), mozjpeg({ quality: 80 }), imageMin.svgo(), imageMin.optipng(), imageMin.gifsicle({ optimizationLevel: 3 })]))
    .pipe(gulp.dest(`${options.IMG_CMN_PUBLIC_PATH}/`))
    .pipe(webp())
    .pipe(gulp.dest(`${options.IMG_CMN_PUBLIC_PATH}/`));
};

// サブフォルダごとの画像処理タスクを生成する関数
function createSubImageTasks(srcPath, baseDestPath) {
  const folders = getFolders(srcPath);

  folders.forEach(function (folder) {
    const destPath = path.join(baseDestPath, folder, "assets/img");

    gulp.task(`imageTinySub-${folder}`, function () {
      return gulp
        .src(path.join(srcPath, folder, "/**/*.+(png|jpg|jpeg|gif|svg)"))
        .pipe(imageMin([pngquant({ quality: [0.7, 0.8], speed: 1 }), mozjpeg({ quality: 80 }), imageMin.svgo(), imageMin.optipng(), imageMin.gifsicle({ optimizationLevel: 3 })]))
        .pipe(gulp.dest(destPath))
        .pipe(webp())
        .pipe(gulp.dest(destPath));
    });
  });
}

// タスクの生成
createSubImageTasks(options.IMG_SUB_SRC_PATH, options.IMG_SUB_PUBLIC_PATH);

// 全てのサブフォルダタスクを監視するタスク
function watchSubFolders() {
  const folders = getFolders(options.IMG_SUB_SRC_PATH);
  folders.forEach(function (folder) {
    gulp.watch(path.join(options.IMG_SUB_SRC_PATH, folder, "/**/*.+(png|jpg|jpeg|gif|svg)"), gulp.series(`imageTinySub-${folder}`));
  });
}

// 開発用サーバーを立ち上げる
function serve(done) {
  connect.server({
    root: "./",
    livereload: true,
    port: 8080,
  });
  done();
}
// HTMLファイルの変更を監視し、リロードするタスク
function reload() {
  return gulp.src("./**/*.html").pipe(connect.reload());
}

// ファイル監視のタスク
function watchFiles() {
  gulp.watch("./*.html", reload);
  gulp.watch(`${options.SASS_SRC_PATH}/**/*.scss`, gulp.series(compileSass));
  gulp.watch(`${options.JS_SRC_PATH}/init/*.js`, gulp.series(concatInit));
  gulp.watch(`${options.JS_SRC_PATH}/plugin/*.js`, gulp.series(concatPlugin));
  gulp.watch(`${options.JS_SRC_PATH}/script/*.js`, gulp.series(concatScript));
  gulp.watch(`${options.JS_BUILD_PATH}/*.js`, gulp.series(concatAll));
  gulp.watch(`${options.JS_PUBLIC_PATH}/script.js`, gulp.series(jsMin));
  gulp.watch(`${options.IMG_CMN_SRC_PATH}/**/*.{jpg,jpeg,png,gif,svg}`, gulp.series(imageTinyCmn));
}

function watch() {
  watchFiles();
  watchSubFolders();
}

// serveとwatchタスクを並行して実行する
const serveAndWatch = gulp.parallel(watch, serve);
exports.default = serveAndWatch;
