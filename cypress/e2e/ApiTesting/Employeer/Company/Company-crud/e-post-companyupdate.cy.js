/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');


describe("Company update Process", () => {
  it('should be able to update/edit the company', () => {
    // cy.fixture('Default_gov_holiday_2081.xls').then((fileContent) => {
      cy.fixture('employerToken').then((tokenData) => {
          const employerToken = tokenData.token;
          cy.request({
              method: 'POST',
              url: `${baseUrl}/employer/company/update/${companyId}`, 
              headers: {
                  'Authorization': `Bearer ${employerToken}`
              },
              body: {
                  "name": "hajir098",
                  "code": 1,
                  "date_type": "english",
                  "holiday_type": "Government",
                  // "custom_holiday_file": fileContent  
              }
          }).then(response => {
              expect(response.status).to.equal(200);
              expect(response.body.status).to.equal("success");
              expect(response.body.message).to.equal("Company updated successfully");
          });
      });
  });
  
  });
// });
