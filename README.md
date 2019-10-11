# Protractor-Framework

 ## Steps to create the framework: 
 
  * tsc --init
      - tsconfig.json will create
         - ` "outDir": "scripts/"` [ to store the .js files ]
  * npm init
    - package.json file will create
  * Install required packages
       - npm i cucumber --save-dev
  
        "devDependencies": {
           "typescript": "^3.6.3",
           "ts-node": "^8.4.1",
           "webdriver-manager": "^12.1.7",
           "protractor": "^5.4.2",
           "protractor-cucumber-framework": "^6.1.3",
           "selenium-protractor": "^2.0.0",
           "selenium-cucumber-js": "^1.7.0",
           "cucumber": "^5.1.0",
           "cucumber-html-reporter": "^5.0.2",
           "tslint": "^5.20.0",
           "chai": "^4.2.0",
           "chai-as-promised": "^7.1.1",
           "rimraf": "^3.0.0",
           "shortid": "^2.2.15",
           "timeout-as-promise": "^1.0.0",
           "@types/chai": "^4.2.3",
           "@types/chai-as-promised": "^7.1.2",
           "@types/cucumber": "^4.0.7",
           "@types/node": "^10.12.18",
           "@types/selenium-webdriver": "3.0.14",
           "@types/shortid": "0.0.29"
         }   

         "Scripts" {
         "compile": "tsc",
         "clean": "rimraf ./scripts && rimraf ./reports/json/*.json && rimraf ./reports/html/*.html",
         "update": "webdriver-manager update",
         "autoExecute": "npm run clean && npm run compile &&    protractor scripts/runner.js"
         }   

  * Create **.gitignore**
  * Create **runner.ts** // [config.ts](https://github.com/angular/protractor/blob/master/lib/config.ts) & [cucumber-framework](https://www.npmjs.com/package/protractor-cucumber-framework)
  * Create **hooks.ts** // [hooks.md](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md)
  * Create [**features folder**](https://github.com/cucumber/cucumber-js/blob/master/features/background.feature)
    * In this folder create files with extension .feature
  * Create [**steps folder**](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md)
    * In this folder create step definition with extension .steps.ts
  * Create [**objects folder**](https://github.com/angular/protractor/blob/master/docs/page-objects.md)(optional)
    * In this folder create page object files with extension .page.ts
  * Create **reports folder** => with json & html sub-folders


### Command to Run

**without Tag** 

        npm run autoExecute
 
 **with Tag** 

    npm run autoExecute -- --cucumberOpts.tags="@Tag"

