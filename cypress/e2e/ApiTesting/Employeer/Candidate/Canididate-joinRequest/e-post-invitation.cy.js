/// <reference types="Cypress" />

import { companyId , empToken} from "../../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("Post Invitation ", () => {
  it('should be able send invitation', () => {
    const randomCandidateId = Math.floor(Math.random() * 1000);
    cy.request({
      method: 'POST',
      url: `https://veloxlabs.net/api/v2/employer/${companyId}/invitation/store`,
      headers: {
        'Authorization': empToken 
               },
     body : {
        'status' : "Approved" ,
        'candidate_id' : randomCandidateId 
     }               
    }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('success')
        expect(response.body.message).to.eq('Invitation is sent successfully')
        })
    });
  });

