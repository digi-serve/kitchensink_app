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
         // These might change we add/remove/hide/show fields.
         const connect_mm = {
            col: 28, // column property on the .webix_column
            pos: 5000, // pixels to scrollTo
         };
         const connect_om = {
            col: 29,
            pos: 5300,
         };
         // Many Side
         gridScroll(GRID, connect_mm.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-mm' column, row 1"
         );
         cy.get(
            `.webix_column[column="${connect_mm.col}"] > [role="gridcell"][aria-rowindex="1"]`
         )
            .should("exist")
            .click({ force: true });
         cy.get(".webix_list").contains("test-KCS-ID:0000000001").click();
         // Click off the select list
         // cy.get(".webix_button").contains("Select").click();
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_globalSearchToolbar"]'
         ).click();
         cy.get(
            `.webix_column[column="${connect_mm.col}"] > [role="gridcell"][aria-rowindex="1"]`
         ).should("contain", "test-KCS-ID:0000000001");
         // We reload here because cypress gets confused when we scroll multiple
         // times in the same grid. We could do this as a seperate test, but
         // that adds overhead.
         cy.reload();
         cy.get(
            '[data-cy="tab-Grid-e7c04584-4fbd-4ca9-b64b-0f5bcb477c1e-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .should("exist")
            .click({ force: true });
         // One Side
         gridScroll(GRID, connect_om.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-om' column, row 1"
         );
         cy.get(
            `.webix_column[column="${connect_om.col}"] > [role="gridcell"][aria-rowindex="1"]`
         )
            .should("exist")
            .click({ force: true });
         cy.get(".webix_list > .webix_scroll_cont")
            .contains("test-KCS-ID:0000000001")
            .should("be.visible")
            .click();
         // cy.get(".webix_button").contains("Select").click();
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_globalSearchToolbar"]'
         ).click();
         cy.get(
            `.webix_column[column="${connect_om.col}"] > [role="gridcell"][aria-rowindex="1"]`
         ).should("contain", "test-KCS-ID:0000000001");
      });
   });
};
/**
 * helper for scrolling in a grid
 * @function gridScroll
 * @param {string} id webix id of the grid
 * @param {int} h horizontal scroll in pixels
 * @param {int=0} v veritcal scroll in pixels
 */
function gridScroll(id, h, v = 0) {
   cy.window().then((win) => {
      return win.$$(id).scrollTo(h, v);
   });
}
