/// <reference types="Cypress" />

import { companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');


describe("get leave types", () => {
  it('should be able to get leave types  ', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/leave-types/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
      }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully Fetched");
            expect(response.body.data).to.have.property("leaveTypes").that.is.an("array");
            expect(response.body.data).to.have.property("avaliable_leave").that.is.an("object");
            expect(response.body.data.leaveTypes).to.have.lengthOf(4); 
            expect(response.body.data.leaveTypes[0]).to.have.property("id");
            expect(response.body.data.leaveTypes[0]).to.have.property("title");
            expect(response.body.data.leaveTypes[0]).to.have.property("status");
      });
           });
    });
  
});
