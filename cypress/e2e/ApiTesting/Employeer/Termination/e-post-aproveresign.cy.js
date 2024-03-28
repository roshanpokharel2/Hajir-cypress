/// <reference types = "Cypress"/>

const baseUrl = Cypress.env('baseUrl');

describe("to approve resign  ", () => {
    it('should be able to approve resign ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/termination`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
            "termination_id":1
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetch');

        // Assert the structure of the 'data' object
        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('object').and.not.empty;
        
        // Assert properties of the termination data
        const terminationData = response.body.data;
        expect(terminationData).to.have.property('id').that.is.a('number');
        expect(terminationData).to.have.property('candidate_id').that.is.a('number');
        expect(terminationData).to.have.property('company_id').that.is.a('number');
        expect(terminationData).to.have.property('title').that.is.a('string').and.not.empty;
        expect(terminationData).to.have.property('description').that.is.a('string').and.not.empty;
        expect(terminationData).to.have.property('type').that.is.a('string').and.equal('terminated');
        expect(terminationData).to.have.property('approved_at').that.is.a('string').and.not.empty;
        expect(terminationData).to.have.property('date').that.is.a('string').and.not.empty;
        expect(terminationData).to.have.property('created_at').that.is.a('string').and.not.empty;
        expect(terminationData).to.have.property('updated_at').that.is.a('string').and.not.empty;
      })
        });
      });
    });

