/// <reference types="Cypress" />

import { companyId , empToken} from "../../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("Post Invitation ", () => {
  it('should be able to update join request', () => {
     cy.request({
      method: 'POST',
      url: `https://veloxlabs.net/api/v2/employer/${companyId}/invitation/update/2`,
      headers: {
        'Authorization': empToken 
               },
     body : {
        'status' : "Approved" ,
        'candidate_id' : 2
     }               
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('success');
        expect(response.body.message).to.eq('Successfully Updated.');
        })
    });
  });

