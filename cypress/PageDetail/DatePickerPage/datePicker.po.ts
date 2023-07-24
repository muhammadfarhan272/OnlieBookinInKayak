import { BaseComponent } from "../Base/baseComponent";
import { IDatePicker } from "./IDatePicker.in";
import { incrementDateByDays } from "../utils/utility";

export default class DatePickerPage extends BaseComponent implements IDatePicker {
    private searchDate = '.sR_k-input';
    private backButton = '[aria-label="Previous month"]';
    private forwardButton = '[aria-label="Next Month"]';

    selectDatePicker(PassIndex:number) {
        cy.get(this.searchDate).eq(PassIndex).click();
    }
    getNavigateBack() {
        cy.get(this.backButton).click();
    }
    getNavigateForward() {
        cy.get(this.forwardButton).dblclick();
    }
    calculateDatePlusDays(dateDays: number) {
        const scheduledDeparture = `[aria-label=${incrementDateByDays(dateDays)}]`;
        return cy.get(scheduledDeparture).click();
    }
    

}