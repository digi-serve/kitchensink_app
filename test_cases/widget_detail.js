export default () => {
   describe("Detail", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Detail-e8bcfd8a-e343-4cf6-82bb-533cafd45c3a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      }); //End beforeEach
      it("Exists", () => {
         cy.get(
            '[data-cy="detail text testkcsid c4f98caa-71c1-4c36-9587-f8db050d2e2f aa1c0a4d-001c-4227-970b-4cf1c676ad20"]',
         )
            .should("include.text", "test-kcs-id")
            // actual -'test-kcs-id'
            .and("include.text", "Test-KCS-", {
               timeout: 50000,
               retryInterval: 500,
            });
      });
   });
};
