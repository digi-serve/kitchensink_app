export default (folderName) => {
   describe("Tab", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Tab-7334ce3e-ca25-432d-94e1-40e53a72edb3-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      });
      //1. can find the text "test tab 1"
      it("can find the text test tab 1", () => {
         cy.get(
            'div[button_id="d30d565b-b56c-475b-be1b-b148f2cae4dc"]',
         ).click();
         cy.get("div")
            .should("contain", "test tab 1")
            .and("have.class", "webix_el_box");
      }); //End 1

      //2. can find the text "test tab 2"
      it("can find the text test tab 2", () => {
         cy.get(
            'div[button_id="72167997-ce58-4a92-a330-203cbdd7e070"]',
         ).click();
         cy.get("div")
            .should("contain", "test tab 2")
            .and("have.class", "webix_el_box");
      }); //End 2

      //3. can find the text "test tab 3"
      it("can find the text test tab 3", () => {
         cy.get(
            'div[button_id="173fdd14-cc17-46ff-9996-0668c13429cd"]',
         ).click();
         cy.get("div")
            .should("contain", "test tab 3")
            .and("have.class", "webix_el_box");
      }); //End 3

      //4. can find the text "test tab 4"
      it("can find the text test tab 4", () => {
         cy.get(
            'div[button_id="89fc053f-29a6-4148-b7f5-78709b12982d"]',
         ).click();
         cy.get("div")
            .should("contain", "test tab 4")
            .and("have.class", "webix_el_box");
      }); //End 4

      //5. can find the text "test tab 5"
      it("can find the text test tab 5", () => {
         cy.get(
            'div[button_id="3441a8bb-7209-4e0e-95ec-4cf6f2a234b7"]',
         ).click();
         cy.get("div")
            .should("contain", "test tab 5")
            .and("have.class", "webix_el_box");
      }); //End 5
   }); //End describe
}; //End Export
