import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../data/loginData.json';

test.describe('Login Tests', () => {

test('Valid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await expect(page).toHaveURL(/inventory/);

});

test('Invalid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    const errorMessage = await login.getErrorMessage();
    await expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    await expect(login.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

});

});