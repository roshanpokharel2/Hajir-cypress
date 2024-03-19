/// <reference types = "Cypress"/>
import { canToken, breakId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to update break  ", () => {
    it('should be able to update break ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/attendance-break-update/${breakId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
  
      const responseData = response.body;

      expect(responseData.status).to.equal('success');
      expect(responseData.message).to.equal('Successfully Updated.');
        });
      });
    });

