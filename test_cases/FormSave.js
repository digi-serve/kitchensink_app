export default (folderName, Common) => {
   describe("Save Form Values", () => {
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-FormSave-af33a28d-c6a8-4a88-a52a-6d3333c3151f-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();
      });

      it("Submit Record Rules Form", () => {
         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 7e074587-ddc5-4d34-9f37-a0ab88a4258b"]'
         )
            .should("be.visible")
            .type("Please work")
            .clear()
            .type("Test Record Rules");

         cy.get(
            '[data-cy="button save 7e074587-ddc5-4d34-9f37-a0ab88a4258b"]'
         ).click();
         cy.get(".webix_ss_center_scroll").contains("Test Record Rules");
         cy.get(".webix_ss_center_scroll").contains("5");
         cy.get(".webix_ss_center_scroll").contains("Option 2");
         cy.log(
            "'Mr. Admin' is set in a record rule: selected via data collection current-cursor-select. That method is used in almost every module."
         );
         cy.get(".webix_ss_center_scroll").contains("Mr. Admin");
         cy.get(".webix_ss_center_scroll").find(".fa-square-o");
         cy.get(".trash").click();
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it("Submit Default Values Form", () => {
         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 0181c44e-08ec-4953-beee-d6b36d02b1eb"]'
         )
            .should("be.visible")
            .type("Please work")
            .clear()
            .type("Test Default Values");

         cy.get(
            '[data-cy="button save 0181c44e-08ec-4953-beee-d6b36d02b1eb"]'
         ).click();
         cy.get(".webix_ss_center_scroll").contains("Test Default Values");
         cy.get(".webix_ss_center_scroll").contains("1");
         cy.get(".webix_ss_center_scroll").contains("Option 3");
         cy.get(".webix_ss_center_scroll").find(".fa-check-square-o");
         cy.get(".trash").click();
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it("Submit Empty Number Field", () => {
         cy.get('[data-cy="button save 0181c44e-08ec-4953-beee-d6b36d02b1eb"]')
            .should("be.visible")
            .click();
         cy.get(".edit").should("be.visible").click();
         cy.get(
            '[data-cy="detail text Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 ee223876-f1a2-4e69-837e-557ab2a3a3ba"]'
         )
            .should("be.visible")
            .find(".ab-detail-component-holder")
            .should("be.empty");
         cy.get(
            '[data-cy="number Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 c8d8a6fb-783a-409c-949d-ac94c959a49b"]'
         )
            .type("1111")
            .clear()
            .type("20");
         cy.get(
            '[data-cy="button save c8d8a6fb-783a-409c-949d-ac94c959a49b"]'
         ).click();
         cy.get(
            '[data-cy="detail text Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 ee223876-f1a2-4e69-837e-557ab2a3a3ba"]'
         ).contains("20");
         cy.get(
            '[data-cy="number Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 c8d8a6fb-783a-409c-949d-ac94c959a49b"]'
         ).clear();
         cy.get(
            '[data-cy="button save c8d8a6fb-783a-409c-949d-ac94c959a49b"]'
         ).click();
         cy.get(
            '[data-cy="detail text Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 ee223876-f1a2-4e69-837e-557ab2a3a3ba"]'
         )
            .find(".ab-detail-component-holder")
            .should("be.empty");
      });
   });
};
