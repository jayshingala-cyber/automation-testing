exports.cart = class cart
{
    constructor(page)
    {
        this.page=page;
        this.username=page.locator('#user-name');
        this.password=page.locator('#password');
        this.submit=page.locator('#login-button');
        this.addproduct=page.locator('#add-to-cart-sauce-labs-backpack');
        this.list=page.locator('[data-test="shopping-cart-link"]');
        this.items=page.locator('[data-test="inventory-item"]');
    }
    async gotoecom()
    {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async webcart(user,pass)
    {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.submit.click();
        await this.addproduct.click();
        await this.list.click();
        const item= await this.items.all();
        
        for(const product of item)
        {
            const text = await product.textContent();
            if(text.includes('Sauce Labs Backpack'))
            {
                return true;
            }
        }
    }
}