const baseUrl = Cypress.env('baseUrl');
describe("profile update of employer", () => {
  it('should update profile', () => {
   
    cy.fixture('employerToken').then((tokenData) => {
      const employerToken = tokenData.token;
      cy.fixture('photo.jpg', 'binary').then((fileContent) => {
       
        const blob = new Blob([fileContent], { type: 'image/jpeg' });

        const formData = new FormData();
        
        formData.append('uploadfile', blob, 'photo.jpg');
        
        formData.append('title', 'Miss');
        formData.append('name', 'roman');
        formData.append('email', 'puja@gmail.com');
        formData.append('marital_status', 'Married');
        formData.append('dob', '1997-02-06');
        
        cy.request({
          method: 'POST',
          url: 'https://veloxlabs.net/api/v2/employer/profile-update',
          headers: {
            'Authorization': `Bearer ${employerToken}`,
            'Content-Type': 'multipart/form-data', 
          },
          body: formData, 
        }).then(response => {
          expect(response.status).to.equal(200);
          expect(response.body.message).to.equal("Profile updated successfully");
          expect(response.body).to.have.property('data');
          expect(response.body.data.phone).to.be.a('string');
          expect(response.body.data.name).to.be.a("string");
        });
      });
    });
  });
});
