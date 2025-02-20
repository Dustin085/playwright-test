// google-test.spec.js
import { test, expect } from '@playwright/test';

test('react-weather-app測試', async ({ page }) => {
    await page.goto('https://react-weather-app-two-psi.vercel.app/');

    // 截圖保存
    await page.screenshot({ path: 'search-result.png' });
});
