/// <reference types = "Cypress"/>

import { companyId, noticeId } from "../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');
describe("to view notice  ", () => {
    it('should be able to view notice ', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/notice/read?${noticeId}&${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        
        });
      });
    });

