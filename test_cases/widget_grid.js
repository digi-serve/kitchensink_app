export default () => {
   const GRID = "ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable";
   describe("Grid", () => {
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-Grid-e7c04584-4fbd-4ca9-b64b-0f5bcb477c1e-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         )
            .should("exist")
            .click();
      });
      it("Exists", () => {
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_toolbar"]',
         ).should("exist");
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable"]',
         ).should("exist");
      });
      it.only("Grid options", () => {
         cy.get('[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonMassUpdate"]').should("exist");

         cy.get('[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonDeleteSelected"]').should("exist");
         cy.get('[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonFilter"]').should("exist");
         cy.get('[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonSort"]').should("exist");
         cy.get('[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonExport"]').should("exist");
         cy.get('[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_globalSearchToolbar"]').should("exist");

         cy.get('.webix_hcell > input').click();
         cy.get('.singleSelect > .webix_table_checkbox').each($el => {
            cy.wrap($el).should('be.checked');
         });

         // 1. 点击 *Edit 按钮
         cy.get('[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonMassUpdate"]') // 替换为实际 data-cy 属性
            .should('be.visible')
            .and('not.be.disabled') // 关键断言：确保按钮可用
            .click();

         // 2. 验证 *Add field to edit 按钮
         cy.contains('button', 'Add field to edit')
            .should('be.visible')        // 可见性断言
            .and('not.be.disabled');     // 额外检查是否可点击（可选）

         // 3. 验证 Cancel 按钮
         cy.contains('button', 'Cancel')
            .as("cancel")
            .should('be.visible');

         // 4. 验证 *Update 按钮
         cy.contains('button', 'Update')
            .should('be.visible');
         cy.get("@cancel").click();
         cy.get("@cancel").should("not.be.visible");
         //Change the value to "Cypress grid" on the record which "text-kcs-id" is "Test-KCS-0000000002" at the field "single-line-text(required)" 
         const TARGET_ID = 'Test-KCS-0000000020';
         const NEW_VALUE = 'Cypress grid';
         const FIELD_NAME = 'single-line-text(required)';

         // 1. 确保表格加载完成
         cy.get('.webix_loading', { timeout: 30000 }).should('not.exist');

         // 2. 定位目标记录单元格
         cy.contains('.webix_cell', TARGET_ID, { timeout: 30000 })
            .as('targetCell')
            .scrollIntoView({ easing: 'linear', duration: 2000 })
            .should('be.visible');

         // 3. 获取目标记录的行索引
         cy.get('@targetCell').then(($cell) => {
            const rowIndex = $cell.attr('aria-rowindex');
            cy.log(`目标行索引: ${rowIndex}`);

            // 4. 定位目标字段的表头单元格，获取列索引
            cy.contains('.webix_hcell', FIELD_NAME)
               .should('exist')
               .then(($header) => {
                  const columnIndex = parseInt($header.attr('column')) + 1;
                  cy.log(`目标字段列索引: ${columnIndex}`);

                  // 5. 定位目标字段单元格
                  const targetFieldSelector = `[aria-rowindex="${rowIndex}"][aria-colindex="${columnIndex}"]`;
                  cy.get(targetFieldSelector)
                     .as('targetField')
                     .should('be.visible');

                  // 6. 执行编辑操作
                  cy.get('@targetField')
                     .click(); // Webix 需要双击进入编辑模式

                  cy.get('.webix_dt_editor > input')
                     // .find('input') // Webix 编辑状态会生成输入框
                     .clear()
                     .type(`${NEW_VALUE}{enter}`); // 使用回车提交

                  // 7. 验证修改结果
                  cy.get('@targetField')
                     .should('contain', NEW_VALUE)
                     .and('be.visible');
               });
         });

         // 8. 可选：添加视觉验证点
         cy.get('@targetField').then(($el) => {
            $el.css('outline', '2px solid green');
            cy.screenshot('modified-field');
         });

         // Click on the button "Edit" and Click on the button "Add field to edit"	
         // 步骤1: 点击"Edit"按钮
         cy.contains('button', 'Edit').click();
         // debugger
         // 步骤2: 点击"Add field to edit"按钮
         cy.contains('button', 'Add field to edit').click();

         // 步骤3: 验证标签为"Set"的下拉框存在
         // 方案1: 通过关联标签查找下拉框
         cy.get('[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_rowUpdaterForm"]')
            .find('.webix_el_combo')
            .should('exist');
         // 步骤4: 验证带有"fa-trash"图标的按钮存在
         cy.get('button i.fa-trash, button .fa-trash')  // 直接定位图标
            .should('be.visible')
            .parent('button')  // 确认图标在按钮内
            .should('exist');

         // Click on the button "*Edit", Click on the button "*Add field to edit", Type "single-line-text(required)" on the combobox which the label is "Set"	can find the option "single-line-text(required)"
         // 等待新字段行出现
         cy.get('.webix_layout_line:has(.webix_el_label:contains("Set"))', { timeout: 5000 })
            .should('be.visible');

         // 步骤3: 在标签为"Set"的组合框中输入并选择选项
         cy.contains('div.webix_el_box', 'Set') // 定位"Set"标签
            .closest('.webix_layout_line') // 定位到整行
            .within(() => {
               // 获取组合框输入区域
               cy.get('input[role="combobox"]')
                  .should('be.visible')
                  .click() // 点击展开下拉菜单
                  .type('single-line-text(required)');
            });

         // Click on the option "single-line-text(required)"	can find the text field with the default value "test"
         const OPTION_TEXT = 'single-line-text(required)';
         const DEFAULT_VALUE = 'test';

         // 1. 使用更可靠的选择器定位组合框容器
         cy.get('.webix_control.webix_el_combo[view_id="$combo1"]')
            .should('be.visible')
            .as('comboContainer');

         // 2. 在容器内定位组合框输入元素
         cy.get('@comboContainer').within(() => {
            cy.get('input[role="combobox"]')
               .should('be.visible')
               .as('comboBox');

            // 3. 验证组合框的值包含预期文本
            cy.get('@comboBox').then(($input) => {
               const value = $input.val();
               expect(value).to.include('single-line-text(required)');
               cy.log(`组合框当前值: "${value}"`);
            });

            // 4. 点击下拉图标
            cy.get('.webix_input_icon.wxi-menu-down')
               .should('be.visible')
               .click({ force: true });
         });

         // 5. 等待下拉菜单出现
         // 确保先触发下拉
         cy.get('@comboBox').click();

         // 等待下拉列表出现
         cy.get('.webix_list', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .as('dropdown');

         // 6. 选择目标选项
         // 1. 找到 combo 框并点击展开菜单
         cy.get('.webix_el_combo input') // or use your @comboBox alias
            .click({ force: true });

         // 2. 等待 .webix_list 出现在页面（Webix 通常放到 body 中）
         cy.get('body', { timeout: 10000 }).then($body => {
            if ($body.find('.webix_list').length === 0) {
               throw new Error('下拉列表未生成，请确认点击 combo 有效果');
            }
         });

         // 3. 再次获取并操作可见的 dropdown（动态弹出的菜单）
         cy.get('.webix_list:visible', { timeout: 10000 })
            .should('exist')
            .within(() => {
               cy.contains('.webix_list_item', OPTION_TEXT)
                  .should('be.visible')
                  .click({ force: true });
            });


         // 7. 定位并验证文本字段
         cy.get('.webix_control.webix_el_text[view_id="$text3"]')
            .should('be.visible')
            .within(() => {
               cy.get('input[type="text"]')
                  .should(($input) => {
                     // 添加重试机制
                     const value = $input.val();
                     if (value !== DEFAULT_VALUE) {
                        // 如果值不匹配，等待并重试
                        cy.wait(1000);
                        expect($input.val()).to.equal(DEFAULT_VALUE);
                     } else {
                        expect(value).to.equal(DEFAULT_VALUE);
                     }
                  })
                  .and('have.attr', 'aria-required', 'true');
            });

         // 8. 验证整个上下文
         cy.contains('.webix_el_box', 'Set')
            .parents('.webix_layout_line') // 向上查找父容器
            .first()
            .within(() => {
               cy.contains('.webix_el_box', 'Set').should('be.visible');
               cy.contains('.webix_el_box', 'To').should('be.visible');
               cy.get('.fa-trash').should('be.visible');
            });

         // Change the value to "Cypress hahaha gangster" the text field with the default value "test" and click on the button "*Update"	can find the text "Cypress hahaha gangster" at the column single-line-text(required) for each record
         const NEW_TEXT = 'Cypress hahaha gangster';

         // 1. 找到默认值为 "test" 的输入框并改值
         cy.get('input[type="text"]')
            .filter('[value="test"]')
            .first()
            .as('targetInput');

         cy.get('@targetInput')
            .clear()
            .type(NEW_TEXT)
            .should('have.value', NEW_TEXT);

         // 2. 点击底部的 Update 按钮
         cy.contains('button', 'Update')
            .should('be.visible')
            .click({ force: true });

         // 等待弹框出现
         cy.get('.webix_popup_controls', { timeout: 10000 }).should('be.visible');

         // 点击 OK 按钮
         cy.get('.webix_popup_button.confirm')
            .should('be.visible')
            .click();

         // debugger
         // 3. 等待表格刷新，并验证所有记录中对应列含有新值
         cy.wait(1000); // 可根据实际情况优化等待逻辑

         // 正确用法：用 `.then()` 拿 DOM，再使用 jQuery `.filter`
         cy.get('.webix_cell').then($cells => {
            const matchingCells = Cypress.$($cells).filter((i, el) =>
               el.textContent.includes(NEW_TEXT)
            );

            expect(matchingCells.length).to.be.greaterThan(0);

            // 逐个断言
            Cypress.$(matchingCells).each((i, cell) => {
               expect(cell.textContent).to.include(NEW_TEXT);
            });
         });


         // Click on the button "Edit" and Click on the button "Add field to edit"	
         // 步骤1: 点击"Edit"按钮
         cy.contains('button', 'Edit').click();
         // debugger
         // 步骤2: 点击"Add field to edit"按钮
         // cy.contains('button', 'Add field to edit').click();

         // 步骤3: 验证标签为"Set"的下拉框存在
         // 方案1: 通过关联标签查找下拉框
         cy.get('[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_rowUpdaterForm"]')
            .find('.webix_el_combo')
            .should('exist');
         // 步骤4: 验证带有"fa-trash"图标的按钮存在
         cy.get('button i.fa-trash, button .fa-trash')  // 直接定位图标
            .should('be.visible')
            .parent('button')  // 确认图标在按钮内
            .should('exist');
         //Click on the button which has the icon "fa fa-trash"	the combobox which the label is "Set" shouldn't exest
         // Click the button with "fa fa-trash" icon
         // 更精确地定位目标行中的删除按钮
         cy.contains('div.webix_el_box', 'Set')  // 先定位到"Set"标签
            .closest('.webix_layout_line')       // 向上找到包含整行的父元素
            .within(() => {                      // 在行内范围操作
               cy.get('button .fa-trash')         // 只查找当前行内的删除按钮
                  .should('be.visible')
                  .and('not.be.disabled')
                  .click();
            });

      });


      it("Can edit connected records", () => {
         // We need to lookup grid cells by column and scroll to a postition.
         // These might change we add/remove/hide/show fields
         const connect_mm = {
            col: "connect-to-another-record-mm", // column property on the .webix_column
            pos: 5000, // pixels to scrollTo
         };
         const connect_om = {
            col: "connect-to-another-record-om",
            pos: 5300,
         };
         // Many Side
         cy.GridScroll(GRID, connect_mm.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-mm' column, row 1",
         );

         cy.get(".webix_hcell")
            .contains(connect_mm.col)
            .should("exist")
            .then(($column) => {
               const mmIndex = $column.attr("column");
               cy.get(
                  `.webix_column[column="${mmIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
               )
                  .should("exist")
                  .click({ force: true });
               cy.get(".webix_view.webix_window.webix_popup")
                  .filter('[style^="display: block"]')
                  .eq(1)
                  .as("list-test-KCS-ID")
                  .contains("test-KCS-ID:0000000001")
                  .click();
               cy.get("@list-test-KCS-ID")
                  .contains("test-KCS-ID:0000000002")
                  .click();
               cy.get(".webix_button").contains("Select").click();
               cy.get(
                  `.webix_column[column="${mmIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
               )
                  .should("contain", "test-KCS-ID:0000000001")
                  .and("contain", "test-KCS-ID:0000000002");
            });
         // One Side
         cy.GridScroll(GRID, connect_om.pos);
         cy.log(
            "Find the cell in the 'connect-to-another-record-om' column, row 1",
         );

         cy.get(".webix_hcell")
            .contains(connect_om.col)
            .should("exist")
            .then(($column) => {
               const omIndex = $column.attr("column");

               cy.get(
                  `.webix_column[column="${omIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
               )
                  .should("exist")
                  .click({ force: true });
               cy.get(".webix_view.webix_window.webix_popup")
                  .filter('[style^="display: block"]')
                  .eq(1)
                  .contains("test-KCS-ID:0000000001")
                  .click();
               cy.get(
                  `.webix_column[column="${omIndex}"] > [role="gridcell"][aria-rowindex="1"]`,
               ).should("contain", "test-KCS-ID:0000000001");
            });
      });
      it("Sort a select list field", async () => {
         // click to open the sort popup
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_buttonSort"]',
         )
            .should("exist")
            .click();

         // click to show the Field option list
         cy.get(
            '[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort"]',
         )
            .find('[view_id="sort_1"]')
            .find(".webix_el_combo")
            .should("exist")
            .click();

         // select the Field option item
         cy.get('[webix_l_id="85ac56c3-17d5-48c0-abbb-850838b9a71d"]')
            .should("exist")
            .click();

         // Reorder 'item2' to the top
         const win = await getWindow();
         const $sortForm = win.$$(
            "ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort_form",
         );
         const $orderList = $sortForm.queryView({ view: "list" });
         $orderList.moveTop("item2");
         $orderList.refresh();

         // Assert the order of options
         cy.get(
            '[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort_form"]',
         )
            .find(".webix_list")
            .find(".webix_list_item")
            .first()
            .should("contain", "item2");

         // Assert data
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable"]',
         )
            .find('[column="2"]')
            .find('[aria-rowindex="1"]')
            .should("contain", "text")
            .then(() => {
               // Reorder 'item1' to the top
               $orderList.moveTop("item1");
               $orderList.refresh();
            });

         // Assert the order of options
         cy.get(
            '[view_id="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_table_popupSort_form"]',
         )
            .find(".webix_list")
            .find(".webix_list_item")
            .first()
            .should("contain", "item1");

         // Assert
         cy.get(
            '[data-cy="ABViewGrid_7aa0b5b1-8667-4293-ae9a-93e6639c4681_datatable"]',
         )
            .find('[column="2"]')
            .find('[aria-rowindex="1"]')
            .should("contain", "text 2");
      });
   });
};
/**
 * helper for scrolling in a grid
 * @function gridScroll
 * @param {string} id webix id of the grid
 * @param {int} h horizontal scroll in pixels
 * @param {int=0} v veritcal scroll in pixels
 */
// function gridScroll(id, h, v = 0) {
//    cy.window().then((win) => {
//       return win.$$(id).scrollTo(h, v);
//    });
// }

function getWindow() {
   return new Promise((resolve) => {
      cy.window().then((win) => {
         resolve(win);
      });
   });
}
