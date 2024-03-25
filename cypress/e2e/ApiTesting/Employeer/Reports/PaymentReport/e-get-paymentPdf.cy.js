/// <reference types="Cypress" />

import { companyId, month, year } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("get payment pdf", () =>  {
  it('should be able to get payment pdf', () => { 
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;

    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/report/payment-report-pdf/${companyId}/${year}/${month}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }

    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.equal('application/pdf'); 
      expect(response.body.size).to.be.greaterThan(0);
      const pdfBlob = new Blob([response.body], { type: 'application/pdf' });
    });
    });
  });
  });