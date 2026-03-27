const { expect } = require("@playwright/test");

exports.multiple1=class multiple1
{
    constructor(page,context)
    {
        this.page=page;
        this.context=context;
    }
    async gototab()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/links.php?utm_source=chatgpt.com');
        await this.page.locator('.accordion-button.collapsed').nth(1).click();
        await this.page.getByRole('link',{name:"Browser Window"}).click();
        await this.page.waitForTimeout(3000);
    }
    async multab()
    {
        const promise = this.context.waitForEvent('page');
        await this.page.locator('.btn.btn-primary').nth(0).click();
        const newtab= await promise;
        await expect(newtab).toHaveURL('https://www.tutorialspoint.com/selenium/practice/new-tab-sample.php');
        await expect(newtab.locator('.row.d-flex.justify-content-center.logindiv.bg-white.rounded')).toContainText('Sample New Tab');
        await this.page.waitForTimeout(3000);
        await newtab.close();
    }
    async mulwin()
    {
        const promise = this.context.waitForEvent('page');
        await this.page.locator('.btn.btn-primary').nth(1).click();
        const newwin= await promise;
        await expect(newwin).toHaveURL('https://www.tutorialspoint.com/selenium/practice/new-window.php');
        await expect(newwin.locator('.row.d-flex.justify-content-center.logindiv.bg-white.rounded')).toContainText('Sample Text');
        await this.page.waitForTimeout(3000);
        await newwin.close();
    }
}