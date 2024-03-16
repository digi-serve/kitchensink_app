const ID_DC = "63278f55-c2c4-4725-9272-6125e0eb20f6";
// test-kcs-Text Datacollection

const ID_OBJ = "14038fde-cf9d-4627-be3b-31537fb1b181";
// test-kcs-Text Object

const ID_FirstEntry = "9107ee66-3f8e-47a0-8ac3-36d1f2712200";
const ID_SecondEntry = "9107ee66-3f8e-47a0-8ac3-36d1f2712202";

export default () => {
   describe("Text", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         // Select the Text tab
         cy.get('[data-cy^="tab-Text-"]')
            .scrollIntoView()
            .should("be.visible")
            .click();

         // Switch the cursor to the 1st entry:
         cy.DCSetCursor(ID_DC, ID_FirstEntry).then(() => {
            cy.log("Cursor should be changed to First Entry");
         });

         // Make sure the DC is initialized and showing the
         // 1st entry in the text:
         cy.get('[view_id^="ABViewText_"]')
            .find('[view_id$="_text"]')
            .should("be.visible")
            .should("have.text", "Default Text", {
               timeout: 50000,
               retryInterval: 500,
            });
      });

      // NOTE: I have moved this test into the beforeEach()
      // routine as a way to verify the DC is loaded and ready
      // before each of the other tests.

      // it("Exists and displays the first record", () => {
      //    // Select the Text tab
      //    cy.get('[data-cy^="tab-Text-"]')
      //       .scrollIntoView()
      //       .should("be.visible")
      //       .click();
      //    cy.get('[view_id^="ABViewText_"]')
      //       .find('[view_id$="_text"]')
      //       .should("be.visible")
      //       .should("have.text", "Default Text", {
      //          timeout: 50000,
      //          retryInterval: 500,
      //       });
      // });

      it("Updates when there is a change in the cursor", () => {
         // Now lets test changing the cursor and detecting the
         // change.

         // Switch the cursor to the second entry:
         cy.DCSetCursor(ID_DC, ID_SecondEntry).then(() => {
            cy.log("Cursor should be changed to Second Entry");
         });

         // Select the Text tab
         cy.get('[data-cy^="tab-Text-"]')
            .scrollIntoView()
            .should("be.visible")
            .click();

         // make sure the second entry text is there.
         cy.get('[view_id^="ABViewText_"]')
            .find('[view_id$="_text"]')
            .should("be.visible")
            .should("have.text", "Text 2", {
               timeout: 50000,
               retryInterval: 500,
            });
      });

      it("Updates when there is a Stale cursor", () => {
         // Switch the cursor to the second entry:
         cy.DCSetCursor(ID_DC, ID_SecondEntry).then(() => {
            cy.log("Cursor should be changed.");
         });

         // update the text in the second entry
         cy.ModelUpdate(ID_OBJ, ID_SecondEntry, {
            longtext: "Stale Text",
         }).then(() => {
            cy.log("Cursor should be stale.");
         });

         // Select the Text tab
         cy.get('[data-cy^="tab-Text-"]')
            .scrollIntoView()
            .should("be.visible")
            .click();

         // Make sure the updated text is showing
         cy.get('[view_id^="ABViewText_"]')
            .find('[view_id$="_text"]')
            .should("be.visible")
            .should("have.text", "Stale Text", {
               timeout: 50000,
               retryInterval: 500,
            });
      });
   });
};
