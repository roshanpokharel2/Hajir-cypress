/// <reference types="Cypress" />

import { candidateId , empToken } from '../../Constantsfile/constants';


const baseUrl = Cypress.env('baseUrl');

describe("get candidate code generated ", () => {
  it('should be able to get candidate code generated', () => {
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/company/candidate-code/${candidateId}`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('success');
        expect(response.body.message).to.eq('Successfully Fetched.');
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.eq('string');
  
    });
  });
});
