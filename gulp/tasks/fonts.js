import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      //конвертуємо в .ttf
      .pipe(
        fonter({
          formats: ["ttf"],
        })
      )
      //вигружаємо в вихідну папку
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
    //
  );
};

export const ttfToWoff = () => {
  //шукаємо файли з .ttf
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      //конвертуємо в .woff
      .pipe(
        fonter({
          formats: ["woff"],
        })
      )
      //вигружаємо в папку з результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      //шукаємо файли з .ttf
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
      //конвертуємо в .woff2
      .pipe(ttf2woff2())
      //вигружаємо в папку з результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  );
};

export const fontsStyle = () => {
  //Файл стилів підключення шрифтів
  let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
  //перевіряємо чи існують файли шрифтів
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      //перевіряємо чи існують файл  стилів для підключення шрифтів
      if (!fs.existsSync(fontsFile)) {
        //якщо файлу немаєб створюємо його
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          //записуємо підключення шрифтів у файл стилів
          let fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split("-")[0]
              ? fontFileName.split("-")[0]
              : fontFileName;
            let fontWeight = fontFileName.split("-")[1]
              ? fontFileName.split("-")[1]
              : fontFileName;
            if (fontWeight.toLowerCase() === "thin") {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === "extralight") {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === "medium") {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === "semibold") {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === "bold") {
              fontWeight = 700;
            } else if (fontWeight.toLowerCase() === "extrabold") {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === "black") {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            // fs.appendFile(
            //   fontsFile,
            //   `@font-face {
            //     font-family: swap};
            //     font-display: ${fontName};
            //     src: url("../fonts/${fontFileName}.woff2") format("woff2), url("../fonts/${fontFileName}");
            //     font-weight: ${fontWeight};
            //     font-style: normal;
            //   }\r\n`,
            //   cb
            // );

            fs.appendFile(
              fontsFile,
              `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
              cb
            );

            newFileOnly = fontFileName;
          }
        }
      } else {
        //якщо файд є - показуємо повідомлення
        console.log(
          " Файл scss/fonts.scss вже існує. Для оновлення потрібно його видалити"
        );
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() {}
};
