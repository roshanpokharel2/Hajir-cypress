/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to store resignlist  ", () => {
    it('should be able to store resignlist ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/resign/list`,
        headers: {
          'Authorization': empToken 
                 },
        body: {
            "company_id":2
        }
                 
      }).then(response => {
       
        });
      });
    });

