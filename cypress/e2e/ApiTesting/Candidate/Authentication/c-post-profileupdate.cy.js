/// <reference types="Cypress" />

const baseUrl = Cypress.env('baseUrl');
describe("profile update of candidate", () => {
  it('should update profile', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.fixture('photo.jpg', 'binary').then((fileContent) => {
        // Convert binary content to Blob
        const blob = Cypress.Blob.binaryStringToBlob(fileContent);
        const formData = new FormData();
        formData.append('uploadfile', blob, 'photo.jpg');
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
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'multipart/form-data', 
          },
          body: formData, 
        }).then(response => {
          expect(response.status).to.equal(200);
          expect(response.body.message).to.equal("Profile updated successfully");
          expect(response.body).to.have.property('data');
          expect(response.body.data.id).to.be.a('number');
          expect(response.body.data.name).to.be.a('string');
          expect(response.body.data.phone).to.be.a('number');
        });
      });
    });
  });
});
