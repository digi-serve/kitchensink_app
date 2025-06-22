export default () => {
   describe("Label", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Label-82f38f23-f1b0-40ec-ae83-d1b8036cfe7b-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      });
      it("Exists", () => {
         // cy.RunSQL(folderName, ["add_testkcs.sql"]);

         cy.get(
            '[view_id^="ABViewLabel_f512bda2-d907-4518-80b6-47badc2005d1"]',
         ).should("have.text", "test lable widget");
      });
   });
};
