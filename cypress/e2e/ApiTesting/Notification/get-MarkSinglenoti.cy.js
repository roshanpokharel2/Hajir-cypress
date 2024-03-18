/// <reference types="Cypress" />
import { empToken } from '../../Constantsfile/constants';
import { notificationId } from '../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("get all single notification marked ", () =>  {
  it('should be able to get all single notification marked', () => {
      
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/notification/mark-single-read/${notificationId}`,
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