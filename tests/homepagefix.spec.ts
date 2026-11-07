import{expect,test} from '../src/fixtures/pagefixtures'





test.beforeEach(async({loginPage})=>{
   
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('ava.anderson720@test.com','UmgQkbhcflo1');
   

})

test('homepage title test', async({homePage})=>{
let pageTitle=await homePage.getHomePageTitle();
console.log('HomePage Title is :', pageTitle);

expect(pageTitle).toBe('My Account')
})

test('logout link exist test', async({homePage})=>{
expect(await homePage.isLogoutLinkExist()).toBeTruthy();
})

test('homepage header exist test', async({homePage})=>{
let allheaders=await homePage.getHomePageHeaders();
console.log('Headers are:',allheaders );
expect.soft(allheaders).toHaveLength(4);
expect(allheaders).toBe([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'
])
})