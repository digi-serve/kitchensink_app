export default (folderName, Common) => {
  describe("Image", () => {
    it("Exists", () => {
      Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
      cy.get(
        '[data-cy="tab-Image-b2e07f8e-5abe-4cfd-865a-febb5927e0c9-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
      ).click();

      cy.get('[view_id^="ABViewImage_"]')
        .find("img")
        .should("have.attr", "src")
        .and("include", "789747da-ba6e-42dd-80e8-485e3fbe5b97");
    });
  });
};
