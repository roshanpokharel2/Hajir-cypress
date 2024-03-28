/// <reference types="Cypress" />

import 'cypress-file-upload';
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const companyname = generateRandomString(10);
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
          "name": companyname,
          "code": 1,
          "date_type": "English",
          "holiday_type": "Government",
          // "custom_holiday_file":   // Use the loaded file content here
        }
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body).to.have.property("message");
      });
      });
    });
  });
// });
