/// <reference types="Cypress" />

import {  companyId, end_date, start_date } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');


describe("store leave Details", () => {
  it('should be able to store leave details ', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/store-leave/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        body: {
            'leave_type_id':1,
            'remarks':"very much sick plz give me leave",
            'start_date':`${start_date}`,
            'end_date':`${end_date}`,
            'type': "Full"
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Saved");
           });
    });
  });
});
