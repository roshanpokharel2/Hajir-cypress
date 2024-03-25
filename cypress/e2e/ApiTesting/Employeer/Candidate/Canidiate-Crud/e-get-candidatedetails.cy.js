/// <reference types="Cypress" />

import { candidateId, companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("candidate Details ", () => {
  it('should be able to view candidate details', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/candidate/get-candidate/${companyId}/${candidateId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`,
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.status).to.equal("success");
        expect(response.message).to.equal("Successfully Fetched.");
        expect(response.data.company_id).to.equal(2);
        expect(response.data.candidate_id).to.equal(13);
        expect(response.data.name_holder).to.equal("Mr");
        expect(response.data.name).to.equal("Roshan pokharel");
        expect(response.data.code).to.equal("");
        expect(response.data.designation).to.equal("qa");
        expect(response.data.phone).to.equal("9861389660");
        expect(response.data.email).to.equal("pokharelroshan72@gmail.com");
        expect(response.data.dob).to.equal("2001-03-10");
        expect(response.data.joining_date).to.equal("2024-02-18T18:15:00.000000Z");
        expect(response.data.marriage_status).to.equal("Unmarried");
        expect(response.data.salary_amount).to.equal(15000);
        expect(response.data.salary_type).to.equal("Monthly");
        expect(response.data.probation_period).to.equal(1);
        expect(response.data.working_hours).to.equal("6:00");
        expect(response.data.allow_late_attendance).to.equal("00:05:00");
        expect(response.data.overtime_hrs).to.equal("2 (1)");
        expect(response.data.allowance_amount).to.equal("0 Monthly");
        expect(response.data.duty_time).to.equal("08:00:00");
        expect(response.data.office_hour_end).to.equal("14:00:00");
        expect(response.data.break_duration).to.equal("00:30");
        expect(response.data.casual_leave).to.equal(2);
        expect(response.data.sick_leave).to.equal(2);
        expect(response.data.allow_network_access).to.equal("All Net");
        expect(response.data.weekly_off[0].id).to.equal(7);
        expect(response.data.weekly_off[0].business_leave).to.equal("Saturday");
        expect(response.data.departments[0].id).to.equal(15);
        expect(response.data.departments[0].name).to.equal("Quality Assurance (QA)");
        expect(response.data.profile_image).to.equal("http://veloxlabs.net//storage/upload/24/03/17095232611000000774.jpg");
    });
  });
  });
});
