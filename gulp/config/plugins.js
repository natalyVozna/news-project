import replace from "gulp-replace"; // пошук і заміна
import plumber from "gulp-plumber"; // опрац помилок
import notify from "gulp-notify"; // повідомлення (підсказки)
import browsersync from "browser-sync"; // локальний сервер
import newer from "gulp-newer"; // перевіркв оновлень картинок
import ifPlugin from "gulp-if"; // Умовне розгалуження

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
