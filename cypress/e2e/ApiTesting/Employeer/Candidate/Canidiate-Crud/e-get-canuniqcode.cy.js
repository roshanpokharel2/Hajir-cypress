/// <reference types="Cypress" />

import { companyId , empToken} from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("candidate unique code ", () => {
  it('candidate unique code', () => {
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/company/candidate-code/${companyId}`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body.data).to.equal("V2-00005");
  
    });
  });
});
