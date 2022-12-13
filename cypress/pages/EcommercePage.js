class EcommercePage{

   
    ///////////////////FIXTURE///////////////////

    productFixture(){
        cy.fixture('ecommerceProduct').then(function(testdata){
            this.testdata=testdata
        })
    }

   ///////////////////LOCATORS///////////////////

   categoryMenu(){
    return cy.get('#entry_217833 > .icon-left > .icon > svg')
   }
   
   category(cat){
    return cy.contains(cat)
   }

   sort(){
    return cy.get('#input-sort-212403')
   }

   filterMenu(){
    return cy.get('#entry_212401 > .icon-left')
   }

   inputPriceFilter(){
    return cy.get('#mz-filter-panel-1-0 > .mz-filter-group-content > .d-flex > [name="mz_fp[min]"]')
   }

   closeFilterMenu(){
    return cy.get('#entry_212418 > .icon-left > .icon > svg')
   }

   product(prod){
    return cy.contains(prod)
   }

   stocklLabel(){
    return cy.get(':nth-child(4) > .badge')
   }

   inputNameReview(){
    return cy.get('#input-name')
   }

   inputTextReview(){
    return cy.get('#input-review')
   }

   radioRating(){
    return cy.get('[type="radio"]')
   }

   buttonSubmitReview(){
    return cy.get('#button-review')
   }

   alertMessage(){
    return cy.get('#form-review > .alert')
   }

   
   ///////////////////ACTIONS///////////////////

   navigateToHomePage(){
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    }
    
   selectCategory(category){
        this.categoryMenu().click()
        this.category(category).click()
    }
   
    sortBy(filter){
        this.sort().select(filter)
    }

    filterPrice(price){
        this.filterMenu().click()
        this.inputPriceFilter().clear()
        this.inputPriceFilter().type(price,{enter:true})  
    }

    applyFilters(){
        this.closeFilterMenu().click()   
    }

    selectProduct(product){
        this.product(product).click()
    }

    nameReview(name){
        this.inputNameReview().type(name)
    }

    textReview(text){
        this.inputTextReview().type(text)
    }

    ratingProduct(value){
        this.radioRating().check(value,{force:true})  
    }

    submitReview(){
        this.buttonSubmitReview().click()
    }
}

export default EcommercePage