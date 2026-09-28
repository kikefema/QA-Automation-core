import { test, expect } from '@playwright/test';

test('Playwright example test', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Playwright/);
});