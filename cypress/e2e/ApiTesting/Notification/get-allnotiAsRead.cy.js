/// <reference types="Cypress" />
import { empToken } from '../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("get all notification as read", () =>  {
  it('should be able to get all notification as read ', () => {
      
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/notification/mark-all-read`,
      headers: {
        'Authorization': empToken 
               }

    }).then(response => {
        expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.message).to.equal('Successfully Marked As Read');
        
    });
  });
  });