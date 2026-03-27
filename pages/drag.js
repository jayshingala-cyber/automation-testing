exports.drag=class drag
{
    constructor(page)
    {
        this.page=page;
    }
    async gotos()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/sortable.php');
        await this.page.waitForTimeout(2000);
    }
    async sort()
    {
        const sorted= this.page.locator("tbody tr:nth-child(1) td:nth-child(1) span:nth-child(1) svg");
        const target= this.page.locator("tbody tr:nth-child(2) td:nth-child(1) span:nth-child(1) svg");
        await sorted.dragTo(target);
        await this.page.waitForTimeout(2000);
   
    }
}