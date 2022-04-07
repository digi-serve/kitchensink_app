import path from "path";

export default () => {
   describe.only("DOCX Builder", () => {
      beforeEach(() => {
         // Select the tab "DOCX Builder"
         cy.get('[data-cy^="tab-DOCXBuilder-"]').click();
      });

      it("Downloading", () => {
         cy.get(
            '[data-cy="docx download DOCX Builder 40a6c8f2-cf6f-4349-881f-9c9edcac02d7"] > .fa-file-word-o'
         )
            .should("be.visible")
            .click()
            .then(() => {
               // file path is relative to the working folder
               const filename = path.join(
                  Cypress.config("downloadsFolder"),
                  "DOC.docx"
               );

               // browser might take a while to download the file,
               // so use "cy.readFile" to retry until the file exists
               // and has length - and we assume that it has finished downloading then
               cy.readFile(filename).should("have.length.gt", 500);
            });
      });
   });
};
