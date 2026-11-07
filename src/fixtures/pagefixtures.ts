import {test as basetest} from '@playwright/test'
import { BasePage } from '../pages/Basepage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import{SearchResultsPage} from '../pages/SearchResultsPage'
import { ProductInfoPage } from '../pages/ProductInfoPage'

type pageFixtures={
    basePage:BasePage;
    homePage:HomePage;
    loginPage:LoginPage;
    searchResultsPage:SearchResultsPage;
    productInfoPage: ProductInfoPage;

}

export let test=basetest.extend<pageFixtures>({
    basePage: async({page}, use)=>{
      let basePage=new BasePage(page);
      await use(basePage)
    },

      loginPage: async({page}, use)=>{
      let loginPage=new LoginPage(page);
      await use(loginPage)
    },

      homePage: async({page}, use)=>{
      let homePage=new HomePage(page);
      await use(homePage)
    },

     searchResultsPage: async({page}, use)=>{
      let searchResultsPage=new SearchResultsPage(page);
      await use(searchResultsPage)
    },

     productInfoPage: async({page}, use)=>{
      let productInfoPage=new ProductInfoPage(page);
      await use(productInfoPage)
    },
}
)

export{expect} from '@playwright/test'