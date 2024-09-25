export default () => {
   describe("Menu", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      });

      it("Exists", () => {
         cy.get(
            '[data-cy="menu-item KitchenHome cb77ced0-a803-46b7-8a79-f9084d75d51c eac2cff7-5069-4f74-9bd9-523a3b633346"]',
         ).should("include.text", "Home");

         cy.get(
            '[data-cy="menu-item 1 93f39714-7d1b-4375-b5b2-89c94a3e96bd eac2cff7-5069-4f74-9bd9-523a3b633346"]',
         ).should("include.text", "1");

         cy.get(
            '[data-cy="menu-item Carousel e56d4ad0-d879-43c0-934a-a4004fcc7579 eac2cff7-5069-4f74-9bd9-523a3b633346"]',
         ).should("include.text", "Carousel");

         cy.get(
            '[data-cy="menu-item Chart 41d39ac7-e7d9-405d-a570-b79686ccdd5a eac2cff7-5069-4f74-9bd9-523a3b633346"]',
         ).should("include.text", "Chart");

         cy.get('div[view_id^="ABViewContainer_"]')
            .should("include.text", "text")
            .should("include.text", "text2");
      });

      it("Menu Carousel", () => {
         cy.get(
            '[data-cy="menu-item Carousel e56d4ad0-d879-43c0-934a-a4004fcc7579 eac2cff7-5069-4f74-9bd9-523a3b633346"]',
         ).click();

         cy.get(
            '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]',
         ).should("include.text", "Default image");
      });

      it("Menu Chart", () => {
         cy.get(
            '[data-cy="menu-item Chart 41d39ac7-e7d9-405d-a570-b79686ccdd5a eac2cff7-5069-4f74-9bd9-523a3b633346"]',
         ).click({ force: true });

         cy.get('div[view_id^="ABViewChartPie_"]').should("exist");
      });

      it("Menu 1", () => {
         cy.get(
            '[data-cy="menu-item 1 93f39714-7d1b-4375-b5b2-89c94a3e96bd eac2cff7-5069-4f74-9bd9-523a3b633346"]',
         ).click({ force: true });

         cy.get(
            '[data-cy="menu-item KitchenHome cb77ced0-a803-46b7-8a79-f9084d75d51c 5a50210f-767b-461e-9762-66fbc263ec7f"]',
         )
            .should("be.visible")
            .should("include.text", "Home");

         cy.get(
            '[data-cy="menu-item 2 398a96a6-21dc-4ab3-8017-b2754fa979d4 5a50210f-767b-461e-9762-66fbc263ec7f"]',
         )
            .should("be.visible")
            .should("include.text", "2")
            .click();

         cy.get(
            '[data-cy="Popup Close Button 2 398a96a6-21dc-4ab3-8017-b2754fa979d4"]',
         )
            .should("be.visible")
            .should("include.text", "Close")
            .click();
      });
   });
};
