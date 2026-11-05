const { test, expect } = require('@playwright/test');

test('admin login, searchable safe table, profile edit and logout work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error(error.message); });
  await page.addInitScript(() => sessionStorage.setItem('tour', 'close'));
  const user = { id: 'test-admin', firstName: 'Ada', lastName: 'Lovelace', email: 'admin@example.test', role: 'admin', avatar: [], disabled: false };
  const rows = [user, ...Array.from({ length: 11 }, (_, index) => ({
    id: `user-${index}`, firstName: `User ${index}`, lastName: 'Example', email: `user${index}@example.test`, role: 'user', avatar: [], disabled: false,
  }))];
  rows[1].firstName = '<img src=x onerror=alert(1)>';
  const token = `eyJhbGciOiJub25lIn0.${Buffer.from(JSON.stringify({ user, exp: Math.floor(Date.now() / 1000) + 3600 })).toString('base64url')}.test`;
  let updated = false;
  await page.route('**/api/**', async route => {
    const request = route.request();
    const pathname = new URL(request.url()).pathname;
    if (pathname.endsWith('/auth/signin/local')) {
      await route.fulfill({ json: token });
    } else if (pathname.endsWith('/auth/me')) {
      await route.fulfill({ json: user });
    } else if (pathname.endsWith('/users') && request.method() === 'GET') {
      await route.fulfill({ json: { rows, count: rows.length } });
    } else if (pathname.endsWith('/users/test-admin') && request.method() === 'PUT') {
      Object.assign(user, request.postDataJSON().data);
      updated = true;
      await route.fulfill({ json: user });
    } else if (pathname.endsWith('/users/test-admin')) {
      await route.fulfill({ json: user });
    } else {
      throw new Error(`Unexpected test API request: ${request.method()} ${pathname}`);
    }
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Login to your Web App' })).toBeVisible();
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('main')).toContainText('Welcome, Ada');
  await page.goto('/#/admin/users');
  const table = page.locator('table');
  await expect(table.locator('tbody tr')).toHaveCount(10);
  await page.screenshot({ path: 'test-results/users.png', fullPage: true });
  await page.getByRole('link', { name: '2', exact: true }).click();
  await expect(table.locator('tbody tr')).toHaveCount(2);
  const search = page.getByRole('textbox', { name: 'Search users', exact: true });
  await search.fill('<img');
  await expect(table).toContainText('<img src=x onerror=alert(1)>');
  await expect(table.locator('img[src="x"]')).toHaveCount(0);
  await search.fill('');
  await expect(table.locator('tbody tr')).toHaveCount(10);
  await page.getByRole('columnheader', { name: /First Name/ }).click();
  await expect(page.getByRole('columnheader', { name: /First Name/ })).toHaveAttribute('aria-label', 'First Name sort desc');
  await page.getByRole('columnheader', { name: /First Name/ }).click();
  await expect(page.getByRole('columnheader', { name: /First Name/ })).toHaveAttribute('aria-label', 'First Name sort asc');
  await search.fill('admin@example.test');
  await expect(table.locator('tbody tr')).toHaveCount(1);
  await table.getByRole('button', { name: 'View', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'View User' })).toBeVisible();
  await expect(page.locator('main input[value="admin@example.test"]')).toBeVisible();
  await page.goto('/#/app/profile');
  await expect(page.getByRole('heading', { name: 'Edit My Profile' })).toBeVisible();
  await page.getByLabel('First Name', { exact: true }).fill('Grace');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await expect.poll(() => updated).toBe(true);
  expect(user.firstName).toBe('Grace');
  await page.getByRole('link', { name: 'Account menu' }).click();
  await page.getByRole('menuitem', { name: /Log Out/ }).click();
  await expect(page.getByRole('heading', { name: 'Login to your Web App' })).toBeVisible();
  expect(errors).toEqual([]);
});
