import{test,expect} from '../src/fixtures/pagefixtures'


test.beforeEach(async({loginPage})=>{
    await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.my_USERNAME as string,process.env.my_PASSWORD as string);
})

test('verify product header', async({homePage, searchResultsPage, productInfoPage, page})=>{
    await homePage.doSearch('MacBook');
    await searchResultsPage.selectProduct('MacBook Pro');
    
    expect(await productInfoPage.getproductHeader()).toBe('MacBook Pro');
    await page.pause();
});

test('verify product info',async({homePage, searchResultsPage, productInfoPage, page})=>{
    await homePage.doSearch('MacBook');
    await searchResultsPage.selectProduct('MacBook Pro');
    await productInfoPage.getProductInfo();
    await page.pause();
    

})