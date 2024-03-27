/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');
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
          url: `${baseUrl}/candidate/profile-update`,
          headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'multipart/form-data', 
          },
          body: formData, 
        }).then(response => {
          expect(response.status).to.equal(200); 
          const responseBody = {
            status: "success",
            message: "Profile updated successfully"
          };
          const status = 200;
          response.status = status;
          response.body = responseBody;
          response.statusText = 'OK';
        });
      });
    });
  });
});
