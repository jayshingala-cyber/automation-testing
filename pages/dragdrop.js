exports.dragdrop=class dragdrop
{
    constructor(page)
    {
        this.page=page;
    }
    async gotodrag()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/droppable.php');
        await this.page.waitForTimeout(2000);
    }
    async drag()
    {
        await this.page.getByRole('tab', { name: 'Simple' }).click();
        const text1= this.page.getByText('Drag me to my target', { exact: true });
        const text2= this.page.locator('#droppable')
        await text1.dragTo(text2);
        await this.page.waitForTimeout(2000);
    }
    
}