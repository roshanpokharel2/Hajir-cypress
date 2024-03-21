/// <reference types="Cypress" />

import { canToken, companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');


describe("get leave types", () => {
  it('should be able to get leave types  ', () => {
    
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/leave-types/${companyId}`, 
        headers: {
          'Authorization' : canToken
        },
      }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully Fetched");
            expect(response.body.data).to.have.property("leaveTypes").that.is.an("array");
            expect(response.body.data).to.have.property("avaliable_leave").that.is.an("object");
            expect(response.body.data.leaveTypes).to.have.lengthOf(4); 
            expect(response.body.data.leaveTypes[0]).to.have.property("id").that.equals(1);
            expect(response.body.data.leaveTypes[0]).to.have.property("title").that.equals("Sick");
            expect(response.body.data.leaveTypes[0]).to.have.property("status").that.equals("Active");
         
           });
    });
  
});
