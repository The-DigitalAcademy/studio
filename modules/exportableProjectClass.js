import JSZip from '../scripts/jszip.js';
import saveAs from '../scripts/FileSaver.js';

/** class representing Exportable project */
class ExportableProject {

    #rootApp
    #editOnlyClassList = ['EDITONLY'];
    #editOnlyIdList = [];
    #htmlFile

    /**
     * creates an exportable project ready to be downloaded.
     * @param {Element} rootApp the application root container
     */
    constructor(rootApp) {
        this.#rootApp = rootApp.cloneNode(true)
        this.#htmlFile = this.createHtmlFile()
    }

    /**
     * embeds root application into an Html boilerplate and returns html Blob file.
     * @returns {Blob} html content of the file
     */
    createHtmlFile() {
        this.#removeEditModeElements();

        let rootInnerHtml = this.#rootApp.innerHTML;
        //remove all contenteditable element attributes
        const finalRootHtml = rootInnerHtml.replace(/contenteditable=""/g, "");

        const HtmlBlob =`
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
          </head>
          <body>
            ${finalRootHtml}
            <script src="./script.js"></script>
          </body>
        </html>
                        `
        const file = new Blob(
            [HtmlBlob],
            { type: 'text/html' }
        );
        return file
    }

    /**
     * removes elements with specified class/id names from the rootApp container
     */
    #removeEditModeElements() {
        //remove by class names
        this.#editOnlyClassList.forEach(className => {
            const editOnlyElements = this.#rootApp.querySelectorAll(`.${className}`);
            for (let i = 0; i < editOnlyElements.length; i++) {
                editOnlyElements[i].remove();
            }
        });
        //remove by id names
        this.#editOnlyIdList.forEach(idName => {
            this.#rootApp.getElementById(idName).remove();
        })
    }
    /**
     * returns Url representing the htmlFile to be exported
     * @returns {string}
     */
    getFileUrl() {
        return URL.createObjectURL(this.#htmlFile);
    }
    /**
     * creates a zip folder containing project files and saves it to users computer
     */
    saveZipFolder() {
        const zip = new JSZip();
        zip.file("index.html", this.#htmlFile);
        zip.file("style.css", "/* custom css */");
        zip.file("script.js", "console.log('Studio microapp Script file')");

        zip.generateAsync({type:"blob"})
        .then(function (blob) {
            saveAs(blob, "studio_microapp.zip");
        });
    }
}

export { ExportableProject }