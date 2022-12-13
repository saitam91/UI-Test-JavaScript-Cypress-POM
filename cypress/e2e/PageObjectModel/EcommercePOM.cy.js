import EcommercePage from "../../pages/EcommercePage";

const ecommerce = new EcommercePage

describe('UI Testing POM',()=>{

    before(function(){
        ecommerce.productFixture()
        ecommerce.navigateToHomePage()
        })

    it('Validate actions on Eshop webpage', function(){
        ecommerce.selectCategory(this.testdata.categoryName)
        ecommerce.sortBy(this.testdata.sortBy)
        ecommerce.filterPrice(this.testdata.priceFilter)
        ecommerce.applyFilters()
        ecommerce.selectProduct(this.testdata.productName)
        ecommerce.stocklLabel().should('have.text','In Stock')
        ecommerce.nameReview(this.testdata.userName)
        ecommerce.textReview(this.testdata.textReview)
        ecommerce.ratingProduct(this.testdata.ratingValue)
        ecommerce.submitReview()
        ecommerce.alertMessage().should('have.text',' Thank you for your review. It has been submitted to the webmaster for approval.')
    })
})
