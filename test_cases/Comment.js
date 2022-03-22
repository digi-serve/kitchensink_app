export default (folderName, Common) => {
    describe.only("Form", () => {
    //   beforeEach(() => {
    //     // Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
    //     cy.visit("/").wait(1500);
    //   });//End beforeEach


       //1. can find the first comment avatar text "A"
       it("can find the first A", () =>{
        Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
        cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
          ).click()
            
            


      })//End 1




    });//End describe

};//End Export