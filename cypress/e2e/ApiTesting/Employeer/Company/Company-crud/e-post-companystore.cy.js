/// <reference types="Cypress" />


const baseUrl = Cypress.config('baseUrl');


describe("Company store Process", () => {
  it('should be able to store/register the company', () => {
   
 cy.fixture('employerToken').then((tokenDataa) => {
  const employerToken = tokenDataa.token;
    // cy.fixture('Default_gov_holiday_2081.xls').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/company/store`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        body: {
          "name": "haji2553",
          "code": 1,
          "date_type": "English",
          "holiday_type": "Government",
          // "custom_holiday_file":   // Use the loaded file content here
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Company created successfully");
      });
      });
    });
  });
// });
