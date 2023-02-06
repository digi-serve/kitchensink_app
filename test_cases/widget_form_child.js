const Common = require("../../../../../setup/common.js");
const folderName = __dirname.match(/[^\\/]+$/)[0];

export default () => {
   describe("Save Form Values", () => {
      before(() => {
         Common.RunSQL(cy, folderName, ["form_save_selectable.sql"]);
      });
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-ChildData-d4c3fb66-94ff-4d70-9761-678e6a7d562f-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .scrollIntoView()
            .click();
      });

      it("Submit Record Rules Form", () => {
         cy.get('[data-cy="button reset cbde3adf-34fd-4358-af49-6e5707f443fa"]')
            .should("be.visible")
            .click();

         cy.get(".fa-plus").click();

         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]'
         )
            .should("be.visible")
            .type("314")
            .clear()
            .type("314");

         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]'
         )
            .parent()
            .parent()
            .parent()
            .parent()
            .find('[data-cy^="button save"]')
            .click();

         // cy.get(".webix_spin").should("not.be.visible");

         cy.get(
            '[data-cy="connectObject Orders f03063b2-cfab-4778-b356-466810217f21 cbde3adf-34fd-4358-af49-6e5707f443fa"]'
         )
            .filter("is.visible")
            .should("be.visible")
            .contains("TPKO-");

         cy.get(".editConnectedPage").click();

         cy.get(
            '[data-cy^="number amount 79902266-40e5-463a-9869-cee01ef955a0"]'
         )
            .should("be.visible")
            .contains("319")
            .clear()
            .type("319");

         cy.get('[data-cy^="button save"]').filter("is.visible").click();

         cy.get(
            '[data-cy="detail connected Orders f03063b2-cfab-4778-b356-466810217f21 5bb081fd-386e-4762-9518-7255b28052b8"]'
         )
            .should("be.visible")
            .contains("TPKO-");
      });
   });
};
