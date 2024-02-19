import Utils from "../utils";

export default () => {
   const GRID = "ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable";
   describe("Grid", () => {
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-Grid-e7c04584-4fbd-4ca9-b64b-0f5bcb477c1e-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .should("exist")
            .click();
      });
      it("Exists", () => {
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_toolbar"]'
         ).should("exist");
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable"]'
         ).should("exist");
      });
      it("Can edit connected records", () => {
         // We need to lookup grid cells by column and scroll to a postition.
         // These might change we add/remove/hide/show fields
         const connect_mm = {
            col: "connect-to-another-record-mm", // column property on the .webix_column
            pos: 5000, // pixels to scrollTo
         };
         const connect_om = {
            col: "connect-to-another-record-om",
            pos: 5300,
         };
         // Many Side
         Utils.gridScroll(GRID, connect_mm.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-mm' column, row 1"
         );

         cy.get(".webix_hcell")
            .contains(connect_mm.col)
            .should("exist")
            .then(($column) => {
               const mmIndex = $column.attr("column");
               cy.get(
                  `.webix_column[column="${mmIndex}"] > [role="gridcell"][aria-rowindex="1"]`
               )
                  .should("exist")
                  .click({ force: true });
               cy.get(".webix_view.webix_window.webix_popup")
                  .filter('[style^="display: block"]')
                  .eq(1)
                  .as("list-test-KCS-ID")
                  .contains("test-KCS-ID:0000000001")
                  .click();
               cy.get("@list-test-KCS-ID")
                  .contains("test-KCS-ID:0000000002")
                  .click();
               cy.get(".webix_button").contains("Select").click();
               cy.get(
                  `.webix_column[column="${mmIndex}"] > [role="gridcell"][aria-rowindex="1"]`
               )
                  .should("contain", "test-KCS-ID:0000000001")
                  .and("contain", "test-KCS-ID:0000000002");
            });
         // One Side
         Utils.gridScroll(GRID, connect_om.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-om' column, row 1"
         );

         cy.get(".webix_hcell")
            .contains(connect_om.col)
            .should("exist")
            .then(($column) => {
               const omIndex = $column.attr("column");

               cy.get(
                  `.webix_column[column="${omIndex}"] > [role="gridcell"][aria-rowindex="1"]`
               )
                  .should("exist")
                  .click({ force: true });
               cy.get(".webix_view.webix_window.webix_popup")
                  .filter('[style^="display: block"]')
                  .eq(1)
                  .contains("test-KCS-ID:0000000001")
                  .click();
               cy.get(
                  `.webix_column[column="${omIndex}"] > [role="gridcell"][aria-rowindex="1"]`
               ).should("contain", "test-KCS-ID:0000000001");
            });
      });
   });
};
