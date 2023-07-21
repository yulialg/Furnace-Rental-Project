///<reference types = "Cypress"/>
import {curr_heating_type, new_heating_type} from '../fixtures/calculatorParams.json'
describe('The calculator inputs', () => {
    it('passes', () => {
      cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    })
  })
  describe('The calculator inputs', () => {
    const state_list = '[name="nastates"]'
    const city_name = '[name="stage2"]'
    const stories = '[name="stories"]'
    const squarefeet = '[name="squarefeet"]'
    const houseage = '[name="houseage"]'
    const curheatcost = '#NHC'
    const curheattype ='[name="heattype"]'
  
    before(() => {
      cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    })
  
    //beforeEach(() => {
      //cy.get(state_list).select('Select State', {force: true})
    //})
  
    it('populates step 1 values', () => {
        cy.get(state_list).should('be.visible')
        cy.get(state_list).select('Ontario', { force: true }).should('have.value', 'Ontario')
    })
    it('populates step 1 values', () => {
        cy.get(city_name).should('be.visible')
        cy.get(city_name).select('Toronto', { force: true }).should('have.value', '22')
    })
    it('populates step 1 values', () => {
        cy.get(stories).should('be.visible')
        cy.get(stories).select('1', { force: true }).should('have.value', '1')
    })
    it('populates step 1 values', () => {
        cy.get(squarefeet).should('be.visible')
        cy.get(squarefeet).select('500', { force: true }).should('have.value', '500')
    })
it('navigates to the houseage field', () => {
    cy.get(houseage).type("50")
})
it('changes current heat type will change current heat cost', () =>{
   //let curcost=cy.get(currenheatcost)
   //cy.get(curheatcost).invoke('text').as('curcost')
   //console.log(curcost)
   //cy.get(curheattype).select("Oil")
   //cy.get(curheatcost).invoke('text').should('not.equal','curcost')

let curcost = cy.get('#NHC').invoke('text')
console.log("PRINT1: " + cy.get('#NHC').invoke('text'))
console.log("PRINT2: " + curcost)
cy.get('[name="heattype"]').select("Natural Gas")
console.log("PRINT3: " + cy.get('[name="heattype"]'))
cy.get('#NHC').invoke('text').should('not.equal', curcost)
console.log("PRINT4: " + cy.get('#NHC').invoke('text'))
})
})