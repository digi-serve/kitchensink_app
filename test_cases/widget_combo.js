export default () => {
   describe("Does combo index work", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Combo-a51c4e1a-6b48-4c4c-a918-abb6faf0f6c0-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         )
            .should("exist")
            .scrollIntoView()
            .click();
      });

      it("pre-existing records work?", () => {
         cy.get(
            '[data-cy="detail text Combined Field 3b3e2150-8151-4d9b-8009-6c5a032b1968 a69d9ebf-194c-4161-ba3c-b7e0b0daebd5"]',
         ).should("be.visible");

         cy.get(".webix_ss_center_scroll")
            .contains("Record A")
            .click({ force: true });

         cy.log("This should be the combination of the other two index fields");
         cy.get(
            '[data-cy="detail text Combined Field 3b3e2150-8151-4d9b-8009-6c5a032b1968 a69d9ebf-194c-4161-ba3c-b7e0b0daebd5"]',
         )
            .should("be.visible")
            .contains("Mr. Admin")
            .contains("Mr. Admin-Record A");

         cy.get(".webix_ss_center_scroll")
            .contains("Record B")
            .click({ force: true });

         cy.get(
            '[data-cy="detail text Combined Field 3b3e2150-8151-4d9b-8009-6c5a032b1968 a69d9ebf-194c-4161-ba3c-b7e0b0daebd5"]',
         )
            .should("be.visible")
            .contains("Mr. Admin-Record B");
      });
      it("new records work?", () => {
         cy.get(".webix_spin").should("not.exist");
         cy.get(
            '[data-cy="detail connected user 1dfb19ef-b689-4d5a-99f1-7cf1b9b524ac a69d9ebf-194c-4161-ba3c-b7e0b0daebd5"]',
         ).as("userMrAdmin");
         cy.get("@userMrAdmin").should("be.visible");
         cy.get("@userMrAdmin").should("contain", "Mr. Admin");
         cy.get('[data-cy^="button reset c44"]')
            .should("be.visible")
            .click({ force: true });
         cy.get(".webix_spin").should("not.exist");
         cy.get(
            '[data-cy="detail connected user 1dfb19ef-b689-4d5a-99f1-7cf1b9b524ac a69d9ebf-194c-4161-ba3c-b7e0b0daebd5"]',
         )
            .should("be.visible")
            .should("not.contain", "Mr. Admin");

         cy.get(
            '[data-cy="connectObject user 1dfb19ef-b689-4d5a-99f1-7cf1b9b524ac c44d50c6-c69c-4cb6-bcea-7f9b04fb51f8"]',
         )
            .should("be.visible")
            .click();
         cy.get(
            '[data-cy^="connectObject options ae071b2a-0370-4dc7-bced-43e1d37171f3"]',
         )
            .should("be.visible")
            .click();

         cy.get(
            '[data-cy^="connectObject Key A d291d2af-20ae-4b37-9201-981932370243"]',
         )
            .find(".webix_el_box")
            .click({ force: true });
         // connectObject options d8dff46b-bfbd-11ec-bdf3-02420a00003e d291d2af-20ae-4b37-9201-981932370243 c44d50c6-c69c-4cb6-bcea-7f9b04fb51f8
         cy.get('[data-cy^="connectObject options"]').should("be.visible");
         cy.get('[data-cy^="connectObject options"]')
            .contains("Record C")
            // .should("be.visible")
            .click({ force: true });

         cy.get(
            '[data-cy^="button save c44d50c6-c69c-4cb6-bcea-7f9b04fb51f8"]',
         ).click();

         cy.get(
            '[data-cy="ABViewGrid_aea67a70-0f21-4d1b-ae1a-a086977b19b1_datatable"]',
         )
            .should("be.visible")
            .contains("Mr. Admin-Record C");
      });
   });
};
