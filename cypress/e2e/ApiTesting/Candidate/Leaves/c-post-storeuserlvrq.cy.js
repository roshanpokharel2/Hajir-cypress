/// <reference types="Cypress" />

import { canToken, companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');


describe("store leave Details", () => {
  it('should be able to store leave details ', () => {
    
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/store-leave/${companyId}`, 
        headers: {
          'Authorization' : canToken
        },
        body: {
            'leave_type_id':1,
            'remarks':"very much sick plz give me leave",
            'start_date':"2024-02-23",
            'end_date':"2024-02-23",
            'type': "Full"
        }
      }).then(response => {
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Saved");
           });
    });
  
});
