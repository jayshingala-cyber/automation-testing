exports.slider=class slider
{
    constructor(page)
    {
        this.page=page;
    }
    async gotos()
    {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/slider.php');
        await this.page.waitForTimeout(3000);
    }
    async slid()
    {
      const slider = this.page.locator('#ageInputId');
      const box= await slider.boundingBox();
      await slider.click();
      await this.page.mouse.down();
      await this.page.mouse.move(box.x+185,box.y);
      await this.page.mouse.up();
      await this.page.waitForTimeout(3000);
    }
}