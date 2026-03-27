import{expect} from '@playwright/test';
exports.multiple=class multiple
{
    constructor(page,context)
    {
        this.page=page;
        this.context=context;
    }
    async gototab()
    {
        await this.page.goto('https://demo.automationtesting.in/Windows.html?utm_source=chatgpt.com');
    }
    async multabs()
    {
        const promise = this.context.waitForEvent('page');
        await this.page.locator('.btn.btn-info').nth(0).click();
        const newtab= await promise;
        await expect(newtab).toHaveURL('https://www.selenium.dev/');
        await this.page.waitForTimeout(3000);
        await newtab.close();
    }
    async mulwin()
    {
        //await this.page.locator('a[href="#Seperate"]').click();

        const promisewin = this.context.waitForEvent('page');
        await this.page.getByText('Open New Seperate Windows').click();
        await this.page.locator('.btn.btn-primary').click();
        const newwin= await promisewin;
        await expect(newwin).toHaveURL('https://www.selenium.dev/');
        await this.page.waitForTimeout(3000);
        await newwin.close();

    }
}