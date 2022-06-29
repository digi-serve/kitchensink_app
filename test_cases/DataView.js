export default (folderName, Common) => {
   describe("DataView", () => {
      it.only("Exists", () => {
         cy.get(
            '[data-cy="tab-DataView-63101d38-01ca-4a42-8972-c18f716d8fda-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get(
            '[data-cy="detail text testkcsid c4f98caa-71c1-4c36-9587-f8db050d2e2f 5cda3301-743b-4c95-91b6-b8e71722a9f9"]'
         )
            .should("include.text", "test-kcs-id")
            .and("include.text", "Test-KCS-");
         // multi users
         cy.get(
            '[data-cy="detail connected usermulti e6c71124-ebf5-4ec6-959c-4811aed94782 5cda3301-743b-4c95-91b6-b8e71722a9f9"]'
         ).should("include.text", "admin");
         // single user
         cy.get(
            '[data-cy="detail text user 158fddff-d8d6-452a-8804-d032768a9f40 5cda3301-743b-4c95-91b6-b8e71722a9f9"]'
         ).should("include.text", "admin");
      });
   });
};
