import{test,expect} from '../src/fixtures/pagefixtures'


test.beforeEach(async({loginPage})=>{
    await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.my_USERNAME as string,process.env.my_PASSWORD as string);
})

test('verify search', async({homePage, searchResultsPage})=>{
    await homePage.doSearch('MacBook');
    let count=await searchResultsPage.getSearchResultsCount();
    console.log('Search results count is : ', count);
    expect(count).toBeGreaterThan(0);
});

test('verify user is able to land on product page',async({homePage, searchResultsPage, page})=>{
    await homePage.doSearch('MacBook');
    await searchResultsPage.selectProduct('MacBook Pro');
    expect(await page.title()).toBe('MacBook Pro');
    

})