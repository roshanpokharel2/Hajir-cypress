/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to remove approver ", () => {
    it('should be able to remove approver ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/approver/delete/${companyId}/${candidateId}`,
        headers: {
          'Authorization': empToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Deleted.');
        
        });
      });
    });

