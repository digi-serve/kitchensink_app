export default (folderName, Common) => {
   describe("Text", () => {
      it("Exists", () => {
         // Select the Text tab
         cy.get(
            '[data-cy="tab-Text-e6ce7b26-a908-4be6-afb4-8b59d2fee10d-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();
         cy.get('[view_id^="ABViewText_"]')
            .should("be.visible")
            .should("have.text", "longtext");
      });
   });
};
