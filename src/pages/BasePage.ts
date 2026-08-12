import {Locator, Page} from '@playwright/test';

export class BasePage {
   protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getTitle() {
        return await this.page.title();
    }

    async getCurrentURL() {
        return this.page.url();
    }

    async reloadPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async isVisible(locator: Locator) {
        return await locator.isVisible();
    }


}

