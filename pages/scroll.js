exports.scroll=class scroll
{
    constructor(page)
    {
        this.page=page;
    }
    async gotos()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/scroll-top.php');
        await this.page.waitForTimeout(2000);
    }
    async scroll()
    {
        await this.page.locator('div.row.d-flex.justify-content-left.logindiv.bg-white.rounded').click();
        await this.page.mouse.wheel(0,1000);
        await this.page.waitForTimeout(2000);
        const element1= this.page.getByRole('heading', { name: 'Scroll Top' });
        await element1.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
    }
    async scroll1()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/horizontal-scroll.php');
        await this.page.waitForTimeout(2000);
        await this.page.mouse.wheel(0,200);
        await this.page.waitForTimeout(1000);
        await this.page.mouse.wheel(300,0);
        await this.page.waitForTimeout(2000);
    }
}