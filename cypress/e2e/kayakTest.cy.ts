import { AirportName, CalculatedDays, FlightLocation, selectTripDates } from "../PageDetail/enums/enums";
import { Home } from "../PageDetail/searchDetail/HomeDashboard";

let departureDetail : Home;
describe('Travel booking with kayak', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });
  departureDetail = new Home();
  const FlightDetail = departureDetail.getDepartureAndArrival();
  const dateDetail = departureDetail.getDatePicker();
  const passengersDetail = departureDetail.getPassengerDetail();
  it('should navigate to forms dashboard page', () => {
    
    FlightDetail.clearSearchField();
    FlightDetail.selectAndTypeOnSearchField(FlightLocation.FROM,AirportName.DEPARTURE)
    FlightDetail.clickOnDropdownSearch();
    FlightDetail.selectAndTypeOnSearchField(FlightLocation.TO,AirportName.DESTINATION)
    FlightDetail.clickOnDropdownSearch();

    dateDetail.selectDatePicker(selectTripDates.From);
    dateDetail.calculateDatePlusDays(CalculatedDays.DepartureDays);
    dateDetail.selectDatePicker(selectTripDates.To);
    dateDetail.getNavigateForward();
    dateDetail.calculateDatePlusDays(CalculatedDays.ArrivalDays);
    
    passengersDetail.selectPassengers();
    cy.visit(Cypress.env('FlightUrl'));
    

  });
});
