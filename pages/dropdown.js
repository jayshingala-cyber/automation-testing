exports.dropdown=class dropdown
{
    constructor(page)
    {
        this.page=page;
    }
    async gotod()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/links.php?utm_source=chatgpt.com');
        await this.page.locator('.accordion-button.collapsed').nth(2).click();
        await this.page.getByRole('link',{name:"Select Menu"}).click();
        await this.page.waitForTimeout(3000);
    }
    async drop() 
    {
        await this.page.getByText('Please select...', { exact: true }).click();
        await this.page.locator("//div[normalize-space()='Books']").click();
        //await this.page.locator("//div[42]").click();
        await this.page.locator("//div[normalize-space()='Home, Garden & Tools']").click();
        await this.page.waitForTimeout(3000);
    }
}