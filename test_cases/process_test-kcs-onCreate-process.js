export default (folderName, Common) => {
   describe("test-kcs-onCreate-process", () => {
      beforeEach(() => {
         Common.RunSQL(cy, folderName, [
            "process_test-kcs-onCreate-process.sql",
         ]);
         cy.get(
            '[data-cy="tab onCreate bc6a8b04-709c-46ce-a273-cb3550a17282 1169d7cf-d03d-4bd5-b282-4897b3329d7c"]'
         ).click();
      });
      it('Process inserts a record after inserting a label value on the tab "process > onCreate"', () => {
         cy.get(
            '[data-cy="string label 06a93149-590d-4e4f-9463-5ff43a689fd1 2172ba78-b327-42a1-8918-d97852234aee"]'
         ).type("test label");

         cy.get(
            '[data-cy="button save 2172ba78-b327-42a1-8918-d97852234aee"]'
         ).click();

         cy.get(".webix_progress_icon").should("not.exist");

         // is Default Text - multilingual label - for child record working?
         cy.log(
            "we are attempting to set this in both the object and the process. Neither are working, it seems to be because the column allows for multilingual data."
         );
         cy.log(
            "There are two labels: the one we are looking for contains the word 'None'"
         );
         cy.get(
            '[data-cy="ABViewGrid_4c2af349-da19-407e-9db0-ab34d1a35837_datatable"]'
         ).contains("None");

         cy.get(
            '[data-cy="ABViewGrid_4c2af349-da19-407e-9db0-ab34d1a35837_datatable"]  > .webix_ss_body > .webix_ss_center'
         )
            .find(".webix_column ")
            .should(($data) => {
               expect($data, "5 columns").to.have.length(5);
               expect($data.eq(0), "label").to.contain("test label");
               expect($data.eq(1), "text").to.contain("Manual Text");
               expect($data.eq(2), "status").to.contain("updated");
               expect($data.eq(5), "status").to.contain("THIS WILL FAIL");
               expect($data.eq(3).find(".webix_icon"), "updated").to.have.class(
                  "fa-check-square-o"
               );
               expect($data.eq(4), "connectedField").to.contain("Mr. Admin");
            });
      });
   });
};
