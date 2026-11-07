import{expect,test} from '../src/fixtures/pagefixtures'
import{CsvHelper} from '../src/utils/CsvHelper'
import { ExcelHelper } from '../src/utils/ExcelHelper'
import{JsonHelper} from '../src/utils/JsonHelper';


test.beforeEach(async({loginPage})=>{
    await loginPage.gotoLoginPage()

})

test('login page title test', async({loginPage})=>{


let pageTitle= await loginPage.getLoginPageTitle();
console.log('Login Page Title is:', pageTitle);
expect(pageTitle).toBe('Account Login');
} )

test('forgot password exist test', async({loginPage})=>{


await loginPage.getLoginPageTitle();
expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy;

} )

test('Login test', async({loginPage,homePage})=>{


await loginPage.doLogin(process.env.my_USERNAME, process.env.my_PASSWORD)
expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
expect( await homePage.getHomePageTitle()).toBe('My Account')


} )
let testData = CsvHelper.readCSV('src/testdata/logindata.csv');
for(let row of testData){

test(`login with invalid credentials - ${row.new_username} - ${row.new_password}`, async({loginPage})=>{

    await loginPage.doLogin(row.new_username,row.new_password);
    expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

    
});

};

//dd2: read xlsx data directly from the excel file and loop

let testExcelData = ExcelHelper.readExcel('src/testdata/logindata.xlsx', 'Login');
for(let row of testExcelData){
    test(`login with invalid credentials with excel data - ${row.new_username} - ${row.new_password}`, async({loginPage})=>{

    await loginPage.doLogin(row.new_username,row.new_password);
    expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

    
});

}

let testJsonData=JsonHelper.readjson('src/testdata/LoginData.json');
for(let row of testJsonData){

}