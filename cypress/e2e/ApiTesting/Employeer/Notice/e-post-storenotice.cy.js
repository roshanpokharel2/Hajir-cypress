/// <reference types = "Cypress"/>

const baseUrl = Cypress.env('baseUrl');

describe("to store notice  ", () => {
    it('should be able to store notice ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/notice`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
          "title": "Sample Notice Title 1",
          "description": "This is a sample description for the notice. 9",
          "notice_date": "2023-03-10",
          "departments": [
                     15
                       ],
          "company_id": 2
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');

        // Assert the structure of the 'data' object
        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('object').and.not.empty;
        
        // Assert properties of the notice data
        const noticeData = response.body.data;
        expect(noticeData).to.have.property('title').that.is.a('string');
        expect(noticeData).to.have.property('description').that.is.a('string');
        expect(noticeData).to.have.property('notice_date').that.is.a('string');
        expect(noticeData).to.have.property('company_id').that.is.a('number');
        expect(noticeData).to.have.property('notice_by').that.is.a('number');
        expect(noticeData).to.have.property('updated_at').that.is.a('string');
        expect(noticeData).to.have.property('created_at').that.is.a('string');
        expect(noticeData).to.have.property('id').that.is.a('number');
        });
      });
    });
  });
