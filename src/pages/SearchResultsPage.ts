import{Locator,Page} from '@playwright/test'    
import{BasePage} from './Basepage'

export class SearchResultsPage extends BasePage{
    private readonly searchResults: Locator;


    constructor(page: Page){
        super(page);
        this.searchResults=page.locator('div.product-layout ');
    };

    async getSearchResultsCount(): Promise<number>{
        return await this.searchResults.count();
    }   

    async selectProduct(productname:string): Promise<void>{
        console.log('Product name is : ' , productname);
        await this.page.getByRole('link',{name: productname, exact: true}).first().click();
    }
}