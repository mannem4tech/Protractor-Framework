import { browser, protractor, element, by } from 'protractor';
import { Given, Then, TableDefinition } from 'cucumber';
import chai = require("chai");
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const delay = require('timeout-as-promise');
Given(/^I will naviagte to the "([^"]*)" url$/, async function (argUrl: string): Promise<void> {
    await browser.get(argUrl);
    await browser.sleep(2000);
    this.attach(await browser.getTitle());
    return Promise.resolve();
});

Then(/^I verify the content on the page$/, async function (): Promise<any> {
    await delay(3000)
    await browser.wait(until.visibilityOf(element(by.className('protractor-logo'))), 3000);
    await browser.executeScript("arguments[0].style.border='3px dotted Fuchsia'", element(by.className('protractor-logo')));
    await browser.executeScript("arguments[0].style.background='#E2DEA5'", element(by.className('protractor-logo')));
    //await browser.executeScript("arguments[0].style.WebkitAnimationName='from {left: 0px;} to {left: 200px;}'", element(by.className('protractor-logo')));
    let screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('I should able to handle all "([^"]*)" and "([^"]*)"',
    async function (argRecord: string, argType: string, addTable: TableDefinition): Promise<void> {
        let dataTable: any = addTable.hashes();
        for (let index in dataTable) {
            if (dataTable.hasOwnProperty(index)) {
                let [record, type] = Object.values(dataTable[index]);
                console.log(record);
                console.log(type);
            }
        }
    });

Then('I navigate to {string} and verify the context', async function (string): Promise<void> {
    // Write code here that turns the phrase above into concrete actions
    console.log(string);
    return Promise.resolve();
});
