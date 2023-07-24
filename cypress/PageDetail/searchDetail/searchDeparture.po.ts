///<reference types='cypress'/>
import { BaseComponent } from "../Base/baseComponent";
import { FlightLocation } from "../enums/enums";
import { IDepartureDetail } from "./searchDeparture.in";
export class DepartureDetail extends BaseComponent implements IDepartureDetail {
    private clearSearch = ".vvTc-item-close";
    private searchField1 = 'input[placeholder="From?"]';
    private searchField2 = 'input[placeholder="To?"]';
    private dropdownSearch = 'li[role="option"]';
    private checkBox = 'input[type="checkbox"]';

    clearSearchField() {
        this.clickOnElement(this.clearSearch);
    }
    selectAndTypeOnSearchField(searchDept: string, search: string) {
        if (searchDept === FlightLocation.FROM) {
            this.getElement(this.searchField1).type(search);
        }
        if (searchDept === FlightLocation.TO) {
            this.getElement(this.searchField2).type(search);
        }   
    }
    clickOnDropdownSearch() {
        cy.get(this.dropdownSearch).each(($ele, index, list) => {
          const text = $ele.text().trim();
      
          if (text.includes("Linz, Oberosterreich, Austria")) {
            cy.wrap($ele).find(this.checkBox).click();
          } else {
            cy.log(text);
          }
        });
      }
      
    
}