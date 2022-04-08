export default (folderName, Common) => {
   describe.only("Scope", () => {
      it("Filtered scope does not see all Data", () => {
         Common.RunSQL(cy, folderName, "assign_role_filtered.sql");
         reloadToScopePage();
         cy.get(
            '[data-cy="ABViewGrid_8efd05d6-0d0e-4571-bd4c-7c01a66640e5_datatable"]'
         )
            .should("exist")
            .and("contain", "Apple")
            .and("not.contain", "Banana");
      });
      it("Unfiltered scope does sees all Data", () => {
         Common.RunSQL(cy, folderName, "assign_role_unfiltered.sql");
         reloadToScopePage();
         cy.get(
            '[data-cy="ABViewGrid_8efd05d6-0d0e-4571-bd4c-7c01a66640e5_datatable"]'
         )
            .should("exist")
            .and("contain", "Apple")
            .and("contain", "Banana");
      });
      it("When both filtered and unfiltered scopes sees all Data", () => {
         Common.RunSQL(cy, folderName, "assign_role_both.sql");
         reloadToScopePage();
         cy.get(
            '[data-cy="ABViewGrid_8efd05d6-0d0e-4571-bd4c-7c01a66640e5_datatable"]'
         )
            .should("exist")
            .and("contain", "Apple")
            .and("contain", "Banana");
      });
   });
}; //end Export

function reloadToScopePage() {
   cy.reload();
   cy.get('[data-cy="portal_work_menu_sidebar"]').should("be.visible").click();
   cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]')
      .should("be.visible")
      .click();
   cy.get('[data-cy="6995a20a-6804-40ad-85f9-b1a3ec8a1907"]')
      .should("exist")
      .click();
}
