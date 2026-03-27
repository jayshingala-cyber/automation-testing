exports.registration = class registration
{
    constructor(page)
    {
        this.page = page;
        this.full_name='#username';
        this.f_email='#email';
        this.gender = page.locator('select[name="sgender"]');
       
    }
    async gotoreg()
    {
        await this.page.goto('https://qavbox.github.io/demo/signup/');
    }
    async reg(name,email,gen)
    {
        await this.page.locator(this.full_name).fill(name);
        await this.page.locator(this.f_email).fill(email);
        await this.gender.selectOption(gen);
    }
}