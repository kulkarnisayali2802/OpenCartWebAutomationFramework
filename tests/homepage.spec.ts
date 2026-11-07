import{test,expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async({page})=>{
    loginPage=new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('ava.anderson720@test.com','UmgQkbhcflo1');
    homePage=new HomePage(page);

})

test('homepage title test', async()=>{
let pageTitle=await homePage.getHomePageTitle();
console.log('HomePage Title is :', pageTitle);

expect(pageTitle).toBe('My Account')
})

test('logout link exist test', async()=>{
expect(await homePage.isLogoutLinkExist()).toBeTruthy();
})

test('homepage header exist test', async()=>{
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