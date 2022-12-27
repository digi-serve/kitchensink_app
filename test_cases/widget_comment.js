export default (folderName, Common) => {
   describe("Comment", () => {
      beforeEach(() => {
         // Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.visit("/");
      }); //End beforeEach

      //1. can find the first comment avatar text "A"
      it("can find the first A", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("A");

         pressSendButton();

         cy.get(".webix_comments_avatar")
            .contains("A")
            .should("have.class", "webix_comments_avatar_image");
      }); //End 1

      //2. can find the first comment  name "admin"
      it("can find the first comment  name admin", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("A");
         pressSendButton();

         cy.get(".webix_list_item")
            .contains("admin")
            .should("have.class", "webix_comments_name");
      }); //End 2
      //3. can find the first comment date "10 Sep, 00:00"
      it("can find the first comment date", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("A");

         pressSendButton();

         const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
         ];
         var d = new Date();

         var datestring =
            d.getDate("dd") +
            " " +
            months[d.getMonth("M")] +
            "," +
            " " +
            "00:00";
         cy.get("span");
         cy.contains("span", datestring);
      }); //End 3

      //4. can find the first comment message "test"
      it("can find the first comment message test", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get(".webix_list_item")
            .contains("test")
            .should("have.class", "webix_comments_message");
      }); //End 4
      //5. can find the first comment menu which has icon "wxi-dots"
      it("can find the first comment menu which has icon wxi-dots", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("span")
            .should("have.class", "wxi-dots")
            .and("have.class", "webix_icon")
            .and("have.class", "webix_comments_menu");
      }); //End 5
      //6. can find the option icon "wix-pencil"
      it("can find the option icon wix-pencil", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);

         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_list_icon webix_icon wxi-pencil"]')
            .should("have.class", "webix_list_icon webix_icon wxi-pencil")
            .and("have.class", "wxi-pencil");
      }); //End 6

      //7. can find the option text "Edit"
      it("can find the option text Edit", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').should("contain", "Edit");
      }); //End 7

      //8. can find the option icon "wxi-trash"
      it("can find the option icon wxi-trash", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_list_icon webix_icon wxi-trash"]')
            .should("have.class", "webix_list_icon webix_icon wxi-trash")
            .and("have.class", "wxi-trash");
      }); //End 8

      //9. can find the option text "Remove"
      it("can find the option text Remove", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .should("be.visible")
            .click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').should("contain", "Remove");
      }); //End 9

      //10. can find the text "test" on the first textarea
      it("can find the text test on the first textarea", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get(".webix_comments")
            .first()
            .find(".webix_comments_current")
            .last()
            .click({ force: true });

         cy.get(".webix_progress_state").should("not.exist");

         cy.get(".webix_comments")
            .first()
            .find(".webix_comments_current")
            .last()
            .find(".webix_comments_menu")
            .click({ force: true });

         cy.get('a[class="webix_list_item menu"]').eq(0).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(1000);

         cy.get("textarea")
            .should("have.class", "webix_inp_textarea")
            .should("have.value", "test");
      }); //End 10

      //11. can find the text "cypress hahaha" on the first comment
      it("can find the text cypress hahaha on the first comment", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]')
            .first()
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('textarea[class="webix_inp_textarea"]')
            .eq(0)
            .clear()
            .click()
            .type("cypress hahaha");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_comments_message")
            .should("contain", "cypress hahaha");
      }); //End 11

      //12. should't have found the text "test" on the first comment
      it("should't have found the text test on the first comment", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(0).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('textarea[class="webix_inp_textarea"]')
            .eq(0)
            .clear()
            .click()
            .type("cypress hahaha");

         pressSendButton();

         cy.get('div[class*="webix_comments_message"]')
            .first()
            .should("have.text", "cypress hahaha");
      }); //End 12

      //13. can find the text "The comment will be removed. Are you sure?"
      it("can find the text The comment will be removed. Are you sure?", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(1).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class="webix_popup_text"]')
            .find("span")
            .should("have.text", "The comment will be removed. Are you sure?");
      }); //End 13

      //14. can find the button "Cancel" on the popup
      it("can find the button Cancel on the popup", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(1).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class="webix_popup_button"]').should(
            "have.text",
            "Cancel"
         );
      }); //End 14

      //15. can find the button which has the text "Ok" on the popup
      it("can find the button which has the text Ok on the popup", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(1).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class="webix_popup_button confirm"]').should(
            "have.text",
            "OK"
         );
      }); //End 15

      //16. can find the button which has the text "Cancel" on the popup
      it("can find the button which has the text Cancel on the popup", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(1).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class="webix_popup_button"]').should(
            "have.text",
            "Cancel"
         );
      }); //End 16

      //17. the text "cypress hahaha" should exist
      it("the text cypress hahaha should exist", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);

         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(0).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('textarea[class="webix_inp_textarea"]')
            .eq(0)
            .clear()
            .click()
            .type("cypress hahaha");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(1).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class="webix_popup_button"]')
            .should("have.text", "Cancel")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class*="webix_comments_message"]')
            .first()
            .should("have.text", "cypress hahaha");
      }); //End 17

      //18. the text "cypress hahaha" shouldn't exist
      it("the text cypress hahaha shouldn't exist", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("test");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(0).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('textarea[class="webix_inp_textarea"]')
            .eq(0)
            .clear()
            .click()
            .type("cypress hahaha");

         pressSendButton();

         cy.get("div")
            .should("have.class", "webix_list_item webix_comments_current")
            .contains("admin")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_icon wxi-dots webix_comments_menu"]')
            .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').eq(1).click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class="webix_popup_button confirm"]')
            .should("have.text", "OK")
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('div[class*="webix_comments_message"]')
            .first()
            .should("not.have.text", "cypress hahaha");
      }); //End 18

      //19. can find the text "cypress hahaha is coming back" on the comment container
      it("can find the text cypress hahaha is coming back on the comment container", () => {
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         )
            .should("be.visible")
            .click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().type("cypress hahaha is coming back");

         pressSendButton();

         cy.get(".webix_list_item")
            .contains("cypress hahaha is coming back")
            .should("have.class", "webix_comments_message");
      }); //End 19
   }); //End describe
}; //End Export

/**
 * Finds and presses the send button in a comment widget
 * @funtion pressSendButton
 * @param {int} [ index = 0 ] the index of the comment widget, needed if more than one exist on the page
 */
function pressSendButton(index = 0) {
   cy.get(".webix_comments").eq(index).find("button").should("exist").click();
}
