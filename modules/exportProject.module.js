import JSZip from './jszip.js';
import saveAs from './FileSaver.js';
import MicroAppJs from '../assets/microapp.js';
import AyobaStubJs from '../assets/ayobastub.js';
import Component from './component.class.js';

/**
 * embeds root application into an Html boilerplate and returns html Blob file.
 * @returns {Blob} html content of the file
 */
function createHtmlFile(htmlBody) {
    const HtmlBlob = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>HTML 5 Boilerplate</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
            <link rel="stylesheet" type="text/css" href="./style.css">
            <script src="./scripts/ayobastub.js"></script>
            <script src="./scripts/microapp.js"></script>
          </head>
          <body>
            ${htmlBody}
            <script src="./scripts/script.js"></script>
          </body>
        </html>
                        `
    const file = new Blob(
        [HtmlBlob],
        { type: 'text/html' }
    );
    return file
}
function generatePageBody(pageData) {
    const bodyContainer = document.createElement('body');
    pageData.components.forEach(componentData => {
        const component = new Component(componentData)
        const componentElement = component.getExportableElement()
        bodyContainer.append(componentElement)
    });
    return bodyContainer.innerHTML
}
function generateProjectFiles(projectData) {
    const zip = new JSZip();

    projectData.pages.forEach(page => {
        const pageBodyContent = generatePageBody(page)
        const htmlFile = createHtmlFile(pageBodyContent)
        zip.file(`${page.filename}.html`, htmlFile)
    });
    zip.file("style.css", "/* custom css */");
    zip.file("scripts/script.js", "console.log('Studio microapp Script file')");
    zip.file("scripts/microapp.js", MicroAppJs);
    zip.file("scripts/ayobastub.js", AyobaStubJs);

    zip.generateAsync({ type: "blob" })
    .then(function (blob) {
        saveAs(blob, `${projectData.name}_studio_microapp.zip`);
    });
}
function downloadProject(projectData) {
    //download project
    generateProjectFiles(projectData)
}

export { downloadProject }