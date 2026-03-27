exports.resizeable=class resizeable
{
    constructor(page)
    {
        this.page= page;
    }
    async gotor()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/resizable.php');
        await this.page.waitForTimeout(2000);
    }
    async resize()
    {
        const element= this.page.locator(".both.selector");
        const box = await element.boundingBox();
        await this.page.mouse.move(box.x+box.width-5,box.y+box.height-5);
        await this.page.mouse.down();
        await this.page.mouse.move(box.x+box.width+200,box.y+box.height+50);
        await this.page.mouse.up();
        await this.page.waitForTimeout(2000);
    }
}