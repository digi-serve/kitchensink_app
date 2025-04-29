// const folderName = __dirname.match(/([^\\/]+)[\\/]test_cases$/)[1];

export default () => {
   describe("Save Form Values", () => {
      // This RunSQL commands was previously failing silently, now its
      // fixed, but causes the tests to fail.
      // before(() => {
      //    // cy.RunSQL(folderName, ["form_save_selectable.sql"]);
      // });
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-FormSave-af33a28d-c6a8-4a88-a52a-6d3333c3151f-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      });

      it("Submit Record Rules Form", () => {
         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 7e074587-ddc5-4d34-9f37-a0ab88a4258b"]',
         )
            .should("be.visible")
            .type("Test Record Rules", { delay: 0 });

         cy.get('[data-cy="button save 7e074587-ddc5-4d34-9f37-a0ab88a4258b"]')
            .should("be.enabled")
            .click({ force: true });
         cy.get(
            '[data-cy^="ABViewGrid_42938e52-9da9-4ece-b492-deb253244d3e_datatable"]',
         ).scrollIntoView();
         cy.get(".webix_ss_center_scroll").contains("Test Record Rules");
         cy.get(".webix_ss_center_scroll").contains("5");
         cy.get(".webix_ss_center_scroll").contains("Option 2");
         cy.log(
            "'Mr. Admin' is set in a record rule: selected via data collection current-cursor-select. That method is used in almost every module.",
         );
         // cy.get(".webix_ss_center_scroll").contains("Mr. Admin");
         cy.get(".webix_ss_center_scroll").find(".fa-square-o");
         // this icon seems to be consistently covered by a 'progressbar'
         cy.get(".trash").click({ force: true });
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it("Submit Default Values Form", () => {
         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 0181c44e-08ec-4953-beee-d6b36d02b1eb"]',
         )
            .should("exist")
            .type("Please work")
            .clear()
            .type("Test Default Values");

         cy.get(
            '[data-cy="button save 0181c44e-08ec-4953-beee-d6b36d02b1eb"]',
         ).click();
         cy.get(".webix_ss_center_scroll").contains("Test Default Values");
         cy.get(".webix_ss_center_scroll").contains("1");
         cy.get(".webix_ss_center_scroll").contains("Option 3");
         cy.get(".webix_ss_center_scroll").find(".fa-check-square-o");
         cy.get(".trash").click({ force: true });
         cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it("Submit Empty Number Field", () => {
         cy.get('[data-cy="button save 0181c44e-08ec-4953-beee-d6b36d02b1eb"]')
            .should("exist")
            .click();
         // choose the edit icon in the list (first one)
         cy.get(
            '[data-cy="ABViewGrid_42938e52-9da9-4ece-b492-deb253244d3e_datatable"]  .edit',
         )
            .eq(0)
            .should("be.visible", {
               timeout: 50000,
               retryInterval: 500,
            })
            .click();
         cy.get(
            '[data-cy="detail text Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 ee223876-f1a2-4e69-837e-557ab2a3a3ba"]',
         )
            .should("be.visible")
            .find(".ab-detail-component-holder")
            .should("be.empty");
         cy.get(
            '[data-cy="number Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 c8d8a6fb-783a-409c-949d-ac94c959a49b"]',
         )
            .type("1111")
            .clear()
            .type("20");
         cy.get(
            '[data-cy="button save c8d8a6fb-783a-409c-949d-ac94c959a49b"]',
         ).click();
         cy.get(
            '[data-cy="detail text Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 ee223876-f1a2-4e69-837e-557ab2a3a3ba"]',
         ).contains("20");
         cy.get(
            '[data-cy="number Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 c8d8a6fb-783a-409c-949d-ac94c959a49b"]',
         ).clear();
         cy.get(
            '[data-cy="button save c8d8a6fb-783a-409c-949d-ac94c959a49b"]',
         ).click();
         cy.get(
            '[data-cy="detail text Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 ee223876-f1a2-4e69-837e-557ab2a3a3ba"]',
         )
            .find(".ab-detail-component-holder")
            .should("be.empty");

         // now close the popup
         cy.get(
            '[data-cy="Popup Close Button Edit Form 8cfc7558-4ed0-4ac3-8753-07c37ac1dc7c"]',
         )
            .should("be.visible")
            .click();
      });

      it.skip("conditional record rules - 0", () => {
         cy.get(
            '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();

         // init some data
         cy.get(
            '[data-cy="menu-item initiate sub records 743969bc-cb8f-471e-abcd-1f4511b83815 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]',
         )
            .should("be.visible")
            .click();

         cy.get(
            '[data-cy="number amount 79902266-40e5-463a-9869-cee01ef955a0 a573443e-6b82-4db9-a827-0a772a53af74"]',
         )
            .should("be.visible")
            .type("1")
            .clear()
            .type("185");
         // We have to click one save at a time because the second save button
         // will redirect us to a new view and it may be too late to click the
         // first button at that time.
         cy.get(
            '[data-cy="button save a573443e-6b82-4db9-a827-0a772a53af74"]',
         ).click();

         cy.get(".webix_spin").should("not.exist");

         cy.get(
            '[data-cy="number amount 7c8732a7-9f55-4844-be4e-51978f94d712 63c31c80-81ff-4114-8aec-cd4d43c2533a"]',
         )
            .type("-1")
            .clear()
            .type("-185");

         cy.get('[data-cy="button save 63c31c80-81ff-4114-8aec-cd4d43c2533a"]')
            .should("be.visible")
            .click();

         cy.get(".webix_spin").should("not.exist");

         // pre-setup the data in the popup
         cy.get(
            '[data-cy^="menu-item conditional record rule de0a9a23-8204-4317-9026-97ede2670f79"]',
         )
            .contains("Condition rule")
            .should("be.visible")
            .click();

         cy.get('[data-cy^="connectObject Orders"]').should("be.visible");

         cy.get('[data-cy^="connectObject Orders"] .webix_spin').should(
            "not.exist",
         );

         cy.get('[data-cy^="connectObject Orders"]')
            .click({ force: true })
            .trigger("click");

         cy.get('[data-cy^="connectObject options"]')
            .should("be.visible")
            .first()
            .click({ force: true });

         cy.get(
            '[data-cy^="detail text balance check example b42e1e16-15ff-4c85-abb5-4b2e9d80ff32"]',
         )
            .should("be.visible")
            .click();

         cy.get('[data-cy^="connectObject Processes"]').should("be.visible");
         cy.get('[data-cy^="connectObject Processes"].webix_spin').should(
            "not.exist",
         );

         cy.get('[data-cy^="connectObject Processes"]')
            .click({ force: true })
            .trigger("click");

         cy.get('[data-cy^="connectObject options"]')
            .should("be.visible")
            .first()
            .click({ force: true });

         cy.get(
            '[data-cy^="detail text balance check example b42e1e16-15ff-4c85-abb5-4b2e9d80ff32"]',
         )
            .should("be.visible")
            .click();

         cy.get('[data-cy^="button save"]') // Auto Generate Record
            .contains("Update this record")
            .should("be.visible")
            .click();

         cy.get(".webix_spin").should("not.exist");
         // end pre-setup the data

         // open the popup
         cy.get(
            '[data-cy^="menu-item conditional record rule de0a9a23-8204-4317-9026-97ede2670f79"]',
         )
            .contains("Condition rule")
            .should("be.visible")
            .click();

         cy.get('[data-cy^="button save"]') // Auto Generate Record
            .contains("Update this record")
            .should("be.visible")
            .click();

         cy.get(".webix_spin").should("not.exist");

         cy.get('[view_id="de0a9a23-8204-4317-9026-97ede2670f79"').should(
            "not.be.visible",
         );

         // hack to get the test to pass in headless browser
         cy.wait(100);

         cy.get(
            '[data-cy="menu-item conditional record rule de0a9a23-8204-4317-9026-97ede2670f79 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]',
         )
            .contains("Condition rule")
            .should("be.visible")
            .click();

         cy.get(".webix_spin").should("not.exist");

         cy.get('[view_id="de0a9a23-8204-4317-9026-97ede2670f79"]').should(
            "be.visible",
         );

         // check whether balance check already exists
         cy.get(
            '[data-cy^="detail text balance check example b42e1e16-15ff-4c85-abb5-4b2e9d80ff32"]',
         )
            .contains("0")
            .should("not.contain", "185")
            .should("be.visible");
         //
         cy.get(
            '[data-cy="number Number allow empty b75b3530-b5de-4ca8-b136-0503c4c9a8c2 c7cff6a1-dfed-467c-a3dc-481124f9926d"]',
         )
            .should("be.visible")
            .click()
            .type("111")
            .clear()
            .type("1337");

         cy.get('[data-cy^="button save"]') // Auto Generate Record
            .contains("Submit and Run")
            .should("be.visible")
            .click();

         cy.get(".webix_spin").should("not.exist");

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(10);

         // record should be generated, and popup should close itself
         cy.log(`should automatically navigate to where data is:
         if it doesn't work, submit conditional record rules are totally broken`);
         // are we there?
         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 0181c44e-08ec-4953-beee-d6b36d02b1eb"]',
         )
            // .scrollIntoView()
            .should("be.visible");
         cy.get(
            '[data-cy^="ABViewGrid_42938e52-9da9-4ece-b492-deb253244d3e_datatable"]',
         ).scrollIntoView();
         cy.log(
            "If the record exists, but the data is wrong, it means the forms works -- and the record rules don't",
         );
         cy.get(".webix_ss_center_scroll").contains("Number was zero");
         cy.get(".webix_ss_center_scroll").contains("0");
         // cy.log("This needs to be zero:");
         // cy.get(".webix_ss_center_scroll").should("not.contain", "1337");
         cy.get(".webix_ss_center_scroll").contains("Option 1");
         // cy.get(".webix_ss_center_scroll").find(".fa-check-square-o");
         // cy.get(".trash").click();
         // cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
      it.skip("conditional record rules - greater than 1", () => {
         cy.get(
            '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
         // init some data
         cy.get(
            '[data-cy="menu-item initiate sub records 743969bc-cb8f-471e-abcd-1f4511b83815 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]',
         )
            .should("be.visible")
            .click();

         cy.get(
            '[data-cy="number amount 79902266-40e5-463a-9869-cee01ef955a0 a573443e-6b82-4db9-a827-0a772a53af74"]',
         )
            .should("be.visible")
            .type("1")
            .clear()
            .type("85");
         // button save a573443e-6b82-4db9-a827-0a772a53af74
         cy.get(
            '[data-cy="number amount 7c8732a7-9f55-4844-be4e-51978f94d712 63c31c80-81ff-4114-8aec-cd4d43c2533a"]',
         )
            .type("-1")
            .clear()
            .type("85");
         // click save buttons
         cy.get(
            '[data-cy="button save a573443e-6b82-4db9-a827-0a772a53af74"]',
         ).click();

         cy.get(
            '[data-cy="button save 63c31c80-81ff-4114-8aec-cd4d43c2533a"]',
         ).click();

         cy.get(
            '[data-cy="menu-item conditional record rule de0a9a23-8204-4317-9026-97ede2670f79 88bb72eb-5908-46e5-9c87-1e4c6637e6c7"]',
         )
            .should("be.visible")
            .click();

         cy.get(
            '[data-cy="connectObject Orders f03063b2-cfab-4778-b356-466810217f21 92d50041-cda0-4f3b-a215-c078a50d828a"]',
         )
            .should("be.visible")
            .click();
         cy.get('[data-cy^="connectObject options"]')
            .should("be.visible")
            .first()
            .click();
         cy.get(
            '[data-cy^="detail text balance check example b42e1e16-15ff-4c85-abb5-4b2e9d80ff32"]',
         )
            .filter(":visible")
            .click();

         cy.get(
            '[data-cy^="connectObject Processes d60649b7-d722-47e2-9c9d-40ae1387f5ba 92d50041-cda0-4f3b-a215-c078a50d828a"]',
         ).click();
         cy.get('[data-cy^="connectObject options"]')
            .should("be.visible")
            .first()
            .click();
         cy.get(
            '[data-cy^="detail text balance check example b42e1e16-15ff-4c85-abb5-4b2e9d80ff32"]',
         )
            .filter(":visible")
            .click();
         cy.get('[data-cy^="button save"]') // Auto Generate Record
            .filter(":visible")
            .contains("Update this record")
            .should("exist")
            .click();
         //

         // open the popup
         cy.get(
            '[data-cy^="menu-item conditional record rule de0a9a23-8204-4317-9026-97ede2670f79"]',
         )
            .contains("Condition rule")
            .should("exist")
            .click();
         cy.get(
            '[data-cy^="detail text balance check example b42e1e16-15ff-4c85-abb5-4b2e9d80ff32"]',
         )
            .contains("170.00")
            .should("exist");
         cy.get('[data-cy^="number Number allow"]')
            .filter(":visible")
            .should("exist")
            .type("111")
            .clear()
            .type("1337");

         cy.get('[data-cy^="button save"]') // Auto Generate Record
            .filter(":visible")
            .contains("Submit and Run Record Rules")
            .should("exist")
            .click();
         cy.get(".webix_spin").should("not.exist");

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(100);

         // record should be generated, and popup should close itself
         cy.log(`should automatically navigate to where data is:
         if it doesn't work, submit conditional record rules are totally broken`);
         // are we there?
         cy.get(
            '[data-cy="string Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b 0181c44e-08ec-4953-beee-d6b36d02b1eb"]',
         )
            // .scrollIntoView()
            .should("be.visible");
         cy.get(
            '[data-cy^="ABViewGrid_42938e52-9da9-4ece-b492-deb253244d3e_datatable"]',
         ).scrollIntoView();
         cy.log(
            "If the record exists, but the data is wrong, it means the forms works -- and the record rules don't",
         );
         cy.get(".webix_ss_center_scroll").contains("Number was positive");
         cy.get(".webix_ss_center_scroll").contains("1337");
         cy.get(".webix_ss_center_scroll").contains("Option 2");
         cy.get(".webix_ss_center_scroll").find(".fa-check-square-o");
         cy.get(".webix_ss_center_scroll")
            .contains("1337")
            .click({ force: true });

         // detail text Number 568257d1-a957-49db-bf8f-b88979c9cd79 ee223876-f1a2-4e69-837e-557ab2a3a3ba
         cy.get('[data-cy^="detail text Number allow"]')
            .filter(":visible")
            .should("exist")
            .contains("1337");
         cy.get(
            '[data-cy^="detail text Title 2e7a1c02-141a-4cdd-b93e-62c6c4e4765b"]',
         )
            .filter(":visible")
            .should("exist")
            .contains("Number was positive");
         // TODO support updating data using existing record
         // cy.get(
         //    '[data-cy^="detail text Number 568257d1-a957-49db-bf8f-b88979c9cd79"]'
         // )
         //    .filter(":visible")
         //    .should("exist")
         //    .contains("1337");
         // cy.get(".trash").click();
         // cy.get(".webix_popup_button.confirm").should("be.visible").click();
      });
   });
};
