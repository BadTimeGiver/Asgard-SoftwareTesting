import { test as base, expect, chromium } from '@playwright/test'

export const test = base.extend<{ pageWithReset: any }>({
    pageWithReset: async ({ }, use) => {
        const browser = await chromium.launch()
        const page = await browser.newPage()

        await page.goto('/reset_db')
        await page.locator("button:has-text('proceed')").click()

        await use(page);

        await browser.close()
    },
})

export { expect }
