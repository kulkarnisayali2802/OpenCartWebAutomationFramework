import{test, expect} from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage'
import { HomePage } from '../src/pages/HomePage';

let loginPage: LoginPage;
let homePage: HomePage;


test.beforeEach(async({page})=>{
loginPage =new LoginPage(page);
await loginPage.gotoLoginPage();
homePage=new HomePage(page);

})
test('login page title test', async({})=>{


let pageTitle= await loginPage.getLoginPageTitle();
console.log('Login Page Title is:', pageTitle);
expect(pageTitle).toBe('Account Login');
} )

test('forgot password exist test', async({})=>{


await loginPage.getLoginPageTitle();
expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy;

} )

test('Login test', async({})=>{


await loginPage.doLogin('ava.anderson720@test.com','UmgQkbhcflo1')
expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
expect( await homePage.getHomePageTitle()).toBe('My Account')


} )