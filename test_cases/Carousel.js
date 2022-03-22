export default (folderName, Common) => {

  describe("Carousel", () => {
    it("Exists", () => {
      Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
      cy.get(
        '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
      ).should("exist");
    });

    //1. can find the label the text "Default image"
    it("Check Carousel Component", () =>{
      cy.get(
        '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
      )
        .then(data => {
          expect(data.text(), 'Label').to.have.eq("Default image")
        })
             
    });

    //2. can find the button which has the icon "fa fa-arrows-alt"
    it("Check fa arrows", () =>{
   
      cy.get(
          '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
      )
      
      .find('span')
      .should(($span) => {
        expect($span).to.have.length(2)
    
        const className = $span[0].className
    
        expect(className).to.match(/fa fa-arrows-alt/)
      })       
      
    });
    //3. can find the button "previous"
    it("Check Previous btn", () =>{

      cy.get(
        '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
      )
      .find('div')
      cy.get('div')
      .should('have.class', 'webix_nav_button_side webix_nav_button_prev')
      .and('have.class','webix_nav_button_prev')

   })//End 3
   //4. can find the button "next"
   it("check next btn", () => {
    cy.get(
      '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
    )
    .find('div')
    cy.get('div')
    .should('have.class', 'webix_nav_button_side webix_nav_button_next')
    .and('have.class','webix_nav_button_next')


   })//End 4
   //5. can find the "nav panel"
   it("check nav panel", () => {
    cy.get(
      '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
    )
    .find('div')
    cy.get('div')
    .should('have.class', 'webix_nav_panel webix_nav_panel_side')
    .and('have.class','webix_nav_panel')

   })//End 5

   //6. the first "nav item" status should "active"

    it("first nav active", () =>{
      cy.get(
        '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
      )
      .find('div')
     cy.get('div')
     
     .should('have.class','webix_nav_panel webix_nav_panel_side','active').first()
     
     

 
   })//End 6


  });//End describe

};//end Export
