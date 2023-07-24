import { BasePage } from "../Base/basePage";
import DatePickerPage from "../DatePickerPage/datePicker.po";
import { PassengersDetail } from "../PassengersDetail/PassengersDetail.po";

import { DepartureDetail } from "./searchDeparture.po";

export class Home extends BasePage{
    private homePage = '.SearchPage__FrontDoor';
    waitForReadiness() {
        this.getElement(this.homePage).should("be.visible");
    }
    getDepartureAndArrival(){
        return new DepartureDetail(this.homePage);
    }
    getDatePicker(){
        return new DatePickerPage(this.homePage);
    }
    getPassengerDetail(){
        return new PassengersDetail(this.homePage);
    }

    
}