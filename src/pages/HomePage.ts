import strict from "assert/strict";
import { BasePage } from "./Basepage";
import{Page, Locator} from '@playwright/test'


export class HomePage extends BasePage{

private readonly logoutlink: Locator;
private readonly headers: Locator;
private readonly searchBox: Locator;
private readonly searchIcon: Locator;

constructor(page:Page){
    super(page);
    this.logoutlink=page.getByRole('link', { name: 'Logout' });
    this.headers=page.getByRole('heading', {level:2})
    this.searchBox=page.getByRole('textbox', { name: 'Search' });
    this.searchIcon=page.locator('#search button')

}

async getHomePageTitle(): Promise<String>{
    return await this.page.title()
}

async isLogoutLinkExist(): Promise<boolean>{
    return await this.logoutlink.isVisible();
}

async getHomePageHeaders(): Promise<String[]>{
    return await this.headers.allInnerTexts();
}


async doSearch(searchKey: string){
    console.log('search key is:' ,searchKey);
    await this.searchBox.fill(searchKey);
    await this.searchIcon.click();
}
}