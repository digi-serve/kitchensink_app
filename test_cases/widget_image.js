export default () => {
   describe("Image", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Image-b2e07f8e-5abe-4cfd-865a-febb5927e0c9-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      });
      it("Exists", () => {
         cy.get('[view_id^="ABViewImage_"]')
            .find("img")
            .should("have.attr", "src")
            .and("include", "789747da-ba6e-42dd-80e8-485e3fbe5b97");
      });
   });
};
