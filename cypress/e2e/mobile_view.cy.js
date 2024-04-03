/// <reference types="cypress" />

import myTeam from '../fixtures/teamsMy';
import oppTeam from '../fixtures/teamsOpp';

//Defining the mobile view ports to run test
const sizes = ['iphone-5', 'samsung-s10'];

sizes.forEach((size) => {
  describe(`Mobile View Test`, () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('host')}`);
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }
    });
    // testing that all functionalities function on mobile and medium size devices
    context('Toast- For Mising Teams', () => {
      it(`Verify Toast notification when user clicks calculate without selecting either Teams ${size}`, () => {
        cy.get('#calculateButton').click();
        cy.get('.toast-message').should('be.visible');
        cy.get('.toast-message').should('contain.text', 'Please Select Teams');
      });

      it(`Verify Toast notification when user clicks calculate but select just one Team ${size}`, () => {
        cy.get('#myTeam').select('Barcelona');
        cy.get('#calculateButton').click();
        cy.get('.toast-message').should('be.visible');
        cy.get('.toast-message').should(
          'contain.text',
          'You must select Teams for Both Own and Rival'
        );
      });
    });

    myTeam.forEach((myteam) => {
      oppTeam.forEach((oppteam) => {
        context(`Calculate Chances for ${myteam} vs ${oppteam} ${size}`, () => {
          it(`Verify Chances are calculated for ${myteam} & ${oppteam}`, () => {
            cy.get('#myTeam').select(`${myteam}`);
            cy.get('#oppTeam').select(`${oppteam}`);
            cy.get('#calculateButton').click();

            //Center text that displays winner should not visble on mobile
            cy.get('#winner h4').should('not.be.visible');
            cy.get('#my_Chances').should('not.be.empty');
            cy.get('#my_Chances').should(
              'not.have.html',
              '\n                  <img src="/static/images/loader2.gif" alt="waiting...">\n               '
            );
            cy.get('#opp_Chances').should('not.be.empty');
            cy.get('#opp_Chances').should(
              'not.have.html',
              '\n                  <img src="/static/images/loader2.gif" alt="waiting...">\n               '
            );
          });
        });
      });
    });

    context(`Clear Button ${size}`, () => {
      it('Verify Clear Button Clears All Input & Result Fields', () => {
        cy.get('#myTeam').select('Barcelona');
        cy.get('#oppTeam').select('Juventus');
        cy.get('#calculateButton').click();
        cy.get('#my_Chances').should(
          'not.have.html',
          '\n                  <img src="/static/images/loader2.gif" alt="waiting...">\n               '
        );
        cy.get('#opp_Chances').should(
          'not.have.html',
          '\n                  <img src="/static/images/loader2.gif" alt="waiting...">\n               '
        );
        cy.get('#cleareButton').click();
        cy.get('#my_Chances').should(
          'have.html',
          '<img src="/static/images/loader2.gif" alt="waiting...">'
        );
        cy.get('#opp_Chances').should(
          'have.html',
          '<img src="/static/images/loader2.gif" alt="waiting...">'
        );
      });
    });

    context(`Share App ${size}`, () => {
      it('Verify User can close Share App Modal by clicking close', () => {
        cy.get('#mobileBtn_Menu').click();
        cy.get('#shareButton').click();
        cy.get('.cancel').click();
        cy.get('#contact-form').should('not.be.visible');
      });

      it('Verify user is unable to proceed to share app without entering name', () => {
        cy.get('#mobileBtn_Menu').click();
        cy.get('#shareButton').click();
        cy.get('#name').type('Michael');
        cy.get('[type="submit"]').click();
        cy.get('.toast-message').should('not.exist');
      });

      it('Verify user is unable to proceed to share app without entering email', () => {
        cy.get('#mobileBtn_Menu').click();
        cy.get('#shareButton').click();
        cy.get('#email').type('sanmicad@gmail.com');
        cy.get('[type="submit"]').click();
        cy.get('.toast-message').should('not.exist');
      });

      it('Verify user gets a succes message upon successfully sharing app', () => {
        cy.get('#mobileBtn_Menu').click();
        cy.get('#shareButton').click();
        cy.get('#name').type('Michael');
        cy.get('#email').type('sanmicad@gmail.com');
        cy.get('#sendersName').type('Tester');
        cy.get('[type="submit"]').click();
        cy.get('.toast-message', { timeout: 10000 }).should('be.visible');
        cy.get('.toast-message', { timeout: 10000 }).should(
          'contain.text',
          'Message Sent: Thanks for sharing'
        );
      });
    });

    context(`Page Contents ${size}`, () => {
      //center image should not be visible on mobile devices
      it('Verify Center Image is not Visble', () => {
        cy.get('#circle-cover-bg').should('not.be.visible');
      });

      it('Verify Call Out Text is visible ', () => {
        cy.get('#question').should('be.visible');
        cy.get('#chance-info').should('be.visible');
      });

      it('Verify Header Logo is Visible', () => {
        cy.get('.navbar-brand').should('be.visible');
        cy.get('#logo').should('be.visible');
      });

      it('Verify Footer is Visible', () => {
        cy.get('#footer-details').should('be.visible');
      });
    });
  });
});
