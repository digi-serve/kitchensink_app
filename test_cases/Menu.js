export default (folderName, Common) => {
    describe("Menu", () => {
      it("Exists", () => {
        cy.get(
          '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        )
          .click();

        cy.get(
          '[data-cy="menu-item KitchenHome cb77ced0-a803-46b7-8a79-f9084d75d51c eac2cff7-5069-4f74-9bd9-523a3b633346"]'
        )
          .should("include.text", "Home");

        cy.get(
          '[data-cy="menu-item 1 93f39714-7d1b-4375-b5b2-89c94a3e96bd eac2cff7-5069-4f74-9bd9-523a3b633346"]'
        )
          .should("include.text", "1");

        cy.get(
          '[data-cy="menu-item Carousel e56d4ad0-d879-43c0-934a-a4004fcc7579 eac2cff7-5069-4f74-9bd9-523a3b633346"]'
        )
          .should("include.text", "Carousel");

        cy.get(
            '[data-cy="menu-item Chart 41d39ac7-e7d9-405d-a570-b79686ccdd5a eac2cff7-5069-4f74-9bd9-523a3b633346"]'
          )
            .should("include.text", "Chart");

        cy.get(
            'div[view_id^="ABViewContainer_"]'
          )
            .should("include.text", "Text2")
            .should("include.text", "Text3");
      });

      it("Menu Carousel", () => {
        cy.get(
          '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        )
          .click();

        cy.get(
          '[data-cy="menu-item Carousel e56d4ad0-d879-43c0-934a-a4004fcc7579 eac2cff7-5069-4f74-9bd9-523a3b633346"]'
        )
          .click();
        
        cy.get('[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]')
          .should("include.text", "Default image");
      });

      it("Menu Chart", () => {
        Common.RunSQL(cy, folderName, ["add_testkcs2-Menu.sql"]);

        cy.get(
          '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        )
          .click();

        cy.get(
          '[data-cy="menu-item Chart 41d39ac7-e7d9-405d-a570-b79686ccdd5a eac2cff7-5069-4f74-9bd9-523a3b633346"]'
        )
          .click();

        cy.get('div[view_id^="ABViewChartPie_"]')
          .should("include.text", "7")
          .should("include.text", "6")
          .should("include.text", "5")
          .should("include.text", "9")
          .should("include.text", "3");
      });

      it("Menu 1", () => {
        cy.get(
          '[data-cy="tab-Menu-773dca98-87e0-4dc2-b528-89ec7c98c448-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        )
          .click();

        cy.get(
          '[data-cy="menu-item 1 93f39714-7d1b-4375-b5b2-89c94a3e96bd eac2cff7-5069-4f74-9bd9-523a3b633346"]'
        )
          .click();

        cy.get('[data-cy="menu-item KitchenHome cb77ced0-a803-46b7-8a79-f9084d75d51c 5a50210f-767b-461e-9762-66fbc263ec7f"]')
          .should("be.visible")
          .should("include.text", "Home")
        
        cy.get('[data-cy="menu-item 2 398a96a6-21dc-4ab3-8017-b2754fa979d4 5a50210f-767b-461e-9762-66fbc263ec7f"]')
          .should("be.visible")
          .should("include.text", "2")


        cy.get(
          '[data-cy="menu-item 2 398a96a6-21dc-4ab3-8017-b2754fa979d4 5a50210f-767b-461e-9762-66fbc263ec7f"]'
        )
          .click();

        cy.get(
          '[data-cy="Popup Close Button 2 398a96a6-21dc-4ab3-8017-b2754fa979d4"]'
        )
          .should("be.visible")
          .should("include.text", "Close")
          .click()
        
        cy.get(
          '[data-cy="menu-item KitchenHome cb77ced0-a803-46b7-8a79-f9084d75d51c 5a50210f-767b-461e-9762-66fbc263ec7f"]'
        )
          .click()

        cy.get(
          'div[view_id^="ABViewContainer_"]'
        )
          .should("include.text", "Text2")
      });
    });
  };
  