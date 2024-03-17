/// <reference types="Cypress" />
import { companyId, empToken} from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get all candidate ", () => {
  it('should be able to get all candidate ', () => {
    cy.request({
      method: 'GET', 
      url: `https://veloxlabs.net/api/v2/employer/report/today/all-candidate/${companyId}`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
        expect(response.body).to.have.property('data');
        const candidateList = response.body.data.candidates;
        expect(candidateList).to.be.an('array');
        });
       });
        });


