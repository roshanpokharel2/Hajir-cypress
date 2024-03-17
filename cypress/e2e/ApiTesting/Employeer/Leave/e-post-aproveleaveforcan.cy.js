/// <reference types = "Cypress"/>
import { empToken, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to approveleavefromcandidate ", () => {
    it('should be able to approveleavefromcandidate ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer//candidateLeave/change-status/${candidateId}`,
        headers: {
          'Authorization': empToken 
                 },
            body: {
                    status: 'approved', 
                    pay_status: 'paid' 
                  }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Updated.');

        });
      });
    });
