/// <reference types="Cypress" />
import { empToken } from './Constants file/constants.js';

describe("profile update of employer", () => {
  it('should update profile', () => {
    cy.request({
      method: 'POST',
      url: 'https://veloxlabs.net/api/v2/employer/profile-update',
      headers: {
        'Authorization': empToken 
      },
      body: {
        'title': "Miss",
        'name': "Pooja Upreti",
        'email': "puja@gmail.com",
        'marital_status': "Married",
        'dob': "1997-02-06",
        'uploadfile': "photo.jpg"
      }        
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Successfully Updated");
      expect(response.body).to.have.property('data');
      expect(response.body.data.id).to.equal(2);
      expect(response.body.data.name).to.equal("Pooja Upreti");
      expect(response.body.data.phone).to.equal('9824010720');
    });
  });
});
