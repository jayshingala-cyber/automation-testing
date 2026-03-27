import { test, expect } from '@playwright/test';

test('handle iframe example', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frame = page.frameLocator('#mce_0_ifr');

  await frame.locator('#tinymce').fill('Hello Jay');

  await expect(frame.locator('#tinymce')).toContainText('Hello Jay');

});