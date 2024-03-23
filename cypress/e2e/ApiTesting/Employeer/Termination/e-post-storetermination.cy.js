/// <reference types = "Cypress"/>

const baseUrl = Cypress.env('baseUrl');

describe("to store termination  ", () => {
    it('should be able to store termination ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/termination`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
            "company_id":2,
            "candidate_id":72,
            "title":"this is my title",
            "description":"this is description",
            "type":"resigned",
            "date":"2025-05-06"
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Candidate terminated successfully');

        // Assert the structure of the 'data' object
        expect(response.body.data).to.exist;
        
        const terminationData = response.body.data;

        // Assert properties of the termination data
        expect(terminationData).to.have.property('company_id').that.is.a('number').and.equal(2);
        expect(terminationData).to.have.property('candidate_id').that.is.a('number').and.equal(72);
        expect(terminationData).to.have.property('title').that.is.a('string').and.equal('this is my title');
        expect(terminationData).to.have.property('description').that.is.a('string').and.equal('this is description');
        expect(terminationData).to.have.property('type').that.is.a('string').and.equal('resigned');
        expect(terminationData).to.have.property('date').that.is.a('string').and.equal('2025-05-06');
        expect(terminationData).to.have.property('updated_at').that.is.a('string').and.not.empty;
        expect(terminationData).to.have.property('created_at').that.is.a('string').and.not.empty;
        expect(terminationData).to.have.property('id').that.is.a('number').and.not.empty;
        
        });
      });
    });

  });