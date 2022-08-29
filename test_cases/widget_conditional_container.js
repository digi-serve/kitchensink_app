export default () => {
   const TARGET_VIEW_ID = "ABViewConditionalContainer";

   describe("ConditionalContainer", () => {
      beforeEach(() => {
         // Select the Condition container tab
         cy.get(
            'div[webix_tm_id="566273fc-d2ba-481a-b12d-20d50319a57a_menu"]'
         ).click();
      });

      it("Exists", () => {
         cy.get(`div[view_id^="${TARGET_VIEW_ID}"]`).should("exist");
      });

      it("Should display if panel", () => {
         cy.get(
            "[data-cy='number number d327bf3a-c49c-4c0f-981f-7a39fbbb81b0 f36f8849-011c-4fbe-936d-00a872dcea9d']"
         )
            .should("be.visible")
            .type("Warming up")
            .clear()
            .type("1");
         cy.get(
            "[data-cy='button save f36f8849-011c-4fbe-936d-00a872dcea9d']"
         ).click();
         cy.get(`div[view_id^="${TARGET_VIEW_ID}"]`).should("have.text", "<2");
      });

      it("Should display else panel", () => {
         cy.get(
            "[data-cy='number number d327bf3a-c49c-4c0f-981f-7a39fbbb81b0 f36f8849-011c-4fbe-936d-00a872dcea9d']"
         )
            .should("be.visible")
            .type("Warming up")
            .clear()
            .type("11");
         cy.get(
            "[data-cy='button save f36f8849-011c-4fbe-936d-00a872dcea9d']"
         ).click();
         cy.get(`div[view_id^="${TARGET_VIEW_ID}"]`).should("have.text", ">=2");
      });
   });
};
