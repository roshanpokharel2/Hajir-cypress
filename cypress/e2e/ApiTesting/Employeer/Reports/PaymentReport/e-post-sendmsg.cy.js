/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("To Sendmessage ", () => {
    it('should be able to send message ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/send-message/${companyId}/${candidateId}`,
        headers: {
          'Authorization': empToken 
                 },
        body: {
            message : 'Testing Send Msg from Employer'
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');
        
        });
      });
    });

