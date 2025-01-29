import { chromium } from '@playwright/test'
import { test, expect } from './fixtures';

test('has title', async ({ pageWithReset }) => {
  const page = pageWithReset;

  // Create a new team
  await page.goto('/add_team')
  const nameInput = page.locator('input[name="name"]')
  const teamName = 'my team'
  await nameInput.fill(teamName)
  await page.click("text='Add'")

  // Check the team has been created
  await page.goto('/teams')
  const isVisible = await page.isVisible(`td:has-text('${teamName}')`)
  expect(isVisible, "Should have title").toBe(true)
})
