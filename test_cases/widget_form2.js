import path from "path";

// const ID_DC_TestKCS = "2900d309-e9c3-434f-b937-202d8a972a11";
// const ID_Row1 = "00000000-0000-0000-0000-000000000000";

export default (folderName) => {
   describe("Form2", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Form2-0b61af0d-b34e-4037-bdeb-be280c36aeed-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
         // cy.DCSetCursor(ID_DC_TestKCS, ID_Row1);
      });

      it("adds connection to first record", () => {
         // make sure data is present before continuing
         cy.get(
            '[data-cy="ABViewGrid_bf1509c7-cb5e-458b-93ce-584c0b58f7be_datatable"]',
         ).should("contain", "Two");

         // click first entry
         cy.get(
            '[data-cy="ABViewGrid_bf1509c7-cb5e-458b-93ce-584c0b58f7be_datatable"]',
         )
            .find(
               '.webix_ss_right > .webix_ss_center_scroll > .webix_column > [aria-rowindex="2"]',
            )
            .as("editRow1")
            .should("exist");
         cy.get("@editRow1").click();

         // verify the popup is active
         cy.get(
            '[view_id="ABViewForm_0e02cedb-99ab-47de-b929-f415acf385ef"] > .webix_form',
         ).should("exist");

         // click the connection
         cy.get(
            '[data-cy="connectObject link d6e0aeea-d636-43ec-b439-d412ac823a9c 0e02cedb-99ab-47de-b929-f415acf385ef"] > .webix_el_box',
         ).click();

         // click the Link option
         cy.get(
            '[data-cy="connectObject options b0ff1e8c-8257-4076-a5e9-dff84d6cfe6e d6e0aeea-d636-43ec-b439-d412ac823a9c 0e02cedb-99ab-47de-b929-f415acf385ef"]',
         )
            .as("Link")
            .should("exist")
            .click();

         // verify "Link1" now shows in option box.
         cy.get(
            '[data-cy="connectObject link d6e0aeea-d636-43ec-b439-d412ac823a9c 0e02cedb-99ab-47de-b929-f415acf385ef"] > .webix_el_box > .webix_inp_static',
         ).should("contain", "Link1");

         // click the "select" button
         cy.get(
            ".webix_win_body > .webix_layout_line > .webix_el_button > .webix_el_box > .webix_button",
         )
            .last()
            .should("be.visible")
            .click();

         // click the [Save] button
         cy.get(
            '[data-cy="button save 0e02cedb-99ab-47de-b929-f415acf385ef"]',
         ).click();

         // verify the connection is made
         cy.get(
            '.webix_ss_center > .webix_ss_center_scroll > .webix_last > [aria-rowindex="2"]',
         ).should("contain", "Link1");

         // click Second entry
         cy.get(
            '[data-cy="ABViewGrid_bf1509c7-cb5e-458b-93ce-584c0b58f7be_datatable"]',
         )
            .find(
               '.webix_ss_right > .webix_ss_center_scroll > .webix_column > [aria-rowindex="1"]',
            )
            .as("editRow2")
            .should("exist");
         cy.get("@editRow2").click();

         // verify the popup is active
         cy.get(
            '[view_id="ABViewForm_0e02cedb-99ab-47de-b929-f415acf385ef"] > .webix_form',
         ).should("exist");

         // click the connection
         cy.get(
            '[data-cy="connectObject link d6e0aeea-d636-43ec-b439-d412ac823a9c 0e02cedb-99ab-47de-b929-f415acf385ef"] > .webix_el_box',
         ).click();

         // click the Link option
         cy.get(
            '[data-cy="connectObject options b0ff1e8c-8257-4076-a5e9-dff84d6cfe6e d6e0aeea-d636-43ec-b439-d412ac823a9c 0e02cedb-99ab-47de-b929-f415acf385ef"]',
         )
            .should("exist")
            .click();

         // click the "select" button
         cy.get(
            ".webix_win_body > .webix_layout_line > .webix_el_button > .webix_el_box > .webix_button",
         )
            .last()
            .click();

         // click the [Save] button
         cy.get(
            '[data-cy="button save 0e02cedb-99ab-47de-b929-f415acf385ef"]',
         ).click();

         // verify the connection is made
         cy.get(
            '.webix_ss_center > .webix_ss_center_scroll > .webix_last > [aria-rowindex="1"]',
         ).should("contain", "Link1");

         // verify the connection is made
         cy.get(
            '[data-cy="ABViewGrid_bf1509c7-cb5e-458b-93ce-584c0b58f7be_datatable"]',
         )
            .find(
               '.webix_ss_center > .webix_ss_center_scroll > .webix_last > [aria-rowindex="2"]',
            )
            .should("contain", "Link1");
      });
   });
};
