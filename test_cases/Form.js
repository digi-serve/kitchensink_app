export default (folderName, Common) => {
    describe("Form", () => {
       
        //1. Go to the tab "Form"
      it("Go to the tab Form", () =>{
        cy.get(
            '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
          ).click()
   
      })//End 1
      //2. can find the field "test-kcs-id" with the value "Test-KCS-0000000002"
      it("can find test-kcs-id", () =>{

        cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()
    
        cy.contains('label', 'test-kcs-id')
        .should('have.value', '')

      })//End 2
      //3. can find the field "single-line-text(required)" with the value "test2"
      it("can find single line text", () => {

        cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()
        cy.get(
          '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        )
        cy.get('input')
        .invoke('val')
        .should('contain','test')
      


      })//End 3
      //4. Change the value to "Cypress hahaha is coming here now" and click on the button "Save"
      it("change the value to cypress hahaha", () =>{
        cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()

        cy.get(
          '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).clear()

        cy.contains('label', 'single-line-text(required)')
          .type('Cypress hahaha is coming here now')

        cy.get(
          '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).click()

      })//End 4
      //5. can find the field validation error message "*This is a required field."
      it.only('can find This is a required field',()=>{
        cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()
        
        cy.get(
          '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
          ).clear()

        cy.get(
         '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).click()


        // cy.get(
        //     '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        //   ).should('have.length', 1)
           
          // cy.get('[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]')
          // .invoke('val','')
          // .should('equal', 'Please fill out this field.')

          cy.get(
            '[data-cy="number numbervalidation 4a1602f8-00bc-4005-b519-8d0dd7a7b9b6 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
          ).should('not.be.empty').to.eq('Please fill out this field.')
      
          


          // .invoke('attr', 'value')
          // .should('equal', '')


          // .then(($value1) => {
          //   const value1 = $value1
          //    expect($value1.validationMessage).to.eq('Please fill out this field.')
            //expect(validationMessage).to.eq('Please fill out this field.')
          // })
          

          // .then(($input) => {
          //   expect($input[0].validationMessage).to.eq('Please fill out this field.')
          // })
          
        // cy.get('#1645166708282').then(($input) => {
        //   expect($input[0].validationMessage).to.eq('Please fill out this field.')
        // })


        // cy.get(
        //   '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        // )
        // .focus()
        // .blur()
        // cy.contains('')
        
        // cy.get(
        // '[input[id="1645166708282"]'
        // ).should('not.be.empty')


        //

        // .then(data => {
        //   expect(data.text(), 'value').should('not.be.empty')
        //   return '*This is a required field.'
        // })
             
      

        // expect('[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]')
        // .should('have.length', 0)
       //  let $input = cy.get('[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]')           
          
          // cy.log($input[0])
          // expect($input).not.to.be.empty
          
         
     
        
      })//End 5

    });//End Describe
  };//End Export
  