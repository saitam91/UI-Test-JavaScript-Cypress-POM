# UI Test / JavaScript - Cypress - POM

## Resume:
* This is an example of UI Automation Testing with Cypress, using Page Object Model as a design pattern.

-----------------------  

To achieve this test framework, a test case on a [demo eShop website](https://ecommerce-playground.lambdatest.io/) was created:


* Validate there is available stock for a product and be able to write a review for this particular element, meanwhile several actions are previously executed through the UI.
 
 
-----------------------  

* In order to automate the test case, the following classes and files were created:

  ***1. cy.js class***  where the test cases are implemented.
  
  ***2. .js class (POM design pattern)***  where methods to interact with the web elements were created, the cy.js class will inherit these functionalities.

  ***3. .json file (fixture)***   where to save the test data to be used through the different UI actions.
  
 ------------------------
  
  ## Technologies used:

   - Language: JavaScript

* Enviroment Configuration:

  - Download and install Node.js

  - Run ```npm init```
  
  - Run ```npm install cypress --save-dev```
  
  - Run ```npm install -D cypress-xpath```

* Mochawesome Reports:

  - Run ```npm install --save-dev mochawesome ```
  
 * Run Tests:

   - Run ```npm run cy:run:chrome -- --reporter mochawesome --spec "cypress/e2e/PageObjectModel/EcommercePOM.cy.js"```
