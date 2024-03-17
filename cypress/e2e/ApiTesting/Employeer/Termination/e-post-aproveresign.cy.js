/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to approve resign  ", () => {
    it('should be able to approve resign ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/termination`,
        headers: {
          'Authorization': empToken 
                 },
        body: {
            "termination_id":1
        }
                 
      }).then(response => {
        
        
        });
      });
    });

