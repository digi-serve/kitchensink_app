import path from "path";

export default () => {
   describe("CSV Exporter", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy^="tab-CSVExporter-72ed2ec9-2b2a-441f-884a-04ec4f2c0760-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      }); //End beforeEach

      it("exportCSV.csv should exist in cypress/downloads", () => {
         var index = 0;

         cy.get('button[class="webix_button webix_img_btn"]')
            .find('span[class="webix_icon_btn fa fa-download"]')
            .eq(index)
            .click()
            .then(() => {
               // file path is relative to the working folder
               const filename = path.join(
                  Cypress.config("downloadsFolder"),
                  "exportCSV.csv",
               );
               // browser might take a while to download the file,
               // so use "cy.readFile" to retry until the file exists
               // and has length - and we assume that it has finished downloading then
               cy.readFile(filename).should(
                  "contain",
                  '"10","text","text","longtext"',
               );
            });
      });
   }); //End describe
}; //End Export
