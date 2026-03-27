exports.file=class file
{
    constructor(page)
    {
        this.page=page;
    }
    async gotofile()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/links.php?utm_source=chatgpt.com');
        await this.page.locator('.accordion-button').nth(0).click();
        await this.page.getByRole('link',{name:"Upload and Download"}).click();
        await this.page.waitForTimeout(3000);
    }
    async inputfile()
    {
        await this.page.locator('#uploadFile').setInputFiles('C:/jay/hello.txt');
        await this.page.waitForTimeout(3000);

    }
    async download()
    {
        const promise= this.page.waitForEvent('download');
        await this.page.getByRole('link',{name:"Download",exact:true}).click();
        const newpromises = await promise;
        await this.page.waitForTimeout(3000);
        await newpromises.saveAs('C:/jay/inheritx.jpg');
    }
}