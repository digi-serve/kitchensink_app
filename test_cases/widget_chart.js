export default (folderName, Common) => {
   describe("Chart", () => {
      beforeEach(() => {
         cy.visit("/");
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Chart-41d39ac7-e7d9-405d-a570-b79686ccdd5a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();
      });

      it("Displays a Pie Chart", () => {
         // check the legend of pie chart
         cy.get('*[class^="webix_chart_legend_item"]').then(($lis) => {
            expect($lis.eq(2)).to.contain("5");
            expect($lis.eq(1)).to.contain("6");
            expect($lis.eq(0)).to.contain("7");
            expect($lis.eq(3)).to.contain("9");
            expect($lis.eq(4)).to.contain("3");
         });
         // check the percent labels
         cy.get('[class="webix_canvas_text"]').then(($lis) => {
            expect($lis.eq(2)).to.contain("28.57 %");
            expect($lis.eq(1)).to.contain("17.14 %");
            expect($lis.eq(0)).to.contain("20 %");
            expect($lis.eq(3)).to.contain("25.71 %");
            expect($lis.eq(4)).to.contain("8.57 %");
         });
         // check the tag area
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(0)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "303.5,62,303,0,314,0,324,3,334,8,343,14,351,22,357,31,362,41,362,43,303.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(1)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "303.5,62,362,43,365,53,365,64,364,75,361,85,356,95,349,104,348,105,303.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(2)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "303.5,62,348,105,340,112,331,118,321,122,310,124,299,124,288,123,278,119,268,114,260,107,253,99,251,96,303.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(3)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "303.5,62,251,96,246,87,242,77,241,66,241,55,243,44,247,34,253,25,260,17,269,10,271,8,303.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(4)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "303.5,62,271,8,281,4,291,1,302,0,303,0,303.5,62"
            );
      });

      it("Displays a Bar Chart", () => {
         // check the legend of bar chart
         cy.get('*[class^="webix_chart_legend_item"]').then(($lis) => {
            expect($lis.eq(7)).to.contain("5");
            expect($lis.eq(6)).to.contain("6");
            expect($lis.eq(5)).to.contain("7");
            expect($lis.eq(8)).to.contain("9");
            expect($lis.eq(9)).to.contain("3");
         });
         // check the canvas text (axis y)
         cy.get('div[class*="webix_canvas_text webix_axis_item_y"]').then(
            ($lis) => {
               expect($lis.eq(0)).to.contain("0");
               expect($lis.eq(1)).to.contain("20");
               expect($lis.eq(2)).to.contain("40");
               expect($lis.eq(3)).to.contain("60");
               expect($lis.eq(4)).to.contain("80");
               expect($lis.eq(5)).to.contain("100");
            }
         );
         // check the canvas text (axis x)
         cy.get('div[class*="webix_canvas_text webix_axis_item_x"]').then(
            ($lis) => {
               expect($lis.eq(2)).to.contain("5");
               expect($lis.eq(1)).to.contain("6");
               expect($lis.eq(0)).to.contain("7");
               expect($lis.eq(3)).to.contain("9");
               expect($lis.eq(4)).to.contain("3");
            }
         );
         // check the tag area
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(0)
            .should(
               "have.attr",
               "coords",
               "35.19999999999999,101,79.19999999999999,125"
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(1)
            .should("have.attr", "shape", "RECT")
            .should(
               "have.attr",
               "coords",
               "150.60000000000002,105,194.60000000000002,125"
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "266,91,310,125");

         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(3)
            .should("have.attr", "shape", "RECT")
            .should(
               "have.attr",
               "coords",
               "381.4000000000001,94,425.4000000000001,125"
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(4)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "496.79999999999995,116,540.8,125");
      });

      it("Displays a Line Chart", () => {
         // check the canvas text (axis y)
         cy.get('div[class*="webix_canvas_text webix_axis_item_y"]').then(
            ($lis) => {
               expect($lis.eq(6)).to.contain("0");
               expect($lis.eq(7)).to.contain("20");
               expect($lis.eq(8)).to.contain("40");
               expect($lis.eq(9)).to.contain("60");
               expect($lis.eq(10)).to.contain("80");
               expect($lis.eq(11)).to.contain("100");
            }
         );
         // check the canvas text (axis x)
         cy.get('div[class*="webix_canvas_text webix_axis_item_x"]').then(
            ($lis) => {
               expect($lis.eq(7)).to.contain("5");
               expect($lis.eq(6)).to.contain("6");
               expect($lis.eq(5)).to.contain("7");
               expect($lis.eq(8)).to.contain("9");
               expect($lis.eq(9)).to.contain("3");
            }
         );
         // check the tag area
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(0)
            .should(
               "have.attr",
               "coords",
               "53.69999999999999,96,61.69999999999999,104"
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(1)
            .should(
               "have.attr",
               "coords",
               "168.60000000000002,99.57499999999999,176.60000000000002,107.57499999999999"
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "coords", "284,85.2875,292,93.2875");
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(3)
            .should(
               "have.attr",
               "coords",
               "399.4000000000001,88.8625,407.4000000000001,96.86250000000001"
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(4)
            .should("have.attr", "coords", "514.8,110.2875,522.8,118.2875");
      });
   });
};
