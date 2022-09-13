export default () => {
   describe("Detail", () => {
      it.only("Exists", () => {
         cy.get(
            '[data-cy="tab-Detail-e8bcfd8a-e343-4cf6-82bb-533cafd45c3a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get(
            '[data-cy="detail text testkcsid c4f98caa-71c1-4c36-9587-f8db050d2e2f aa1c0a4d-001c-4227-970b-4cf1c676ad20"]'
         )
            .should("include.text", "test-kcs-id")
            .and("include.text", "Test-KCS-");
         // multi users
         cy.get(
            '[data-cy="detail connected usermulti e6c71124-ebf5-4ec6-959c-4811aed94782 aa1c0a4d-001c-4227-970b-4cf1c676ad20"]'
         ).should("include.text", "admin");
         // single user
         cy.get(
            '[data-cy="detail text user 158fddff-d8d6-452a-8804-d032768a9f40 aa1c0a4d-001c-4227-970b-4cf1c676ad20"]'
         ).should("include.text", "admin");
      });
   });
};
