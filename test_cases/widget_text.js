export default () => {
   describe("Text", () => {
      it("Exists", () => {
         // Select the Text tab
         cy.get(
            '[data-cy^="tab-Text-"]'
         )
            .scrollIntoView()
            .should("be.visible")
            .click();
         cy.get('[view_id^="ABViewText_"]')
            .find('[view_id$="_text"]')
            .should("be.visible")
            .should("have.text", "longtext", { timeout: 50000, retryInterval: 500 });
      });
   });
};
