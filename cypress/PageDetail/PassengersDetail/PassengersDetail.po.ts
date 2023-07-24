import { BaseComponent } from "../Base/baseComponent";
import { IPassengersDetail } from "./IPassengersDetail.in";

export class PassengersDetail extends BaseComponent implements IPassengersDetail{
private selectPassengerButton = '.PLU8';
private IncrementField = '[aria-label="Increment"]';
private searchButton = '.zEiP-submit';
// private selectDropdown = '.UKFa-mod-variant-default'
private homePage = '.title-section';


    selectPassenger(){
        cy.get(this.selectPassengerButton).eq(0).click();
    }
    getAdults(){
        cy.get(this.IncrementField).eq(0).click({multiple:true});
    }
    getChildren(){
        cy.get(this.IncrementField).eq(4).click({ multiple: true });
    } 
    clickOnSearch(){
        cy.get(this.searchButton).click()   ;
    }
    selectPassengers(){
        this.selectPassenger();
        this.getAdults();
        this.getChildren();
        cy.get(this.homePage).click();
        this.clickOnSearch();
        
    }
    
}

