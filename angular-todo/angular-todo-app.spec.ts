import test from "@playwright/test";

const SCREENSHOT_BASE_PATH = './angular-todo/screenshots/';


test('測試 Angular Todo App', async ({ page }) => {
    await page.goto('https://angular-todo-de18c.web.app/');

    await test.step('加入第一個todo並截圖', async () => {
        await page.fill('input[name=newTodoTextInput]', 'Playwright 測試');
        await page.press('input[name=newTodoTextInput]', 'Enter');

        // 截圖保存
        await page.screenshot({ path: `${SCREENSHOT_BASE_PATH}add-first-todo.png` });
    });


    await page.fill('input[name=newTodoTextInput]', 'Playwright 測試2');
    await page.press('input[name=newTodoTextInput]', 'Enter');

    // 截圖保存
    await page.screenshot({ path: `${SCREENSHOT_BASE_PATH}add-second-todo.png` });

    await page.getByRole('list').first().locator('.horizontal-card').locator('mat-card-actions').locator('button').first().click();

    // 截圖保存
    await page.screenshot({ path: `${SCREENSHOT_BASE_PATH}check-todo.png` });
});