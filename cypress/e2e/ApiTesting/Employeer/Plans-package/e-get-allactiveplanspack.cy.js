/// <reference types="Cypress" />
import { empToken } from './../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("get all active plans pack ", () =>  {
  it('should be able to get all active plans pack', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/package/all',
      headers: {
        'Authorization': empToken 
               }

    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
  
        // Assert the structure of the 'data' object
        expect(response.body.data).to.exist;
        expect(response.body.data).to.have.property('packages').that.is.an('array').and.not.empty;
  
        // Assert properties of each package
        const packages = response.body.data.packages;
        packages.forEach(pkg => {
          expect(pkg).to.have.property('id').that.is.a('number');
          expect(pkg).to.have.property('title').that.is.a('string').and.not.empty;
          expect(pkg).to.have.property('status').that.is.a('string').and.equal('Active');
          expect(pkg).to.have.property('price').that.is.a('number').and.at.least(0);
          expect(pkg).to.have.property('remarks').that.is.a('string');
          expect(pkg).to.have.property('feature').that.is.an('array').and.not.empty;
          pkg.feature.forEach(feature => {
            expect(feature).to.be.a('string').and.not.empty;
          });
    });
  });
});
});
