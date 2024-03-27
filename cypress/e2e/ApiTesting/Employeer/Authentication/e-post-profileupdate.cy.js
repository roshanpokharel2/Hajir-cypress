const baseUrl = Cypress.config('baseUrl');

describe("profile update of employer", () => {
  it('should update profile', () => {
    cy.fixture('employerToken').then((tokenData) => {
      const employerToken = tokenData.token;

      cy.fixture('pooja.jpg', 'binary').then((fileContent) => {
        // Convert the binary file content to a Blob
        const blob = Cypress.Blob.binaryStringToBlob(fileContent);

        // Create FormData and append the Blob
        const formData = new FormData();
        formData.append('uploadfile', blob, 'pooja.jpg');

        // Append other form data fields
        formData.append('title', 'Miss');
        formData.append('name', 'romana');
        formData.append('email', 'pujaa@gmail.com');
        formData.append('marital_status', 'Married');
        formData.append('dob', '1997-02-06');

        // Send POST request with FormData
        cy.request({
          method: 'POST',
          url: `${baseUrl}/employer/profile-update`,
          headers: {
            'Authorization': `Bearer ${employerToken}`,
            'Content-Type': undefined // Let Cypress handle content type
          },
          body: formData
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
