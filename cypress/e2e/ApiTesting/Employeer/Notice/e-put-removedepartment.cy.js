/// <reference types = "Cypress"/>

const baseUrl = Cypress.env('baseUrl');

describe("to remove department  ", () => {
    it('should be able to remove department ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/notice/remove/department`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
          "notice_id":3,
          "department_id":10
      }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.message).to.equal('Department successfully marked as inactive in the notice.');

      expect(response.body.data).to.exist;
      expect(response.body.data).to.be.an('object').and.not.empty;

      const noticeData = response.body.data;
      expect(noticeData).to.have.property('id').that.is.a('number');
      expect(noticeData).to.have.property('title').that.is.a('string').and.not.empty;
      expect(noticeData).to.have.property('description').that.is.a('string').and.not.empty;
      expect(noticeData).to.have.property('image').that.is.a('string').and.empty; // Assuming empty image is valid
      expect(noticeData).to.have.property('notice_date').that.is.a('string').and.not.empty;
      expect(noticeData).to.have.property('company_id').that.is.a('number');
      expect(noticeData).to.have.property('status').that.is.equal('inactive');
      expect(noticeData).to.have.property('departments').that.is.an('array').and.not.empty;
      expect(noticeData).to.have.property('candidates').that.is.an('array').and.not.empty;

      noticeData.departments.forEach(department => {
        expect(department).to.have.property('department_id').that.is.a('number');
        expect(department).to.have.property('status').that.is.a('string').and.satisfy(status => ['active', 'inactive'].includes(status));
      });

      noticeData.candidates.forEach(candidate => {
        expect(candidate).to.have.property('id').that.is.a('number');
        expect(candidate).to.have.property('name').that.is.a('string').and.not.empty;
        expect(candidate).to.have.property('designation').that.is.a('string').and.not.empty;
        expect(candidate).to.have.property('marriage_status').that.is.a('string').and.not.empty;
        expect(candidate).to.have.property('salary_type').that.is.a('string').and.not.empty;
        expect(candidate).to.have.property('salary').that.is.a('string').and.not.empty;
        expect(candidate).to.have.property('verified_status').that.is.a('string').and.not.empty;
        expect(candidate).to.have.property('status').that.is.a('string').and.equal('Active'); // Assuming all candidates should remain active after marking a department as inactive
        expect(candidate).to.have.property('allow_network_access').that.is.a('string').and.not.empty;
        expect(candidate).to.have.property('company_id').that.is.a('number');
        expect(candidate).to.have.property('candidate_id').that.is.a('number');
        expect(candidate).to.have.property('invitation_id').that.is.a('number').or.be.null;
        expect(candidate).to.have.property('read_at').that.is.null;
        });
      });
    });
  });
});
