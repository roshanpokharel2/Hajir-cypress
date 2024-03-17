/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to add missingleave  ", () => {
    it('should be able to add missingleave ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/candidate/missing-leave-submit`,
        headers: {
          'Authorization': empToken 
                 },
        body: {
            "start_date": "3/17/2024",
            "end_date": "3/17/2024",
            "company_id" : 2,
            "candidate_id" : 72,
            "leave_type" : 1,
            "status": ""
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Saved.');
        
        });
      });
    });

