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
   });
};
