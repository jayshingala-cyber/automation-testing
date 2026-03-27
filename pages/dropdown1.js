exports.dropdown1=class dropdown1
{
    constructor(page)
    {
        this.page=page;
    }

    async gotod()
    {
        await this.page.goto("https://demoqa.com/select-menu");
        await this.page.waitForTimeout(3000);
    }
    async drop()
    {
        await this.page.locator('div.css-hlgwow').locator('div').last().click();
        //await this.page.locator("//input[@id='react-select-4-input']").fill('Green');
        await this.page.getByText('Green', { exact: true }).last().click();
        await this.page.waitForTimeout(3000);
    }
}

