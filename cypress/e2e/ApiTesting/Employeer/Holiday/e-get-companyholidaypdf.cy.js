/// <reference types="Cypress" />

import { empToken,companyId} from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get companyholidaypdf ", () => {
  it('should be able to get companyholidaypdf ', () => {
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/company/get-holidays-pdf/${companyId}`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.headers['content-type']).to.equal('application/pdf'); 
        expect(response.body.size).to.be.greaterThan(0);
        const pdfBlob = new Blob([response.body], { type: 'application/pdf' });
  
    });
  });
});
