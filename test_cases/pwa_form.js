export default () => {
   describe("Text", () => {
      it("Exists", () => {
         // Select the Text tab
         cy.get('.page-content')
            .contains("Example Text in a custom widget")
            .should("be.visible");
      });
   });
};
