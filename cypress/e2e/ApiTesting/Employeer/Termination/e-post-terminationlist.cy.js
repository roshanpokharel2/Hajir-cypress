/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to store terminationlist  ", () => {
    it('should be able to store terminationlist ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/termination/list`,
        headers: {
          'Authorization': empToken 
                 },
        body: {
            "company_id":2
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetch');

        // Assert the structure of the 'data' array
        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('array').and.not.empty;
        
        // Assert properties of the termination data
        response.body.data.forEach(termination => {
          expect(termination).to.have.property('id').that.is.a('number');
          expect(termination).to.have.property('candidate_id').that.is.a('number');
          expect(termination).to.have.property('company_id').that.is.a('number');
          expect(termination).to.have.property('title').that.is.a('string').and.not.empty;
          expect(termination).to.have.property('description').that.is.a('string').and.not.empty;
          expect(termination).to.have.property('type').that.is.a('string').and.equal('terminated');
          expect(termination).to.have.property('approved_at').that.is.null;
          expect(termination).to.have.property('date').that.is.a('string').and.not.empty;
          expect(termination).to.have.property('created_at').that.is.a('string').and.not.empty;
          expect(termination).to.have.property('updated_at').that.is.a('string').and.not.empty;
        
        });
      });
    });
});
