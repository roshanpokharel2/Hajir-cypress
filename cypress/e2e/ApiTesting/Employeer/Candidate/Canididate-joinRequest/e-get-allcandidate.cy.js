/// <reference types="Cypress" />

const baseUrl = Cypress.env('baseUrl');

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
        expect(response.status).to.equal("success");
        expect(response.message).to.equal("Successfully Fetched");
        expect(response.data).to.have.property("candidates").that.is.an("array").with.lengthOf.at.least(1);
        // Asserting individual candidate properties
        response.data.candidates.forEach(candidate => {
          expect(candidate).to.have.property("id").that.is.a("number");
          expect(candidate).to.have.property("company_id").that.is.a("number");
          expect(candidate).to.have.property("candidate_id").that.is.a("number");
          expect(candidate).to.have.property("name").that.is.a("string");
          expect(candidate).to.have.property("name_holder").that.is.a("string");
          expect(candidate).to.have.property("marriage_status").that.is.a("string");
          expect(candidate).to.have.property("phone").that.is.a("string");
          expect(candidate).to.have.property("email").that.is.a("string");
          expect(candidate).to.have.property("code").that.is.a("string").or.is.null;
          expect(candidate).to.have.property("designation").that.is.a("string");
          expect(candidate).to.have.property("dob").that.is.a("string");
          expect(candidate).to.have.property("profile_image").that.is.a("string");
          expect(candidate).to.have.property("status").that.is.a("string");
          expect(candidate).to.have.property("office_hour_start").that.is.a("string");
          expect(candidate).to.have.property("office_hour_end").that.is.a("string");
        })
    });
  });
});
});
