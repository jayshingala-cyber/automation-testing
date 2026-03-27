exports.iframe=class iframe
{
    constructor(page)
    {
        this.page=page;
    }
    async gotoiframe()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/links.php?utm_source=chatgpt.com');
        await this.page.locator('.accordion-button.collapsed').nth(1).click();
        await this.page.getByRole('link',{name:"Frames",exact:true}).click();
        await this.page.waitForTimeout(3000);
    }
    async iframes()
    {
        await this.page.frameLocator('iframe[src="new-tab-sample.php"]').nth(0).getByRole('link',{name:"Selenium Tutorial"}).click();
        await this.page.waitForTimeout(3000);
    }
}