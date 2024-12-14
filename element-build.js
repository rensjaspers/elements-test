const fs = require("fs-extra");
const path = require("path");
const concat = require("concat");

const buildFolder = "./dist/elements-test/browser/"; //end with /
const outputFile = "main.js";

(async function build() {
  // Get file list
  fs.readdir(buildFolder, async (err, fileList) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    let files = [];
    fileList
      .filter((file) => {
        return file.trim().endsWith(".js");
      })
      .forEach((file) => {
        files.push(path.join(buildFolder, file).trim());
      });

    files = sortArray(files);

    const elementsOutputFolder = "dist/elements-test/elements-dist";
    await fs.ensureDir(elementsOutputFolder);
    await concat(files, `${elementsOutputFolder}/${outputFile}`);
    await fs.copyFile(
      `${buildFolder}styles.css`,
      `${elementsOutputFolder}/styles.css`,
    );
    console.log(
      `Element built and can be found in folder "${elementsOutputFolder}"`,
    );
  });
})();

function sortArray(arr) {
  const runtimeIndex = arr.findIndex((item) => item.endsWith("runtime.js"));
  const mainIndex = arr.findIndex((item) => item.endsWith("main.js"));

  if (runtimeIndex !== -1 && mainIndex !== -1) {
    const runtime = arr.splice(runtimeIndex, 1)[0];
    const main = arr.splice(mainIndex, 1)[0];
    arr.push(main);
    arr.unshift(runtime);
  }

  return arr;
}
