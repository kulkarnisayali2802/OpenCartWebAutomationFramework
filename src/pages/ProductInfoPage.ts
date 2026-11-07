import{Locator, Page} from '@playwright/test'
import{BasePage} from './Basepage'

export class ProductInfoPage extends BasePage{

    private readonly header: Locator;
    private readonly productImages: Locator;
    private readonly productMetaData: Locator;
    private readonly productPricing: Locator;
    private productInfoMap: Map<string, string | number>;

    constructor(page: Page){
        super(page);
        this.header=page.getByRole('heading', { level :1 });
        this.productImages=page.locator('div#content li img');
        this.productMetaData=page.locator('div#content ul.list-unstyled:nth-of-type(1) li');
        this.productPricing=page.locator('div#content ul.list-unstyled:nth-of-type(1) li');
        this.productInfoMap=new Map<string, string | number>();
    }

    async getproductHeader(): Promise<string>{
        return await this.header.innerText();
    }

    async getProductImagesCount(): Promise<number>{
        await this.productImages.first().waitFor({state: 'visible'});
        return await this.productImages.count();
    }

    async getProductInfo(): Promise<Map<string, string | number>>{
        this.productInfoMap.set('productheader', await this.getproductHeader());
        this.productInfoMap.set('productImagesCount', await this.getProductImagesCount());
        await this.getProductMetaData();
        await this.getProductPricingData();
        return this.productInfoMap;
    }

    private async getProductMetaData(): Promise<void>{
        let metaData=await this.productMetaData.allTextContents();

        for(let data of metaData){
            let metaDataArr=data.split(':');
            let key=metaDataArr[0].trim();
            let value=metaDataArr[1].trim();
            console.log(`Key: ${key} and Value: ${value}`);
            this.productInfoMap.set(key, value);

        }
    }


       private async getProductPricingData(): Promise<void>{
            let priceData=await this.productPricing.allInnerTexts();
            let productPrice=priceData[0].trim();
            let exTaxPrice=priceData[1].trim();
            let exTaxPriceArr=exTaxPrice.split(':')[1].trim();
            this.productInfoMap.set('productPrice', productPrice);
            this.productInfoMap.set('exTaxPrice', exTaxPriceArr);
            console.log(`Product Price: ${productPrice} and Ex Tax Price: ${exTaxPriceArr}`);
        }
           
       
            }
        