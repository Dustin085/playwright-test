import test from "@playwright/test";

const BASE_PATH = './angular-todo/';


test('測試 Angular Todo App', async ({ page }) => {
    await page.goto('https://angular-todo-de18c.web.app/');

    await page.fill('input[name=newTodoTextInput]', 'Playwright 測試');
    await page.press('input[name=newTodoTextInput]', 'Enter');

    // 截圖保存
    await page.screenshot({ path: `${BASE_PATH}add-first-todo.png` });

    await page.fill('input[name=newTodoTextInput]', 'Playwright 測試2');
    await page.press('input[name=newTodoTextInput]', 'Enter');

    // 截圖保存
    await page.screenshot({ path: `${BASE_PATH}add-second-todo.png` });
});