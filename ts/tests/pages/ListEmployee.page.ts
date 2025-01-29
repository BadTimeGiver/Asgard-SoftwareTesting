import { Page } from '@playwright/test';

export default class ListEmployeePage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getEmployeesTable() {
        return await this.page.locator('table tbody tr');
    }

    getEmployeeNameCell(name: string) {
        return this.page.getByRole('cell', { name, exact: true });
    }
}