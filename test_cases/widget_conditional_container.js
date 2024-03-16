export default () => {
   describe("ConditionalContainer", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         // Select the Condition container tab
         cy.get(
            'div[webix_tm_id="566273fc-d2ba-481a-b12d-20d50319a57a_menu"]',
         ).click();
      });

      it("Exists", () => {
         cy.get('div[view_id^="ABViewContainer_"]')
            .find('div[view_id$="_batch"]')
            .should("exist");
      });

      it("Should display if panel", () => {
         cy.get(
            "[data-cy='number number d327bf3a-c49c-4c0f-981f-7a39fbbb81b0 f36f8849-011c-4fbe-936d-00a872dcea9d']",
         )
            .should("be.visible")
            .type("Warming up")
            .clear()
            .type("1");
         cy.get(
            "[data-cy='button save f36f8849-011c-4fbe-936d-00a872dcea9d']",
         ).click();
         cy.get(`div[view_id^="ABViewContainer_"]`)
            .find('div[view_id$="_batch"]')
            .should("have.text", "<2");
      });

      it("Should display else panel", () => {
         cy.get(
            "[data-cy='number number d327bf3a-c49c-4c0f-981f-7a39fbbb81b0 f36f8849-011c-4fbe-936d-00a872dcea9d']",
         )
            .should("be.visible")
            .type("Warming up")
            .clear()
            .type("11");
         cy.get(
            "[data-cy='button save f36f8849-011c-4fbe-936d-00a872dcea9d']",
         ).click();
         cy.get(`div[view_id^="ABViewContainer_"]`)
            .find('div[view_id$="_batch"]')
            .should("have.text", ">=2");
      });
   });
};
