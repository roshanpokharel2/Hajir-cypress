/// <reference types="Cypress" />
import { canToken } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');
describe("profile update of candidate", () => {
  it('should update profile', () => {
  
    cy.fixture('photo.jpg', 'binary').then((fileContent) => {

      const formData = new FormData();
    
      formData.append('uploadfile', fileContent, 'photo.jpg');
   
      formData.append('title', 'Miss');
      formData.append('name', 'Pooja Upreti');
      formData.append('email', 'puja@gmail.com');
      formData.append('marital_status', 'Married');
      formData.append('dob', '1997-02-06');
      
      // Send the request with FormData
      cy.request({
        method: 'POST',
        url: 'https://veloxlabs.net/api/v2/candidate/profile-update',
        headers: {
          'Authorization': canToken,
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
        body: formData, // Send FormData
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
});
