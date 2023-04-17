export default () => {
   describe("Detail", () => {
      it("Exists", () => {
         cy.get(
            '[data-cy="tab-Detail-e8bcfd8a-e343-4cf6-82bb-533cafd45c3a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get(
            '[view_id="ABViewDetailText_5db49524-c1f8-4a82-81ee-4022ba8f60a2_detailItemLabel"]'
         ).should("include.text", "test-kcs-id");

         cy.get(
            '[data-cy="detail text testkcsid c4f98caa-71c1-4c36-9587-f8db050d2e2f aa1c0a4d-001c-4227-970b-4cf1c676ad20"]'
         ).should("include.text", "Test-KCS-");
      });
   });
};
