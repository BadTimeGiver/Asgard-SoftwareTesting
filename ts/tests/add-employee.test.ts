import { test, expect } from '@playwright/test';
import { fillFormToAddEmployee } from './test-utils';

test('has name', async ({ page }) => {
  await page.goto('https://a.se2.hr.dmerej.info/');
  await page.getByRole('link', { name: 'Reset database' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('link', { name: 'Add new employee' }).click();
  await fillFormToAddEmployee(page, 'Name');
  await expect(page.getByRole('cell', { name: 'Name', exact: true })).toBeVisible();
});