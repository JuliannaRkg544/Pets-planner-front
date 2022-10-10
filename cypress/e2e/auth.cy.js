/// <reference types="cypress" />


describe("E2E /login",()=>{

    
})

describe("E2E  /logup",(()=>{
    beforeEach(() => {
      cy.request("POST", `${process.env.REACT_APP_API_URL}/user/delete-all`, {});
    })

}))