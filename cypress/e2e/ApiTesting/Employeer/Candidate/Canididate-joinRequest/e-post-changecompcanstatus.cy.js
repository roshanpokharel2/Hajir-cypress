/// <reference types="Cypress" />

import { candidateId, companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("Post change company canidate status ", () => {
  it('should be able to change company canidate status', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'POST',
      url: `${baseUrl}/employer/candidate/change-status/${companyId}/${candidateId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}` 
               },
     body : {
        'status' : "Active"
     }               
    }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('success')
        expect(response.body.message).to.eq('Successfully Updated.')
        })
    });
  });
});