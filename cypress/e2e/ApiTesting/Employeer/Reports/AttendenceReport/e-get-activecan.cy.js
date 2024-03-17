/// <reference types="Cypress" />
import { companyId, empToken} from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get active candidate ", () => {
  it('should be able to get active candidate ', () => {
    cy.request({
      method: 'GET', 
      url: `https://veloxlabs.net/api/v2/employer/report/today/active-candidate/${companyId}`,
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('success');
    expect(response.body.message).to.equal('Successfully Fetched');
    expect(response.body).to.have.property('data');
    const data = response.body.data;
    expect(data).to.have.property('candidates').that.is.an('array');

       });
        });
    });


