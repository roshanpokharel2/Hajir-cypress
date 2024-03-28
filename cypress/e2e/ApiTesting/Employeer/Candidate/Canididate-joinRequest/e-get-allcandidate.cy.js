/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');

describe("get all candidate ", () => {
  it('should be able to get all candidate', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/2/invitation/all-candidates`,
      headers: {
        'Authorization': `Bearer ${employerToken}`, 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched");
        expect(response.body.data).to.have.property("candidates");
        // Asserting individual candidate properties
        response.body.data.candidates.forEach(candidate => {
          expect(candidate).to.have.property("id").that.satisfy(value => typeof value === "number" || value === null);
        
          expect(candidate).to.have.property("company_id").that.satisfy(value => typeof value === "number" || value === null);
        
          expect(candidate).to.have.property("candidate_id").that.satisfy(value => typeof value === "number" || value === null);
        
          expect(candidate).to.have.property("name").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("name_holder").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("marriage_status").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("phone");
        
          expect(candidate).to.have.property("email").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("code").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("designation").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("dob").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("profile_image").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("status").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("office_hour_start").that.satisfy(value => typeof value === "string" || value === null);
        
          expect(candidate).to.have.property("office_hour_end").that.satisfy(value => typeof value === "string" || value === null);
        
        })
    });
  });
});
});
