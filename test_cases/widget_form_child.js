const folderName = __dirname.match(/[^\\/]+$/)[0];

export default () => {
   describe("Save Form Values", () => {
      before(() => {
         cy.RunSQL(folderName, ["form_save_selectable.sql"]);
      });
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-ChildData-d4c3fb66-94ff-4d70-9761-678e6a7d562f-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         )
            .scrollIntoView()
            .click();
      });

      it("Submit Record Rules Form", () => {
         cy.get('[data-cy="button reset cbde3adf-34fd-4358-af49-6e5707f443fa"]')
            .should("be.visible")
            .click();

         // open the add data form
         cy.get(".fa-plus").click();

         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]',
         )
            .should("be.visible")
            .type("314")
            .clear()
            .type("314");

         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]',
         )
            .parent()
            .parent()
            .parent()
            .parent()
            .find('[data-cy^="button save"]')
            .click();

         // cy.get(".webix_spin").should("not.be.visible");
         cy.get(".webix_badge").should("exist");

         // Does newly added data exist in base-form?
         // cy.get(
         //    '[data-cy="connectObject Orders f03063b2-cfab-4778-b356-466810217f21 cbde3adf-34fd-4358-af49-6e5707f443fa"]'
         // )
         cy.get(".editConnectedPage")
            .should("be.visible")
            .parent()
            .contains("TKPO-0000000001");

         // can we open the new data and edit it?
         cy.get(".editConnectedPage").click();

         cy.get('[data-cy^="number amount"]')
            .should("be.visible")
            .should("have.value", "314")
            .clear()
            .type("319");

         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]',
         )
            .parent()
            .parent()
            .parent()
            .parent()
            .find('[data-cy^="button save"]')
            .click();

         cy.get(".editConnectedPage")
            .should("be.visible")
            .parent()
            .contains("TKPO-0000000001");

         cy.get(".editConnectedPage").filter(":visible").click();

         cy.get('[data-cy^="number amount"]')
            .should("be.visible")
            .should("have.value", "319");

         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]',
         )
            .parent()
            .parent()
            .parent()
            .parent()
            .find('[data-cy^="button save"]')
            .click();

         // add reopen add popup and confirm the fields are cleared on load
         cy.get(".fa-plus").click();

         // cy.get('[data-cy=inputField]')
         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]',
         ).should("have.value", "");
         // .should("be.visible")
         // .should("not.contain", "3");
      });
   });
};
