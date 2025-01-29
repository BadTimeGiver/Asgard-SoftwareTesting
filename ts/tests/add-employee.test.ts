import { fillFormToAddEmployee } from './test-utils';
import { test, expect } from './fixtures';
test('has name', async ({ page }) => {
  await page.goto('https://a.se2.hr.dmerej.info/');
  await page.getByRole('link', { name: 'Add new employee' }).click();
  await fillFormToAddEmployee(page, 'Name');
  await expect(page.getByRole('cell', { name: 'Name', exact: true })).toBeVisible();
});

test('duplicate employee', async ({page  }) => {
  await page.goto('https://a.se2.hr.dmerej.info/');
  await page.getByRole('link', { name: 'Add new employee' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Name');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('Email@mail.com');
  await page.locator('#id_address_line1').click();
  await page.locator('#id_address_line1').fill('Address');
  await page.locator('#id_address_line2').click();
  await page.locator('#id_address_line2').fill('Address 2');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('City');
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('12345');
  await page.getByPlaceholder('Hiring date').fill('2025-01-29');
  await page.getByPlaceholder('Job title').click();
  await page.getByPlaceholder('Job title').fill('Job Title');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.goto('https://a.se2.hr.dmerej.info/');
  await page.getByRole('link', { name: 'Add new employee' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Name');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('Email@mail.com');
  await page.locator('#id_address_line1').click();
  await page.locator('#id_address_line1').fill('Address');
  await page.locator('#id_address_line2').click();
  await page.locator('#id_address_line2').fill('Address 2');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('City');
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('12345');
  await page.getByPlaceholder('Hiring date').fill('2025-01-29');
  await page.getByPlaceholder('Job title').click();
  await page.getByPlaceholder('Job title').fill('Job Title');
  await page.getByRole('button', { name: 'Add' }).click();
  const employees = await page.locator('table tbody tr');  
  expect(await employees.count()).toBe(1); 
  
});