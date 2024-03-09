function TestLog(log) {
   cy.TestLog(`Comment: ${log}`);
}
export default (/* folderName, Common */) => {
   describe("Comment", () => {
      beforeEach(() => {
         // Common.Reset(cy, folderName);
         // cy.visit("/");
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();

         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      }); //End beforeEach

      //1. can find the first comment avatar text "A"
      it("can find the first Avatar A", () => {
         TestLog("can find the first Avatar A");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         // cy.get("textarea").first().type("Comment A");

         enterText("Comment A");

         selectLastComment()
            .find(".webix_comments_avatar")
            .contains("A")
            .should("have.class", "webix_comments_avatar_image");
      }); //End 1

      //2. can find the first comment  name "admin"
      it("can find the first comment name admin", () => {
         TestLog("can find the first comment name admin");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");

         enterText("Comment B");

         selectLastComment().contains("Comment B");

         selectLastComment()
            .contains("admin")
            .should("have.class", "webix_comments_name");
      }); //End 2
      //3. can find the first comment date "10 Sep, 00:00"
      it("can find the first comment date", () => {
         TestLog("can find the first comment date");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");

         enterText("Comment C");

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

         // Johnny: OK, when running locally, your server running in a docker
         // container might be in a different time zone than your local computer
         // and the days might be off.
         // What's important here is that we find the date.
         var datestring =
            // d.getDate("dd") +
            // " " +
            months[d.getMonth("M")] + "," + " " + "00:00";

         selectLastComment().contains("span", datestring);
      }); //End 3

      //4. can find the first comment message "test"
      it("can find the first comment message test", () => {
         TestLog("can find the first comment message test");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test");

         cy.get(".webix_list_item")
            .contains("test")
            .should("have.class", "webix_comments_message");
      }); //End 4
      //5. can find the first comment menu which has icon "wxi-dots"
      it("can find the first comment menu which has icon wxi-dots", () => {
         TestLog("can find the first comment menu which has icon wxi-dots");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test wxi-dots");

         selectLastComment()
            .find("span")
            .should("have.class", "wxi-dots")
            .and("have.class", "webix_icon")
            .and("have.class", "webix_comments_menu");
      }); //End 5
      //6. can find the option icon "wix-pencil"
      it("can find the option icon wix-pencil", () => {
         TestLog("can find the option icon wix-pencil");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test wix-pencil");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         selectLastComment()
            .find('span[class="webix_icon wxi-dots webix_comments_menu"]')
            // .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_list_icon webix_icon wxi-pencil"]')
            .should("have.class", "webix_list_icon webix_icon wxi-pencil")
            .and("have.class", "wxi-pencil");
      }); //End 6

      //7. can find the option text "Edit"
      it("can find the option text Edit", () => {
         TestLog("can find the option text Edit");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test Edit");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         selectLastComment()
            .find('span[class="webix_icon wxi-dots webix_comments_menu"]')
            // .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').should("contain", "Edit");
      }); //End 7

      //8. can find the option icon "wxi-trash"
      it("can find the option icon wxi-trash", () => {
         TestLog("can find the option icon wxi-trash");
         // cy.RunSQL(folderName, ["add_testkcs.sql"]);
         // cy.get(
         //    '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         // )
         //    .as("wxitrash")
         //    .scrollIntoView();
         // cy.get("@wxitrash").should("be.visible").click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test wxi-trash");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         selectLastComment()
            .find('span[class="webix_icon wxi-dots webix_comments_menu"]')
            // .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('span[class="webix_list_icon webix_icon wxi-trash"]')
            .should("have.class", "webix_list_icon webix_icon wxi-trash")
            .and("have.class", "wxi-trash");
      }); //End 8

      //9. can find the option text "Remove"
      it("can find the option text Remove", () => {
         TestLog("can find the option text Remove");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test Remove");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         selectLastComment()
            .find('span[class="webix_icon wxi-dots webix_comments_menu"]')
            // .eq(0)
            .click({ force: true });

         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(500);

         cy.get('a[class="webix_list_item menu"]').should("contain", "Remove");
      }); //End 9

      //10. can find the text "test" on the first textarea
      it("Clicking Edit can find the text to edit in the textarea", () => {
         TestLog("Clicking Edit can find the text to edit in the textarea");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("text to edit");

         // cy.get(".webix_comments")
         //    .first()
         //    .find(".webix_comments_current")
         //    .last()
         //    .click({ force: true });

         // cy.get(".webix_progress_state").should("not.exist");

         // Sometimes the progress icon is gone too fast.
         // let's make sure that by counting elements in the grid instead.
         cy.get(
            '[view_id="ABViewComment_2a2db721-5093-44a2-999d-3f4a58420129"]',
         )
            .find(".webix_view.webix_list")
            .children()
            .should("have.length", 1);
         cy.get(
            '[view_id="ABViewComment_aac06b2a-7f4e-4daf-9b39-ccd71858e150"]',
         )
            .find(".webix_view.webix_list")
            .children()
            .should("have.length", 1);

         // Click on the Edit menu for the last comment
         editLastComment();

         cy.get("textarea")
            .should("have.class", "webix_inp_textarea")
            .should("have.value", "text to edit");
      }); //End 10
      //11. can find the text "cypress hahaha" on the first comment
      it("can find the text cypress hahaha on the first comment", () => {
         TestLog("can find the text cypress hahaha on the first comment");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("text to replace");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         editLastComment();

         // Edit the text
         enterText("cypress hahaha");

         selectLastComment()
            .find("div")
            .should("have.class", "webix_comments_message")
            .should("contain", "cypress hahaha");
      }); //End 11
      //12. should't have found the text "test" on the first comment
      it("should't have found the text test on the edited comment", () => {
         TestLog("should't have found the text test on the edited comment");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("text not here");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         editLastComment();

         enterText("cypress hahaha");

         selectLastComment().should("not.have.text", "text not here");
      }); //End 12

      //13. can find the text "The comment will be removed. Are you sure?"
      it("can find the text The comment will be removed. Are you sure?", () => {
         TestLog(
            "can find the text The comment will be removed. Are you sure?",
         );
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test find Remove warning");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         removeLastComment();

         cy.get('div[class="webix_popup_text"]')
            .find("span")
            .should("have.text", "The comment will be removed. Are you sure?");

         clickCancel();
      }); //End 13

      //14. can find the button "Cancel" on the popup
      it("can find the button Cancel on the popup", () => {
         TestLog("can find the button Cancel on the popup");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test find remove popup");

         // cy.get("div")
         //    .should("have.class", "webix_list_item webix_comments_current")
         //    .contains("admin")
         //    .click({ force: true });

         removeLastComment();

         cy.get('div[class="webix_popup_button"]').should(
            "have.text",
            "Cancel",
         );

         clickCancel();
      }); //End 14

      //15. can find the button which has the text "Ok" on the popup
      it("can find the button which has the text Ok on the popup", () => {
         TestLog("can find the button which has the text Ok on the popup");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         enterText("test find remove OK btn");

         removeLastComment();

         cy.get('div[class="webix_popup_button confirm"]').should(
            "have.text",
            "OK",
         );

         clickCancel();
      }); //End 15

      //// NOTE: Same as test 14
      // //16. can find the button which has the text "Cancel" on the popup
      // it("can find the button which has the text Cancel on the popup", () => {
      //    TestLog("can find the button which has the text Cancel on the popup");
      //    // cy.RunSQL(folderName, ["add_testkcs.sql"]);
      //    cy.get(
      //       '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
      //    ).click();

      //    cy.get("textarea").should("have.class", "webix_inp_textarea");
      //    cy.get("textarea").first().click();

      //    cy.get("textarea").should("have.class", "webix_inp_textarea");
      //    enterText("test find remove Cancel btn");

      //    removeLastComment();

      //    cy.get('div[class="webix_popup_button"]').should(
      //       "have.text",
      //       "Cancel",
      //    );
      // }); //End 16

      //17. the text "cypress hahaha" should exist
      it("Comment Remove -> Cancel should keep text.", () => {
         TestLog("Comment Remove -> Cancel should keep text.");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");

         let text = "test Cancel should keep text";
         enterText(text);

         // editLastComment();
         // enterText("cypress hahaha");

         removeLastComment();

         clickCancel();

         selectLastComment().should("contain", text);
      }); //End 17

      //18. the text "cypress hahaha" shouldn't exist
      it("Comment -> Remove should remove text", () => {
         TestLog("Comment -> Remove should remove text");
         cy.get("textarea").should("have.class", "webix_inp_textarea");
         cy.get("textarea").first().click();

         cy.get("textarea").should("have.class", "webix_inp_textarea");
         let text = "this text should be removed";
         enterText(text);

         removeLastComment();

         cy.get('div[class="webix_popup_button confirm"]')
            .should("have.text", "OK")
            .click({ force: true });

         selectLastComment().should("not.have.text", text);
      }); //End 18

      // NOTE: this is the same as test 2 & 4 ...
      // //19. can find the text "cypress hahaha is coming back" on the comment container
      // it("can find the text cypress hahaha is coming back on the comment container", () => {
      //    // cy.RunSQL(folderName, ["add_testkcs.sql"]);
      //    cy.get(
      //       '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
      //    )
      //       .should("be.visible")
      //       .click();

      //    cy.get("textarea").should("have.class", "webix_inp_textarea");
      //    cy.get("textarea").first().click();

      //    cy.get("textarea").should("have.class", "webix_inp_textarea");
      //    cy.get("textarea").first().type("cypress hahaha is coming back");

      //    pressSendButton();

      //    cy.get(".webix_list_item")
      //       .contains("cypress hahaha is coming back")
      //       .should("have.class", "webix_comments_message");
      // }); //End 19
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

function selectLastComment() {
   return cy
      .get(
         '[view_id="ABViewComment_2a2db721-5093-44a2-999d-3f4a58420129"] > .webix_comments > .webix_list > .webix_scroll_cont .webix_list_item',
      )
      .last();

   /*
   return cy.get(".webix_comments")
            .first()
            .find(".webix_list_item")
            .last()
   */
}

function editLastComment() {
   // eslint-disable-next-line cypress/no-unnecessary-waiting
   cy.wait(500);

   selectLastComment()
      .find('span[class="webix_icon wxi-dots webix_comments_menu"]')
      // .eq(0)
      .click({ force: true });

   // eslint-disable-next-line cypress/no-unnecessary-waiting
   cy.wait(500);

   // Click Edit
   cy.get('a[class="webix_list_item menu"]').first().click({ force: true });

   // eslint-disable-next-line cypress/no-unnecessary-waiting
   cy.wait(500);
}

function removeLastComment() {
   // eslint-disable-next-line cypress/no-unnecessary-waiting
   cy.wait(500);

   selectLastComment()
      .find('span[class="webix_icon wxi-dots webix_comments_menu"]')
      // .eq(0)
      .click({ force: true });

   // eslint-disable-next-line cypress/no-unnecessary-waiting
   cy.wait(500);

   cy.get('a[class="webix_list_item menu"]').eq(1).click({ force: true });

   // eslint-disable-next-line cypress/no-unnecessary-waiting
   cy.wait(500);
}

function enterText(text) {
   cy.get('textarea[class="webix_inp_textarea"]')
      .eq(0)
      .clear()
      .click()
      .type(text);

   pressSendButton();
}

function clickCancel() {
   cy.get('div[class="webix_popup_button"]')
      .should("have.text", "Cancel")
      .click({ force: true });
}
