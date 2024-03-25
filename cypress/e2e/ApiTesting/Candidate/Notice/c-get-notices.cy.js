/// <reference types = "Cypress"/>

import { companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("to get notice  ", () => {
    it('should be able to get notice ', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/notice?${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        
        });
      });
    });

