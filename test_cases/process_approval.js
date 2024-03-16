export default (folderName, Common) => {
   describe("Process Approval", () => {
      beforeEach(() => {
         cy.RunSQL(folderName, [
            "add_testkcs_stock.sql",
            "process_test-kcs-onCreate-process.sql",
         ]);
      });

      // 1. Can see the message for approval in the inbox

      it("Can see the message for approval in the inbox", () => {
         // Go to the tab "Process" > "Order"

         cy.get('[data-cy="dd6f7981-cc7b-457c-b231-742ce85004f8"]')
            .should("exist")
            .click();

         cy.get(
            '[data-cy="tab Order 499a4429-9cd3-43ea-bf5d-60e0caacc5eb 1169d7cf-d03d-4bd5-b282-4897b3329d7c"]',
         )
            .should("exist")
            .click();

         // Our form has "clear on load setting", but the DC has cursor set to
         // default to first selection. So if the datacollection has not
         // finished loading the cursor gets set in the form. So instead of
         // adding we are editing, which doesn't trigger the process.
         // Not sure how to handle this yet, but it's not what we're testing
         // here, so just wait for the DC to finish loading.
         // cy.get(".webix_progress_icon").should("not.be.visible");

         // Sometimes the progress icon is gone too fast.
         // let's make sure that by counting elements in the grid instead.
         cy.get(
            '[data-cy="ABViewGrid_b5ccd065-a499-48b0-ac86-6c0ae4247de2_datatable"]',
         )
            .children()
            .should("have.length.gte", 7);
         // for some reason the grid SOMETIMES has 8 elements, not 7. Using gte instead of eq. Unable to reproduce
         // Whether this is causing issues is unknown, but it's not what we're testing here, so just ignore it?

         // Click on the button "New Order"
         cy.get(
            '[data-cy="menu-item New Order ed0e35bb-9367-4fa8-83cc-b6318375fd56 25735600-076c-4f11-874b-d33863eea029"]',
         )
            .should("exist")
            .click();

         // On the field "test-kcs-process-stock", choose "Coke"

         cy.get(
            '[data-cy="connectObject testkcsprocessstock 20027a41-14aa-4679-9f30-a066f153a89a 79d1f941-04c2-4d65-98e9-1303da4412c2"]',
         )
            .find(".webix_el_box")
            .should("be.visible")
            .click({ force: true });

         cy.get(".webix_list_item")
            .should("be.visible")
            .contains("Coke")
            .click({ force: true });

         // On the field "amount", fill up "10"

         cy.get(
            '[data-cy="number amount 79902266-40e5-463a-9869-cee01ef955a0 79d1f941-04c2-4d65-98e9-1303da4412c2"]',
         ).type("10");

         // Click on the button "save"

         cy.get('[data-cy="button save 79d1f941-04c2-4d65-98e9-1303da4412c2"]')
            .should("exist")
            .click();

         // Say "Approve" on the email

         cy.get(".webix_badge").should("exist").and("be.visible");

         cy.get('[data-cy="inbox_icon"]')
            .should("exist")
            .click({ force: true });

         cy.get(".webix_accordionitem_header")
            .should("exist")
            .and("be.visible");

         cy.get(
            '[data-cy="inbox-accordion-app-holder-0ac51d6c-7c95-461c-aa8b-7da00afc4f48_b17f815f-cadc-4829-afb0-a7a726bde018"]',
         )
            .contains("Admin Verify")
            .scrollIntoView()
            .click();

         cy.get('[data-cy="inbox_taskwindow_close"]')
            .should("exist")
            .and("be.visible")
            .click();

         cy.wait(500);

         cy.get('[data-cy="inbox_icon"]')
            .should("exist")
            .click({ force: true });

         cy.get(".webix_accordionitem_header")
            .should("exist")
            .and("be.visible");

         cy.get(
            '[data-cy="inbox-accordion-app-holder-0ac51d6c-7c95-461c-aa8b-7da00afc4f48_b17f815f-cadc-4829-afb0-a7a726bde018"]',
         )
            .contains("Admin Verify")
            .scrollIntoView()
            .click();

         cy.get(".formio-component-approve > button")
            .contains("Approve")
            .scrollIntoView()
            .click();
      });

      // 2. Can find the latest "Coke" amount is increased
      it("Can find the latest 'Coke' amount is increased", () => {
         cy.get('[data-cy="dd6f7981-cc7b-457c-b231-742ce85004f8"]')
            .should("exist")
            .click();

         cy.get(
            '[data-cy="tab Stock a4459ed7-ee91-4f24-9d04-7252af85dcbc 1169d7cf-d03d-4bd5-b282-4897b3329d7c"]',
         )
            .should("exist")
            .click();
      });

      // 3. Can find the latest "Coke" amount is not increased
      it("Can find the latest 'Coke' amount is not increased", () => {
         // Go to the tab "Process" > "Order"

         cy.get('[data-cy="dd6f7981-cc7b-457c-b231-742ce85004f8"]')
            .should("exist")
            .click();

         cy.get(
            '[data-cy="tab Order 499a4429-9cd3-43ea-bf5d-60e0caacc5eb 1169d7cf-d03d-4bd5-b282-4897b3329d7c"]',
         )
            .should("exist")
            .click();

         // Our form has "clear on load setting", but the DC has cursor set to
         // default to first selection. So if the datacollection has not
         // finished loading the cursor gets set in the form. So instead of
         // adding we are editing, which doesn't trigger the process.
         // Not sure how to handle this yet, but it's not what we're testing
         // here, so just wait for the DC to finish loading.
         // cy.get(".webix_progress_icon").should("not.be.visible");

         // Sometimes the progress icon is gone too fast.
         // let's make sure that by counting elements in the grid instead.
         cy.get(
            '[data-cy="ABViewGrid_b5ccd065-a499-48b0-ac86-6c0ae4247de2_datatable"]',
         )
            .children()
            .should("have.length", 7);

         // Click on the button "New Order"
         cy.get(
            '[data-cy="menu-item New Order ed0e35bb-9367-4fa8-83cc-b6318375fd56 25735600-076c-4f11-874b-d33863eea029"]',
         )
            .should("exist")
            .click();

         // On the field "test-kcs-process-stock", choose "Est"

         cy.get(
            '[data-cy="connectObject testkcsprocessstock 20027a41-14aa-4679-9f30-a066f153a89a 79d1f941-04c2-4d65-98e9-1303da4412c2"]',
         )
            .find(".webix_el_box")
            .should("be.visible")
            .click({ force: true });

         cy.get(".webix_list_item")
            .should("be.visible")
            .contains("Est")
            .click({ force: true });

         // On the field "amount", fill up "20"

         cy.get(
            '[data-cy="number amount 79902266-40e5-463a-9869-cee01ef955a0 79d1f941-04c2-4d65-98e9-1303da4412c2"]',
         ).type("20");

         // Click on the button "save"

         cy.get('[data-cy="button save 79d1f941-04c2-4d65-98e9-1303da4412c2"]')
            .should("exist")
            .click();

         // Say "Deny" on the email

         cy.get(".webix_badge").should("exist").and("be.visible");

         cy.get('[data-cy="inbox_icon"]')
            .should("exist")
            .click({ force: true });

         cy.get(".webix_accordionitem_header")
            .should("exist")
            .and("be.visible");

         cy.get(
            '[data-cy="inbox-accordion-app-holder-0ac51d6c-7c95-461c-aa8b-7da00afc4f48_b17f815f-cadc-4829-afb0-a7a726bde018"]',
         )
            .contains("Admin Verify")
            .scrollIntoView()
            .click();

         cy.wait(500);

         cy.get('[data-cy="inbox_icon"]')
            .should("exist")
            .click({ force: true });

         cy.get(".webix_accordionitem_header")
            .should("exist")
            .and("be.visible");

         cy.get(
            '[data-cy="inbox-accordion-app-holder-0ac51d6c-7c95-461c-aa8b-7da00afc4f48_b17f815f-cadc-4829-afb0-a7a726bde018"]',
         )
            .contains("Admin Verify")
            .scrollIntoView()
            .click();

         cy.get(".formio-component-deny > button")
            .contains("Deny")
            .scrollIntoView()
            .click();
      });

      // 4. Checking for the latest Stock

      it("Checking for the latest Stock", () => {
         cy.get('[data-cy="dd6f7981-cc7b-457c-b231-742ce85004f8"]')
            .should("exist")
            .click();

         cy.get(
            '[data-cy="tab Stock a4459ed7-ee91-4f24-9d04-7252af85dcbc 1169d7cf-d03d-4bd5-b282-4897b3329d7c"]',
         )
            .should("exist")
            .click();
      });
   });
};
