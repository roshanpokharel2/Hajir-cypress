/// <reference types="Cypress" />
import { empToken } from './../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("Candidate store", () =>  {
  it('should be able to store candiate', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/employee-of-the-month',
      headers: {
        'Authorization': empToken 
               },
      body: {
            "year":"2024"
      
      }
    }).then(response => {
      expect(response.status).to.equal(200); 
     
    });
  });
});
