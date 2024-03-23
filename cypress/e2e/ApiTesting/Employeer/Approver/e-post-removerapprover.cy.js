/// <reference types = "Cypress"/>

import { candidateId, companyId } from "../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');

describe("to remove approver ", () => {
    it('should be able to remove approver ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/approver/delete/${companyId}/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Deleted.');
      });
        });
      });
    });

