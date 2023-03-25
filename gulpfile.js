// main module
import gulp from "gulp";
//import path
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

//передаємо значення в глоб змінну
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// наглядач за змінами у файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  //   gulp.watch(path.watch.html, gulp.series(html, ftp)); //якщо хочемо щоб при зміні html потраляв на север ()
  gulp.watch(path.watch.scss, scss); //gulp.series(scss, ftp)
  gulp.watch(path.watch.js, js); //gulp.series(js, ftp)
  gulp.watch(path.watch.images, images);
}

export { svgSprive };

//послідовне опрацювання шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images)
);

//побудова сценарію виконання завдання
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//експорт сценаріїв
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// виконуємо сценврій за замовчуванням
gulp.task("default", dev);
