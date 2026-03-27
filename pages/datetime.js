exports.datetime=class datetime
{
    constructor(page)
    {
        this.page=page;
    }
    async gotodate()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/date-picker.php');
        await this.page.waitForTimeout(3000);
    }
    async cal()
    {
        await this.page.locator("//input[@id='datetimepicker1']").click();
        await this.page.getByLabel('Month', { exact: true }).first().selectOption('January');
        const year= this.page.getByLabel('Year', { exact: true }).first();
        await year.fill("2021");
        await this.page.locator('span').filter({ hasText: '11' }).first().click();
        await this.page.getByLabel('Hour', { exact: true }).first().fill("10");
        await this.page.getByLabel('Minute', { exact: true }).first().fill("50");
        await this.page.waitForTimeout(3000);
        await this.page.locator(".col-md-8.col-lg-8.col-xl-8").click();
        await this.page.waitForTimeout(1000);
    }
}