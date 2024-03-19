/// <reference types = "Cypress"/>
import { companyId, noticeId } from './../../Constantsfile/constants';
import { canToken } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');
describe("to store resign  ", () => {
    it('should be able to store Resign ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/notice/read?${noticeId}&${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        
        });
      });
    });

