const baseUrl = Cypress.config('baseUrl');

describe("profile update of employer", () => {
  it('should update profile', () => {
    cy.fixture('employerToken').then((tokenData) => {
      const employerToken = tokenData.token;
      cy.fixture('photo.jpg', 'binary').then((fileContent) => {
        const blob = new Blob([fileContent], { type: 'image/jpeg' });
        const formData = new FormData();

        formData.append('uploadfile', blob, 'photo.jpg');
        formData.append('title', 'Miss');
        formData.append('name', 'romana');
        formData.append('email', 'pujaa@gmail.com');
        formData.append('marital_status', 'Married');
        formData.append('dob', '1997-02-06');

        cy.request({
          method: 'POST',
          url: `${baseUrl}/employer/profile-update`,
          headers: {
            'Authorization': `Bearer ${employerToken}`
          },
          body: formData
        }).then(response => {
          expect(response.status).to.be.oneOf([200, 201]); // Adjust status code as per your API response
          expect(response.body.message).to.equal("Profile updated successfully");
          expect(response.body).to.have.property('data');
          expect(response.body.data.phone).to.be.a('string');
          expect(response.body.data.name).to.be.a("string");
        })
      });
    });
  });
});
