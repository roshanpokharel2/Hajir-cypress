/// <reference types="Cypress" />

import { companyId, empToken} from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("delete comany candidate ", () => {
  it('should be able to delete comany candidate ', () => {
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/candidate/destroy/${companyId}/75`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.status).to.equal("success");
        expect(response.message).to.equal("string");
  
    });
  });
});
