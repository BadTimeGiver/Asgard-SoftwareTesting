import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.getByRole('link', { name: 'Home' }).click();
    }
}
