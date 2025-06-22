export default (folderName) => {
   describe("FilterByConnectedRecord", () => {
      // before(() => {
      //    cy.RunSQL(folderName, [
      //       "add_test_kcs_filterByConnectedRecord_2_and_3.sql",
      //       "add_test_kcs_filterByConnectedRecordByCustomIndex_2_and_3.sql",
      //    ]);
      //    // cy.RunSQL(
      //    //    folderName,
      //    //    "add_test_kcs_filterByConnectedRecordByCustomIndex_2_and_3.sql",
      //    // );
      // });

      beforeEach(() => {
         cy.get('[data-cy="d35adfe4-d39c-411c-8991-ded70a1858bc"]')
            .should("be.visible")
            .click();
      });

      it("Filtering ByDefault", () => {
         cy.get(`[data-cy^="tab ByDefault"]`).should("be.visible").click();
         cy.get('[data-cy^="connectObject connectto3"]').should("be.visible");
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Must select item from 'connectto2' first.");
         cy.get('[data-cy^="connectObject connectto2"]')
            .click({ force: true })
            .trigger("click");
         cy.get('[data-cy^="connectObject options uuid21"]').should(
            "be.visible",
         );
         cy.get('[data-cy^="connectObject options uuid21"]')
            .last()
            .trigger("click");
         cy.get('[data-cy^="connectObject connectto3"] .webix_spin').should(
            "not.exist",
         );
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");
         cy.get('[data-cy^="connectObject connectto3"]')
            .click({ force: true })
            .trigger("click");
         cy.get(
            ".webix_popup > .webix_win_content > .webix_win_body > .webix_list > .webix_scroll_cont",
         )
            .find('[webix_l_id^="uuid3"]')
            .should("have.length", 1);
         cy.get('[data-cy^="connectObject connectto2"]')
            .click({ force: true })
            .trigger("click");
         cy.get('[data-cy^="connectObject options uuid22"]')
            .should("be.visible")
            .click({ force: true });

         cy.get(".webix_progress_icon").should("not.exist");

         cy.get('[data-cy^="connectObject connectto3"]').should("be.visible");
         cy.get('[data-cy^="connectObject connectto3"] .webix_spin').should(
            "not.exist",
         );
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");
         cy.get('[data-cy^="connectObject connectto3"]')
            .click({ force: true })
            .trigger("click");
         // break this up since the popup will get refreshed.
         // breaking it up causes cy to eval the updated version.
         cy.get(
            ".webix_popup > .webix_win_content > .webix_win_body > .webix_list > .webix_scroll_cont",
         )
            .find('[webix_l_id^="uuid3"]')
            .as("conn3Popup");
         cy.get("@conn3Popup").should("have.length", 3);
      });

      it("Filtering ByCustomIndex", () => {
         cy.get('[data-cy^="tab ByCustomIndex"]').should("be.visible").click();
         cy.get('[data-cy^="connectObject connectto3"]')
            .scrollIntoView()
            .should("be.visible");
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Must select item from 'connectto2' first.");
         cy.get('[data-cy^="connectObject connectto2"]')
            .click({ force: true })
            .trigger("click");
         cy.get(
            '[data-cy="connectObject options uuid21 ad01ca35-4e06-4cde-9aa8-f0a0c5c0b465 adabf481-d11b-47bd-a905-9509202ce506"]',
         )
            .should("be.visible")
            .trigger("click");
         cy.get('[data-cy^="connectObject connectto3"] .webix_spin').should(
            "not.exist",
         );
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");
         cy.get('[data-cy^="connectObject connectto3"]')
            .click({ force: true })
            .trigger("click");
         cy.get(
            '[webix_l_id^="uuid3"][data-cy$="5ad9b94b-ae66-48e6-aafe-5c450959e774 adabf481-d11b-47bd-a905-9509202ce506"]',
         ).should("have.length", 2);
         cy.get('[data-cy^="connectObject connectto2"]')
            .click({ force: true })
            .trigger("click");
         cy.get('[data-cy^="connectObject options uuid22 ad01"]')
            .should("be.visible")
            .click({ force: true });
         cy.get('[data-cy^="connectObject connectto3"]')
            .find("input")
            .invoke("attr", "placeholder")
            .should("contains", "Select item");

         cy.get('[data-cy^="connectObject connectto3"] .webix_spin').should(
            "not.exist",
         );
         cy.get('[data-cy^="connectObject connectto3"]')
            .click({ force: true })
            .trigger("click");
         // cy.get(
         //    ".webix_popup > .webix_win_content > .webix_win_body > .webix_list > .webix_scroll_cont",
         // ).as("pupuuid3");
         // cy.get("@pupuuid3")
         //    .find('[webix_l_id^="uuid3"]')
         cy.get(
            '[webix_l_id^="uuid3"][data-cy$="5ad9b94b-ae66-48e6-aafe-5c450959e774 adabf481-d11b-47bd-a905-9509202ce506"]',
         ).should("have.length", 4);
      });
   });
};
