/// <reference types="Cypress" />
import { empToken } from './Constants file/constants.js';

describe("GET profile with Authorization", () => {
  it('should show profile request with authorization header', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/get-profile',
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
     
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Successfully Fetched");
      expect(response.body).to.have.property('data');
      expect(response.body.data.id).to.equal('2');
      expect(response.body.data.name).to.equal("Pooja Uprety");
      expect(response.body.data.phone).to.equal('9824010720');
   
    });
  });
});
