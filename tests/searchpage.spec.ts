import{expect,test} from '../src/fixtures/pagefixtures'





test.beforeEach(async({loginPage})=>{
   
    await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.my_USERNAME, process.env.my_PASSWORD);   

})


test('Verify search', async({homePage})=>{
    await homePage.doSearch('Macbook');
})