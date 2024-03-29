export default () => {
   describe("Carousel", () => {
      it("Check Carousel Component", () => {
         //1. can find the label the text "Default image"
         cy.get('[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]')
            .as("carousel")
            .should("exist");
         // JOHNNY: breaking the "Default image" check into a second command
         // this method is a little more forgiving for slower systems
         cy.get(".ab-carousel-image-title").should("contain", "Default image");

         //2. should have these span elements
         let keys = [
            ".ab-carousel-zoom-in",
            ".ab-carousel-zoom-out",
            ".ab-carousel-rotate-left",
            ".ab-carousel-rotate-right",
            ".ab-carousel-fullscreen",
            ".ab-carousel-exit-fullscreen",
         ];
         cy.get("@carousel")
            .find("span")
            .as("iconButtons")
            .should("have.length", keys.length);

         //3. Let's check for each of our expected icon buttons
         keys.forEach((k) => {
            cy.get(k).should("exist");
         });

         //4. can find the button "previous"
         cy.get("@carousel")
            .find(".webix_nav_button_prev")
            .and("have.class", "webix_nav_button_side");

         //5. can find the button "next"
         cy.get("@carousel")
            .find(".webix_nav_button_next")
            .and("have.class", "webix_nav_button_side");

         //6. can find the "nav panel"
         cy.get("@carousel")
            .find(".webix_nav_panel")
            .should("have.class", "webix_nav_panel_side");
      });
   });
};
