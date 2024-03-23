/// <reference types="Cypress" />


const baseUrl = Cypress.env('baseUrl');


describe("Company store Process", () => {
  it('should be able to store/register the company', () => {
   
 cy.fixture('employerToken').then((tokenDataa) => {
  const employerToken = tokenDataa.token;
    cy.fixture('Default_gov_holiday_2081.xls').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/company/store`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        body: {
          "name": "hajir",
          "code": 1,
          "date-type": "english",
          "holiday_type": "custom",
          "custom_holiday_file": fileContent  // Use the loaded file content here
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Company created successfully");
      });
      });
    });
  });
});
