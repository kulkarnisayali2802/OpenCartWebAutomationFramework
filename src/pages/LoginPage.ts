import { Locator, Page } from "@playwright/test";
import { BasePage } from "./Basepage";


export class LoginPage extends BasePage{

    private readonly username: Locator;
    private readonly password: Locator;
    private readonly login: Locator;
    private readonly forgottenPwdLink: Locator;
    private readonly loginErrorMessage: Locator;
    constructor(page:Page){
        super(page);
        this.username=page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password=page.getByRole('textbox', { name: 'Password' });
        this.login=page.getByRole('button',{name : 'Login'})
        this.forgottenPwdLink=page.getByRole('link',{name: 'Forgotten Password'}).first();
        this.loginErrorMessage=page.locator('.alert .alert-danger .alert-dismissible')
        
    }


    async gotoLoginPage(): Promise<void>{
        await this.page.goto('opencart/index.php?route=account/login')
    
    }

    async getLoginPageTitle(): Promise<string>{
        return await this.page.title();

    }

    async isForgottenPwdLinkExist(): Promise<boolean>{

        return await this.forgottenPwdLink.isVisible();

    }

    async doLogin(username: string, password: string){
        console.log(`user creds are: ${username} - ${password}` );
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
    }

    async isInvalidLoginErrorDisplayed(): Promise<boolean>{

        return await this.loginErrorMessage.isVisible();

    }

    
}