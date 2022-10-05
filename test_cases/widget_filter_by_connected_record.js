export default (folderName, Common) => {
   describe("FilterByConnectedRecord", () => {
      before(() => {
         Common.RunSQL(
            cy,
            folderName,
            "add_test_kcs_filterByConnectedRecord_2_and_3.sql"
         );
         Common.RunSQL(
            cy,
            folderName,
            "add_test_kcs_filterByConnectedRecordByCustomIndex_2_and_3.sql"
         );
      });

      beforeEach(() => {
         cy.get('[data-cy="d35adfe4-d39c-411c-8991-ded70a1858bc"]')
            .should("be.visible")
            .click();
      });

      it("Filtering ByDefault", () => {
         cy.get(`[data-cy^="tab ByDefault"]`).should("be.visible").click();
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Must select item from 'connectto2' first.");
         cy.get('[data-cy^="connectObject connectto2"]').click();
         cy.get('[data-cy^="connectObject options uuid21"]').should(
            "be.visible"
         );
         cy.get('[data-cy^="connectObject options uuid21"]').click();
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");
         cy.get('[data-cy^="connectObject connectto3"]').click();
         cy.get(
            ".webix_popup > .webix_win_content > .webix_win_body > .webix_list > .webix_scroll_cont"
         )
            .find('[webix_l_id^="uuid3"]')
            .should("have.length", 1);
         cy.get('[data-cy^="connectObject connectto2"]').click();
         cy.get('[data-cy^="connectObject options uuid22"]')
            .should("be.visible")
            .click();
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");
         cy.get('[data-cy^="connectObject connectto3"]').click();
         cy.get(
            ".webix_popup > .webix_win_content > .webix_win_body > .webix_list > .webix_scroll_cont"
         )
            .find('[webix_l_id^="uuid3"]')
            .should("have.length", 3);
      });

      it("Filtering ByCustomIndex", () => {
         cy.get('[data-cy^="tab ByCustomIndex"]').should("be.visible").click();
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Must select item from 'connectto2' first.");
         cy.get('[data-cy^="connectObject connectto2"]').click();
         cy.get('[data-cy^="connectObject options uuid21"]')
            .should("be.visible")
            .click();
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");
         cy.get('[data-cy^="connectObject connectto3"]').click();
         cy.get(
            ".webix_popup > .webix_win_content > .webix_win_body > .webix_list > .webix_scroll_cont"
         )
            .find('[webix_l_id^="uuid3"]')
            .should("have.length", 2);
         cy.get('[data-cy^="connectObject connectto2"]').click();
         cy.get('[data-cy^="connectObject options uuid22"]')
            .should("be.visible")
            .click();
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");
         cy.get('[data-cy^="connectObject connectto3"]').click();
         cy.get(
            ".webix_popup > .webix_win_content > .webix_win_body > .webix_list > .webix_scroll_cont"
         )
            .find('[webix_l_id^="uuid3"]')
            .should("have.length", 4);
      });
   });
};
