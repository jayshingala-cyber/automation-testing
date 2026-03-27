exports.draggable=class draggable
{
    constructor(page)
    {
        this.page=page;
    }
    async gotodr()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/dragabble.php');
        await this.page.waitForTimeout(2000);
    }
    async drag()
    {
        await this.page.locator("//button[@id='nav-home-tab']").click();
        const element = this.page.getByText('Drag me around', { exact: true });
        const box = await element.boundingBox();
        await this.page.mouse.move(box.x+5,box.y+5);
        await this.page.mouse.down();
        await this.page.mouse.move(box.x+300,box.y+200);
        await this.page.mouse.up();
        await this.page.waitForTimeout(2000);
    }
    async drag1()
    {
        await this.page.getByRole('tab', { name: 'Axis Restricted' }).click();
        const ele=this.page.getByText('Drag X Axis', { exact: true });
        const box = await ele.boundingBox();
        await this.page.waitForTimeout(2000);
        await this.page.mouse.move(box.x+5,box.y);
        await this.page.mouse.down();
        await this.page.mouse.move(box.x+200,box.y);
        await this.page.mouse.up();
        await this.page.waitForTimeout(2000);
        const element1=this.page.getByText('Drag Y Axis', { exact: true });
        const box1=await element1.boundingBox();
        await this.page.mouse.move(box1.x,box1.y+5);
        await this.page.mouse.down();
        await this.page.mouse.move(box1.x,box1.y+200);
        await this.page.mouse.up();
        await this.page.waitForTimeout(2000);
    }
}