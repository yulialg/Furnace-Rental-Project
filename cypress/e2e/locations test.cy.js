///<reference types = "Cypress"/>
import {data}from '../fixtures/params.json'
describe('The consumersenergymanagement main page buttons', () => {
  it('passes', () => {
    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
  })
})
describe('The state list test will verify the state list functionality', () => {
  const state_list = '[name="nastates"]'
  const city_name = '[name="stage2"]'

  before(() => {
    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
  })

  beforeEach(() => {
    cy.get(state_list).select('Select State', {force: true})
  })

  //it('populates state_list', () => {
    //cy.get(state_list).select('Ontario', { force: true })
   // cy.get(state_list).select('New Brunswick', { force: true })
    //cy.get(state_list).select('Quebec', { force: true })
    //cy.get(state_list).select('Saskatechewan', { force: true })
  //})
  it('populates state and city', () => {
    for (let index = 0; index<data.length;index++){
    cy.get(state_list).select(data[index].state).invoke("val").should('eq',data[index].state)
    cy.get(city_name).select(data[index].city).invoke("val").should('eq',data[index].value)
  }
  })
})
