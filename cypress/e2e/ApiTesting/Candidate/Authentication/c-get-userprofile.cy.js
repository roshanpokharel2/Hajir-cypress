/// <reference types="Cypress" />
import { canToken } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');
describe("GET profile with Authorization", () => {
  it('should show profile request with authorization header', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/candidate/get-profile',
      headers: {
        'Authorization': canToken 
               }
               
    }).then(response => {
     
      expect(response.status).to.equal(200);

      const candidateData = response.body.data;

      expect(candidateData.id).to.equal(165);
      expect(candidateData.name).to.equal('Dinesh Phuyel');
      expect(candidateData.name_holder).to.equal('Mr');
      expect(candidateData.phone).to.equal('9847161718');
      expect(candidateData.email).to.equal('xgh@gh.com');
      expect(candidateData.address).to.be.null; // Assuming address can be null
      expect(candidateData.dob).to.equal('2005-03-11');
      expect(candidateData.profile_image).to.equal('https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png');
      expect(candidateData.type).to.equal('candidate');
   
    });
  });
});
