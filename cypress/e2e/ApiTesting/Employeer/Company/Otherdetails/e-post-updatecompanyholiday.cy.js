/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken, companyId} from '../../constants.js'; 

describe("Company holiday update Process", () => {
  it('should be able to update the company holiday', () => {
    cy.fixture('holiday_sample.xls').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/company/update-special-holiday/${companyId}`, 
        headers: {
          'Authorization' : empToken
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
