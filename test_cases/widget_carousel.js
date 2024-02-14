export default () => {
   describe("Carousel", () => {
      it("Check Carousel Component", () => {
         //1. can find the label the text "Default image"
         cy.get('[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]')
            .as("carousel")
            .should("exist")
            .then((data) => {
               expect(data.text(), "Label").to.include("Default image");
            });

         //2. should have 4 span elements
         cy.get("@carousel")
            .find("span")
            .as("iconButtons")
            .should("have.length", 4);

         //3. can find the button which has the icon "fa fa-arrows-left"
         cy.get("@iconButtons")
            .first()
            .should("have.class", "fa")
            .and("have.class", "fa-rotate-left");

         //4. can find the button which has the icon "fa fa-arrows-right"
         cy.get("@iconButtons")
            .eq(1)
            .should("have.class", "fa")
            .and("have.class", "fa-rotate-right");

         //5. can find the button which has the icon "fa fa-arrows-alt"
         cy.get("@iconButtons")
            .eq(2)
            .should("have.class", "fa")
            .and("have.class", "fa-rotate-alt");

         //6. can find the button "previous"
         cy.get("@carousel")
            .find(".webix_nav_button_prev")
            .and("have.class", "webix_nav_button_side");
         //7. can find the button "next"
         cy.get("@carousel")
            .find(".webix_nav_button_next")
            .and("have.class", "webix_nav_button_side");
         //8. can find the "nav panel"
         cy.get("@carousel")
            .find(".webix_nav_panel")
            .should("have.class", "webix_nav_panel_side");
      });
   });
};
