export default () => {
   describe("Label", () => {
      it("Exists", () => {
         // Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Label-82f38f23-f1b0-40ec-ae83-d1b8036cfe7b-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get('[view_id^="ABViewLabel_"]').should(
            "have.text",
            "test lable widget"
         );
      });
   });
};
