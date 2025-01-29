import { test, expect } from './fixtures';
import { AddEmployeePage, EmployeeInformations } from './pages/AddEmployee.page';
import { HomePage } from './pages/HomePage.page';

// test('has name', async ({ pageWithReset }) => {
// 	const page = pageWithReset;
// 	await page.goto('https://a.se2.hr.dmerej.info/');
// 	await page.getByRole('link', { name: 'Add new employee' }).click();
// 	await fillFormToAddEmployee(page, 'Name');
// 	await expect(page.getByRole('cell', { name: 'Name', exact: true })).toBeVisible();
// });

test('duplicate employee', async ({ pageWithReset }) => {
	const page = pageWithReset;

	const employeeData: EmployeeInformations = {
		address1: 'Address',
		address2: 'Address 2',
		city: 'City',
		email: 'email@mail.com',
        hiringDate: '2025-01-29',
        jobTitle: 'Job Title',
        name: 'Name',
		zipCode: "12345"
	}

	const homePage = new HomePage(page);
	const addEmployeePage = new AddEmployeePage(page);

	addEmployeePage.navigate();
	await addEmployeePage.fillEmployeeForm(employeeData);
	await addEmployeePage.submit();

	await homePage.navigate();

	await addEmployeePage.navigate();
	await addEmployeePage.fillEmployeeForm(employeeData);
	await addEmployeePage.submit();

	const employees = await page.locator('table tbody tr');
	expect(await employees.count()).toBe(1);

});

// test('user with long zip code', async ({ pageWithReset }) => {
// 	const page = pageWithReset;

// 	await page.goto('/add_employee')
// 	await page.getByPlaceholder('Name').fill('Name');
// 	await page.getByPlaceholder('Email').fill('email@mail.com');
// 	await page.locator('#id_address_line1').fill('Address');
// 	await page.locator('#id_address_line2').fill('Address 2');
// 	await page.getByPlaceholder('City').fill('City');
// 	await page.getByPlaceholder('Zip code').fill('12345612345612345611');
// 	await page.getByPlaceholder('Hiring date').fill('2025-01-29');
// 	await page.getByPlaceholder('Job title').fill('Job Title');
// 	await page.getByRole('button', { name: 'Add' }).click();
// 	await expect(page).toHaveURL("https://a.se2.hr.dmerej.info/employees")
// });