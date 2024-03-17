/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get govholidaypdf ", () => {
    it('should be able to get govholidaypdf ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/company/get-government-holiday-PDF`,
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
