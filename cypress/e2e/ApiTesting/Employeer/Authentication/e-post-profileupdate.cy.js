const baseUrl = Cypress.config('baseUrl');

describe("profile update of employer", () => {
  it('should update profile', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
      cy.fixture('hey.jpg', 'binary').then((fileContent) => {
        // Convert the binary file content to a Blob
        const blob = Cypress.Blob.binaryStringToBlob(fileContent);

        // Create FormData and append the Blob
        const formData = new FormData();
        formData.append('uploadfile', blob, 'hey.jpg');
        formData.append('title', 'Miss');
        formData.append('name', 'romana');
        formData.append('email', 'pujaa@gmail.com');
        formData.append('marital_status', 'Married');
        formData.append('dob', '1997-02-06');

        cy.request({
          method: 'POST',
          url: `${baseUrl}/employer/profile-update`,
          headers: {
            'Authorization': `Bearer ${employerToken}`,
            'Content-Type': 'multipart/form-data', 
          },
          body: formData,
          encoding: 'binary' // Set encoding to binary to receive ArrayBuffer
        }).then(response => { 
          const decoder = new TextDecoder('utf-8');
          const responseBody = decoder.decode(response.body);
          console.log('Response body:', responseBody);
          expect(response.status).to.be.equal(200); 
          expect(responseBody).to.include('success'); // Assuming the success message is present in the response body
        });
      });
    });
  });
});
