import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {

        super(page); // its calling parent class constructor and passing page object to it

        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('[data-test="error"]')

    }

    async navigate() {
        await this.page.goto('/');
    }

    async enterUsername(username: string) {
    await this.username.fill(username);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(user: string, pass: string) {
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickLoginButton();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

}