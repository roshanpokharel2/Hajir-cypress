/// <reference types="Cypress" />

import { companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');


describe("Get leave Details", () => {
  it('should be able to get leave details ', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/get-single-leave-details/${companyId}/139`, 
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched");
        expect(response.body.data.id).to.be.a('number');
        expect(response.body.data.candidate_id).to.be.a('number');
        expect(response.body.data.company_id).to.be.a('number');
        expect(response.body.data.leave_type).to.be.a('string');
        expect(response.body.data.type).to.be.a('string');
        expect(response.body.data.remarks).to.be.a('string');
        expect(response.body.data.status).to.be.a('string');
        expect(response.body.data).to.have.property('start_date');
        expect(response.body.data).to.have.property('end_date');
        expect(response.body.data).to.have.property('application_date');
        expect(response.body.data.name).to.be.a('string');
        expect(response.body.data).to.have.property('leave_days');
      });
    });
    });
  
});
