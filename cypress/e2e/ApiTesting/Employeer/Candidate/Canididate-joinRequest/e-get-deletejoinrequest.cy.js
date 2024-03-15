/// <reference types="Cypress" />

import { companyId , empToken} from "../../../Constantsfile/constants";



const baseUrl = Cypress.env('baseUrl');

describe("Get delete join request ", () => {
  it('should be able to get deleted join request', () => {
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/${companyId}/invitation/destroy/2`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.code).to.equal(400);
        expect(response.status).to.equal("error");
        expect(response.message).to.equal("Invitation Already Removed");
        })
    });
  });

