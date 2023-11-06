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
         //2. can find the button which has the icon "fa fa-arrows-alt"
         cy.get("@carousel")
            .find("span")
            .should("have.length", 2)
            .first()
            .should("have.class", "fa")
            .and("have.class", "fa-arrows-alt");
         //3. can find the button "previous"
         cy.get("@carousel")
            .find(".webix_nav_button_prev")
            .and("have.class", "webix_nav_button_side");
         //4. can find the button "next"
         cy.get("@carousel")
            .find(".webix_nav_button_next")
            .and("have.class", "webix_nav_button_side");
         //5. can find the "nav panel"
         cy.get("@carousel")
            .find(".webix_nav_panel")
            .should("have.class", "webix_nav_panel_side");
      });
   });
};
