export default () => {
   const GRID = "ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable";
   describe("Grid", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Grid-e7c04584-4fbd-4ca9-b64b-0f5bcb477c1e-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         )
            .should("exist")
            .click();
      });
      it("Exists", () => {
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_toolbar"]',
         ).should("exist");
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable"]',
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
         cy.GridScroll(GRID, connect_mm.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-mm' column, row 1",
         );

         cy.get(".webix_hcell")
            .contains(connect_mm.col)
            .should("exist")
            .then(($column) => {
               const mmIndex = $column.attr("column");
               cy.get(
                  `.webix_column[column="${mmIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
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

               // cy.get(".webix_button")
               cy.get("@list-test-KCS-ID")
                  // .should("be.visible")
                  .contains("Select")
                  .click();
               cy.get(
                  `.webix_column[column="${mmIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
               )
                  .should("contain", "test-KCS-ID:0000000001")
                  .and("contain", "test-KCS-ID:0000000002");
            });
         // One Side
         cy.GridScroll(GRID, connect_om.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-om' column, row 1",
         );

         cy.get(".webix_hcell")
            .contains(connect_om.col)
            .should("exist")
            .then(($column) => {
               const omIndex = $column.attr("column");

               cy.get(
                  `.webix_column[column="${omIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
               )
                  .should("exist")
                  .click({ force: true });
               cy.get(".webix_view.webix_window.webix_popup")
                  .filter('[style^="display: block"]')
                  .eq(1)
                  .contains("test-KCS-ID:0000000001")
                  .click();
               cy.get(
                  `.webix_column[column="${omIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
               ).should("contain", "test-KCS-ID:0000000001");
            });
      });
      it("Sort a select list field", async () => {
         // click to open the sort popup
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonSort"]',
         )
            .should("exist")
            .click();

         // click to show the Field option list
         cy.get(
            '[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort"]',
         )
            .find('[view_id="sort_1"]')
            .find(".webix_el_combo")
            .should("exist")
            .click();

         // select the Field option item
         cy.get('[webix_l_id="85ac56c3-17d5-48c0-abbb-850838b9a71d"]')
            .should("exist")
            .click();

         // Reorder 'item2' to the top
         const win = await getWindow();
         const $sortForm = win.$$(
            "ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort_form",
         );
         const $orderList = $sortForm.queryView({ view: "list" });
         $orderList.moveTop("item2");
         $orderList.refresh();

         // Assert the order of options
         cy.get(
            '[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort_form"]',
         )
            .find(".webix_list")
            .find(".webix_list_item")
            .first()
            .should("contain", "item2");

         // Assert data
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable"]',
         )
            .find('[column="2"]')
            .find('[aria-rowindex="1"]')
            .should("contain", "text")
            .then(() => {
               // Reorder 'item1' to the top
               $orderList.moveTop("item1");
               $orderList.refresh();
            });

         // Assert the order of options
         cy.get(
            '[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort_form"]',
         )
            .find(".webix_list")
            .find(".webix_list_item")
            .first()
            .should("contain", "item1");

         // Assert
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable"]',
         )
            .find('[column="2"]')
            .find('[aria-rowindex="1"]')
            .should("contain", "text 2");
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
// function gridScroll(id, h, v = 0) {
//    cy.window().then((win) => {
//       return win.$$(id).scrollTo(h, v);
//    });
// }

function getWindow() {
   return new Promise((resolve) => {
      cy.window().then((win) => {
         resolve(win);
      });
   });
}
