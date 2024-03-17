/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken, companyId} from '../../constants.js'; 

describe("Company update Process", () => {
  it('should be able to update/edit the company', () => {
    console.log(companyId)
    cy.fixture('Default_gov_holiday_2081.xls').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/company/update/${companyId}`, 
        headers: {
          'Authorization' : empToken
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
        expect(response.body.message).to.equal("Company updated successfully");
        
      });
    });
  });
});
