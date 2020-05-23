import { getGreeting } from '../support/app.po';

describe('covid-react-app', () => {
  before(() => cy.visit('/'));

  it('should render', () => {
    cy.get('.logoTitle').contains('CovidReactApp');
  });
  it('shoul go to country', () => {
    cy.get(':nth-child(1) > .ant-card-cover').click();
    cy.get('.contentHeaderTitle').contains('País: Afghanistan');
  });
  it('shoul let me write', () => {
    cy.get('.ant-input').type('Colombia');
    cy.get('.ant-input').should('have.value', 'Colombia');
  });
});
