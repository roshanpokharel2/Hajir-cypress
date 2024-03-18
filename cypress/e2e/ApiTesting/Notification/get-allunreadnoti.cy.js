/// <reference types="Cypress" />
import { empToken } from '../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("get all unread notification ", () =>  {
  it('should be able to get all unread notification ', () => {
      
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/notification/unread`,
      headers: {
        'Authorization': empToken 
               }

    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
        expect(response.body.data.notifications).to.be.an('array').that.is.empty; 
        
    });
  });
  });
