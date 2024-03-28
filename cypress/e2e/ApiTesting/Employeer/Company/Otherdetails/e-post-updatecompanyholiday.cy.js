/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("Company holiday update Process", () => {
  it('should be able to update the company holiday', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.fixture('Default_gov_holiday_2081.xls', 'binary').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/company/update-special-holiday/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`,
          'Content-Type': 'application/octet-stream'
        },
        body: fileContent, // Use the loaded file content here
          encoding: 'binary'

      }).then(response => {
        expect(response.status).to.equal(200);
          expect(response.body.status).to.equal("success");
          expect(response.body.message).to.equal("Holidays successfully updated");
      });
      });
    });
  });
});
