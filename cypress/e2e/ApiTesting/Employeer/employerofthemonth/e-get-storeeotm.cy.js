/// <reference types="Cypress" />
import { empToken } from './../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe(" Store employee of the month", () =>  {
  it('should be able to store employee of the month', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/employee-of-the-month',
      headers: {
        'Authorization': empToken 
               },
      body: {
        "company_id":2,
        "candidate_id":13,
        "date": "2024-3-17",
        "year":"2024"
      
      }
    }).then(response => {
      expect(response.status).to.equal(200); 
     
    });
  });
});
