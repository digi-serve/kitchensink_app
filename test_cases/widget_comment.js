export default (/*folderName*/) => {
   describe("Comment", () => {
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-Comment-50a1d27a-a4a1-44a5-a264-707df2b07dbb-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();

         cy.get(
            '[view_id="ABViewComment_2a2db721-5093-44a2-999d-3f4a58420129"]',
         )
            .as("commentWidget")
            .find("textArea")
            .as("input")
            .click();
         cy.get("@input").type("hello world!");
         cy.get("@commentWidget")
            .find("button")
            .as("submitButton")
            .should("exist")
            .click();
         cy.get(".webix_progress_state").should("not.exist");
         cy.get(
            '[view_id="ABViewComment_2a2db721-5093-44a2-999d-3f4a58420129"] > .webix_comments > .webix_list > .webix_scroll_cont > .webix_list_item',
         ).as("theComment");
      });

      it("adds a comment", () => {
         //1. can find the first comment avatar text "A"
         cy.get("@theComment")
            .find(".webix_comments_avatar")
            .contains("A")
            .should("have.class", "webix_comments_avatar_image");

         //2. can find the first comment name "admin"
         cy.get("@theComment")
            .find(".webix_comments_name")
            .should("contain", "admin");

         //3. can find the first comment date "10 Sep, 00:00"
         cy.get("@theComment")
            .find("span.webix_comments_date")
            // Note test the date pattern, not that the actual date time is
            // correct
            .invoke("text")
            .should("match", /\d\d? [A-Z][a-z]{2}, \d\d:\d\d/);

         //4. can find the first comment message
         cy.get("@theComment")
            .find(".webix_comments_message")
            .should("contain", "hello world!");

         //5. can find the first comment menu which has icon "wxi-dots"
         cy.get("@theComment")
            .find(".webix_comments_menu")
            .as("commentMenu")
            .should("have.class", "wxi-dots")
            .and("have.class", "webix_icon");

         //6. can find the option icon "wix-pencil"
         //7. can find the option text "Edit"
         cy.get("@commentMenu").click({ force: true });
         cy.get(".webix_popup.webix_menu").filter(":visible").as("popUpMenu");
         cy.get("@popUpMenu")
            .find('[webix_l_id="edit"]')
            .should("contain", "Edit")
            .find("span")
            .should("have.class", "webix_list_icon webix_icon wxi-pencil");

         //8. can find the option icon "wxi-trash"
         //9. can find the option text "Remove"
         cy.get("@popUpMenu")
            .find('[webix_l_id="remove"]')
            .should("contain", "Remove")
            .find("span")
            .should("have.class", "webix_list_icon webix_icon wxi-trash");
      });

      //10. can find the text "test" on the first textarea
      it("edits a comment", () => {
         cy.get("@theComment")
            .find(".webix_comments_menu")
            .last()
            .click({ force: true });
         cy.get('[webix_l_id="edit"]').should("be.visible").click();
         cy.get(
            '[view_id="ABViewComment_2a2db721-5093-44a2-999d-3f4a58420129"]',
         ).as("theWidget");
         //10. can find the text original text in the textarea
         cy.get("@theWidget")
            .find("textarea")
            .as("input")
            .should("have.value", "hello world!");
         //11. can find the editted text in the comment
         //12. should't have found the original text in the comment
         cy.get("@input").clear();
         cy.get("@input").click();
         cy.get("@input").type("hey friends!");
         cy.get("@submitButton").click();
         cy.get("@theComment")
            .last()
            .should("not.contain", "hello world!")
            .should("contain", "hey friends!");
      });

      it("deletes a comment", () => {
         const textDelete = "DELETE THIS!";
         cy.get("@input").clear();
         cy.get("@input").click();
         cy.get("@input").type(textDelete);
         cy.get("@submitButton").find(".webix_disabled").should("not.exist");
         cy.get("@submitButton").click();
         cy.get(".webix_progress_state").should("not.exist");
         cy.get("@theComment")
            .last()
            .trigger("mouseover")
            .find(".webix_comments_menu")
            .as("commentMenu")
            .click({ force: true });
         cy.get('[webix_l_id="remove"]')
            .as("remove")
            .should("be.visible")
            .click();

         //13. can find the text "The comment will be removed. Are you sure?"
         cy.get("div.webix_popup_text > span").should(
            "have.text",
            "The comment will be removed. Are you sure?",
         );
         //14. can find the button "Cancel" on the popup
         cy.get("div.webix_popup_button")
            .first()
            .as("cancel")
            .should("have.text", "Cancel");
         //15. can find the button which has the text "Ok" on the popup
         cy.get("div.webix_popup_button")
            .last()
            .as("confirm")
            .should("have.text", "OK");
         //16. Cancel the delete
         cy.get("@cancel").click();
         cy.get("@theComment")
            .last()
            .should("be.visible")
            .and("contain", textDelete);
         // 17. Delete the comment
         // cy.get("@commentMenu").click({ force: true });
         // cy.get("@remove").should("be.visible").click();
         cy.get("@theComment")
            .last()
            .trigger("mouseover")
            .find(".webix_comments_menu")
            .click({ force: true });
         cy.get('[webix_l_id="remove"]').should("be.visible").click();

         cy.get("@confirm").click();
         cy.get("@theComment").should("not.contain", textDelete);
      });
   });
};
