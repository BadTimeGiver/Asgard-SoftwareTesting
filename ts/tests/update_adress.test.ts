import { test, expect, chromium } from '@playwright/test';
test.beforeEach('init page and reset database',async () => {
    const browser = await chromium.launch({ slowMo: 1000 })
    const page = await browser.newPage()
   
    await page.goto('/reset_db')
    const proceedButton = page.locator("button:has-text('proceed')")
    await proceedButton.click()
  })

test('test', async () => {
  const browser = await chromium.launch({ slowMo: 1000 });
  const page = await browser.newPage();
  

  await page.getByRole('link', { name: 'Add new employee' }).click();
  await page.getByPlaceholder('Name').fill('Name');
  await page.getByPlaceholder('Email').fill('email@mail.com');
  await page.locator('#id_address_line1').fill('Address');
  await page.locator('#id_address_line2').fill('Address 2');
  await page.getByPlaceholder('City').fill('City');
  await page.getByPlaceholder('Zip code').fill('12345');
  await page.getByPlaceholder('Hiring date').fill('2025-01-29');
  await page.getByPlaceholder('Job title').fill('Job Title');
  await page.getByRole('button', { name: 'Add' }).click();


  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByRole('link', { name: 'Update address' }).click();

  // Remplir Address Line 2
  await page.locator('#id_address_line2').click();
  await page.locator('#id_address_line2').fill('Address test');
  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('link', { name: 'Update address' }).click();

  const addressLine2 = await page.locator('#id_address_line2').inputValue();

  expect(addressLine2).toBe('Address test');
});
