import path from "path";

export default () => {
   describe("DOCX Builder", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         // Select the tab "DOCX Builder"
         cy.get('[data-cy^="tab-DOCXBuilder-"]').click();
      });

      it("Downloading", () => {
         cy.get('[data-cy^="docx download"] > .fa-file-word-o')
            .scrollIntoView()
            .should("be.visible")
            .click()
            .then(() => {
               // file path is relative to the working folder
               const filename = path.join(
                  Cypress.config("downloadsFolder"),
                  "DOC.docx",
               );

               // browser might take a while to download the file,
               // so use "cy.readFile" to retry until the file exists
               // and has length - and we assume that it has finished downloading then
               cy.readFile(filename).should("have.length.gt", 500);
            });
      });
   });
};
