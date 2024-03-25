/// <reference types="Cypress" />

import { companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');


describe("get user all types", () => {
  it('should be able to get all user types  ', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/all-leaves/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
      }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully Fetched");
            expect(response.body.data).to.have.property("approved_leaves").that.is.an("array");
            expect(response.body.data).to.have.property("unapproved_leaves").that.is.an("array");
            expect(response.body.data).to.have.property("rejected_leaves").that.is.an("array");
            expect(response.body.data.approved_leaves[0]).to.have.property("id").that.is.a("number");
            expect(response.body.data.approved_leaves[0]).to.have.property("leave_type").that.is.a("string");
            expect(response.body.data.approved_leaves[0]).to.have.property("application_date").that.is.a("string");
            expect(response.body.data.unapproved_leaves[0]).to.have.property("id").that.is.a("number");
            expect(response.body.data.unapproved_leaves[0]).to.have.property("leave_type").that.is.a("string");
            expect(response.body.data.unapproved_leaves[0]).to.have.property("application_date").that.is.a("string");
            expect(response.body.data.rejected_leaves).that.is.an("array");
           });
    });
  });
});
