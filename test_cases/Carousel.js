export default (folderName, Common) => {
  describe("Carousel", () => {
    it("Exists", () => {
      Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
      cy.get(
        '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
      ).should("exist");
      // Select tab
      // cy.get(
      //   "tab-Carousel-e56d4ad0-d879-43c0-934a-a4004fcc7579-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"
      // ).click();
    });
  });
};
