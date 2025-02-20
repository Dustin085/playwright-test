import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './',

    // 指向你的目標網站
    use: {
        // baseURL: 'https://your-target-website.com',
        headless: true,               // 使用無頭模式運行測試
        trace: 'on-first-retry',      // 在測試失敗時收集追蹤記錄
        screenshot: 'only-on-failure', // 測試失敗時保存截圖
        video: 'retain-on-failure',   // 失敗時保留錄影
        timeout: 30000,               // 增加超時時間，適應網路延遲
    },

    // 針對多瀏覽器測試
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],

    reporter: [['html', { outputFolder: 'playwright-report' }]],
});
