/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');


describe("Company holiday update Process", () => {
  it('should be able to update the company holiday', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.fixture('holiday_sample.xls').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/company/update-special-holiday/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        body: {

          "custom_holiday_file": fileContent  // Use the loaded file content here
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Holidays successfully updated");
      });
      });
    });
  });
});
