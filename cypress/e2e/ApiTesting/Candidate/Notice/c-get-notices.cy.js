/// <reference types = "Cypress"/>
import { companyId } from './../../Constantsfile/constants';
import { canToken } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get notice  ", () => {
    it('should be able to get notice ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/notice?${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        
        });
      });
    });

