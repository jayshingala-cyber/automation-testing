exports.select=class select
{
    constructor(page)
    {
        this.page=page;
    }
    async gotoselect()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/selectable.php');
        await this.page.waitForTimeout(2000);
    }
    async select()
    {
        await this.page.getByRole('tab', { name: 'List' }).click();
        const text1= this.page.getByText('It is a long established fact that a reader will be distracted', { exact: true });
        const box = await text1.boundingBox();
        await this.page.mouse.move(box.x,box.y);
        await this.page.mouse.down();
        await this.page.mouse.move(box.x+box.width,box.y);
        await this.page.mouse.up();
        await this.page.waitForTimeout(2000);
    }
}