import { Page } from '@playwright/test';

export type EmployeeInformations = {
	name: string;
	email: string;
	address1: string;
	address2: string;
	city: string;
	zipCode: string;
	hiringDate: string;
	jobTitle: string
}

export class AddEmployeePage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async navigate() {
		await this.page.getByRole('link', { name: 'Add new employee' }).click();
	}

	async fillEmployeeForm(data: EmployeeInformations) {
		await this.page.getByPlaceholder('Name').fill(data.name);
		await this.page.getByPlaceholder('Email').fill(data.email);
		await this.page.locator('#id_address_line1').fill(data.address1);
		await this.page.locator('#id_address_line2').fill(data.address2);
		await this.page.getByPlaceholder('City').fill(data.city);
		await this.page.getByPlaceholder('Zip code').fill(data.zipCode);
		await this.page.getByPlaceholder('Hiring date').fill(data.hiringDate);
		await this.page.getByPlaceholder('Job title').fill(data.jobTitle);
	}

	async submit() {
		await this.page.getByRole('button', { name: 'Add' }).click();
	}
}
