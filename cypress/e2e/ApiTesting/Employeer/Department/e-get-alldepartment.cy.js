/// <reference types="Cypress" />

import { empToken } from "../../Constantsfile/constants";



const baseUrl = Cypress.env('baseUrl');

describe("get all departments ", () => {
  it('should be able to get all departments', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/all-departments',
      headers: {
        'Authorization': empToken 
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.status).to.equal("success");
  expect(response.message).to.equal("Successfully Fetched.");
  expect(response.data.departments).to.be.an('array');
  expect(response.data.departments).to.have.lengthOf(31);
  expect(response.data.departments[0].id).to.equal(1);
  expect(response.data.departments[0].name).to.equal("Administration");
  expect(response.data.departments[1].id).to.equal(2);
  expect(response.data.departments[1].name).to.equal("Information Technology");
  
    });
  });
});
