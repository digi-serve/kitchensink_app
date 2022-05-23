export default () => {
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
         cy.get(
            '[data-cy^="ABViewGrid_42938e52-9da9-4ece-b492-deb253244d3e_datatable"]'
         ).scrollIntoView();
         cy.get(".webix_ss_center_scroll").contains("Test Record Rules");
         cy.get(".webix_ss_center_scroll").contains("5");
         cy.get(".webix_ss_center_scroll").contains("Option 2");
         cy.log(
            "'Mr. Admin' is set in a record rule: selected via data collection current-cursor-select. That method is used in almost every module."
         );
         // cy.get(".webix_ss_center_scroll").contains("Mr. Admin");
         cy.get(".webix_ss_center_scroll").find(".fa-square-o");
         cy.get(".trash").click();
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it("Submit Default Values Form", () => {
         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 0181c44e-08ec-4953-beee-d6b36d02b1eb"]'
         )
            .filter(":visible")
            .should("exist")
            .type("Please work")
            .clear()
            .type("Test Default Values");

         cy.get('[data-cy="button save"]').click();
         cy.get(".webix_ss_center_scroll").contains("Test Default Values");
         cy.get(".webix_ss_center_scroll").contains("1");
         cy.get(".webix_ss_center_scroll").contains("Option 3");
         cy.get(".webix_ss_center_scroll").find(".fa-check-square-o");
         cy.get(".trash").click();
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it("Submit Empty Number Field", () => {
         cy.get('[data-cy="button save 0181c44e-08ec-4953-beee-d6b36d02b1eb"]')
            .should("exist")
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
      it.only("Redirect popup on Submit", () => {
         // open the popup
         cy.get(
            '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get(
            '[data-cy="menu-item Form Popup b7ad36af-a9ce-437e-baad-471b90c876ee 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]'
         )
            .should("exist")
            .click();
         cy.get(
            //string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b f407e20f-0f7e-4478-8f9b-d82633d5cf3a
            '[data-cy^="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b"]'
         )
            .filter(":visible")
            .should("exist")
            .type("Please work")
            .clear()
            .type("Test Default Values");

         cy.get('[data-cy^="button save"]') // Auto Generate Record
            .filter(":visible")
            .contains("Redirect to other popup")
            .should("exist")
            .click();

         cy.get(".webix_spin").should("not.exist");
         // record should be generated, and popup should close itself
         // navigate to where data should be:
         // cy.get(
         //    '[data-cy="tab-FormSave-af33a28d-c6a8-4a88-a52a-6d3333c3151f-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         // )
         //    .should("be.visible")
         //    .click();

         cy.get(
            '[data-cy^="number Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2"]'
         )
            .filter(":visible")
            .type("12345678");
         cy.get('[data-cy^="detail text Title"]')
            .filter(":visible")
            .should("contain", "Test Default Values");
         cy.get('[data-cy^="detail checkbox Checkbox"]')
            .filter(":visible")
            .find(".fa-check-square-o");
         // cy.get('[data-cy^="detail text Number"]')
         //    .filter(":visible")
         //    .contains("1");
         cy.get('[data-cy^="detail text Select List"]')
            .filter(":visible")
            .contains("Option 3");

         cy.get('[data-cy^="button save "]').filter(":visible").click();
         cy.get(".webix_spin").should("not.exist");
         cy.get(
            '[data-cy="menu-item Form Popup b7ad36af-a9ce-437e-baad-471b90c876ee 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]'
         ).should("be.visible");
         cy.get(
            '[data-cy^="number Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2"]'
         ).should("not.be.visible");
         // we should have close all of the popups
         // record should be generated, and popup should close itself
         // navigate to where data should be:
         cy.get(
            '[data-cy="menu-item Form Popup b7ad36af-a9ce-437e-baad-471b90c876ee 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]'
         ).should("be.visible");

         // Goto the form view
         cy.get(
            '[data-cy="tab-CSVExporter-72ed2ec9-2b2a-441f-884a-04ec4f2c0760-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .scrollIntoView()
            .click();
         cy.get(
            '[data-cy="tab-FormSave-af33a28d-c6a8-4a88-a52a-6d3333c3151f-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 0181c44e-08ec-4953-beee-d6b36d02b1eb"]'
         ).should("be.visible");
         cy.get(
            '[data-cy^="ABViewGrid_42938e52-9da9-4ece-b492-deb253244d3e_datatable"]'
         ).scrollIntoView();
         cy.get(".webix_ss_center_scroll").contains("Test Default Values");
         cy.get(".webix_ss_center_scroll").contains("12345678");
         cy.get(".webix_ss_center_scroll").contains("Option 3");
         cy.get(".webix_ss_center_scroll").find(".fa-check-square-o");
         cy.get(".trash").click();
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it("Close popup on Submit", () => {
         // open the popup
         cy.get(
            '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get(
            '[data-cy="menu-item Form Popup b7ad36af-a9ce-437e-baad-471b90c876ee 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]'
         )
            .should("exist")
            .click();

         cy.get('[data-cy^="button save"]') // Auto Generate Record
            .contains("Auto Generate Record")
            .should("exist")
            .click();
         cy.get(".webix_spin").should("not.exist");
         // record should be generated, and popup should close itself
         // navigate to where data should be:
         cy.get(
            '[data-cy="menu-item Form Popup b7ad36af-a9ce-437e-baad-471b90c876ee 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]'
         ).should("be.visible");

         cy.get(
            '[data-cy="tab-CSVExporter-72ed2ec9-2b2a-441f-884a-04ec4f2c0760-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .scrollIntoView()
            .click();

         cy.get(
            '[data-cy="tab-FormSave-af33a28d-c6a8-4a88-a52a-6d3333c3151f-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .scrollIntoView()
            .click();

         cy.get(
            '[data-cy^="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b"]'
         ).should("be.visible");
         cy.get(
            '[data-cy^="ABViewGrid_42938e52-9da9-4ece-b492-deb253244d3e_datatable"]'
         ).scrollIntoView();
         cy.get(".webix_ss_center_scroll").contains("Record Rule Data");
         cy.get(".webix_ss_center_scroll").contains("1337");
         cy.get(".webix_ss_center_scroll").contains("Option 3");
         cy.get(".webix_ss_center_scroll").find(".fa-check-square-o");
         cy.get(".trash").click();
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
   });
};
