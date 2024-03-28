/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');
describe("profile update of candidate", () => {
  it('should update profile', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.fixture('hey.jpg', 'binary').then((fileContent) => {
        // Convert the binary file content to a Blob
        const blob = Cypress.Blob.binaryStringToBlob(fileContent);

        // Create FormData and append the Blob
        const formData = new FormData();
        formData.append('uploadfile', blob, 'hey.jpg');
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
          encoding: 'binary'
        }).then(response => {
          const decoder = new TextDecoder('utf-8');
          const responseBody = decoder.decode(response.body);
          console.log('Response body:', responseBody);
          expect(response.status).to.be.equal(200); 
          expect(responseBody).to.include('success');
          expect(responseBody).to.include("Profile updated successfully");
          
        });
      });
    });
  });
});
