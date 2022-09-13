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
            .eq(2)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "286.5,62,331,105,323,112,314,118,304,122,293,124,282,124,271,123,261,119,251,114,243,107,236,99,234,96,286.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(1)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "286.5,62,345,43,348,53,348,64,347,75,344,85,339,95,332,104,331,105,286.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(0)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "286.5,62,286,0,297,0,307,3,317,8,326,14,334,22,340,31,345,41,345,43,286.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(3)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "286.5,62,234,96,229,87,225,77,224,66,224,55,226,44,230,34,236,25,243,17,252,10,254,8,286.5,62"
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(4)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "286.5,62,254,8,264,4,274,1,285,0,286,0,286.5,62"
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
               "31.80000000000001,101,75.80000000000001,125"
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(1)
            .should("have.attr", "shape", "RECT")
            .should(
               "have.attr",
               "coords",
               "140.39999999999998,105,184.39999999999998,125"
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "249,91,293,125");

         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(3)
            .should("have.attr", "shape", "RECT")
            .should(
               "have.attr",
               "coords",
               "357.5999999999999,94,401.5999999999999,125"
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(4)
            .should("have.attr", "shape", "RECT")
            .should(
               "have.attr",
               "coords",
               "466.20000000000005,116,510.20000000000005,125"
            );
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
               "50.30000000000001,96,58.30000000000001,104"
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(1)
            .should(
               "have.attr",
               "coords",
               "158.39999999999998,99.57499999999999,166.39999999999998,107.57499999999999"
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "coords", "267,85.2875,275,93.2875");
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(3)
            .should(
               "have.attr",
               "coords",
               "375.5999999999999,88.8625,383.5999999999999,96.86250000000001"
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(4)
            .should(
               "have.attr",
               "coords",
               "484.20000000000005,110.2875,492.20000000000005,118.2875"
            );
      });
   });
};
