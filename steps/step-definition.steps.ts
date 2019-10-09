import { browser, protractor, element, by } from 'protractor';
import { Given, Then } from 'cucumber';
// import { ProtractorHelper } from 'ts-protractor-helper';
import chai = require("chai");
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const delay = require('timeout-as-promise');
Given(/^I will naviagte to the "([^"]*)" url$/, async function (argUrl: string): Promise<void> {
    await browser.get(argUrl);
    await browser.sleep(2000);
    // await ProtractorHelper.browser.customMessage(this, await browser.getTitle());
    return Promise.resolve();
});

Then(/^I verify the content on the page$/, async function (): Promise<any> {
    await delay(3000)
    await browser.wait(until.visibilityOf(element(by.className('fb_logo'))), 3000);
    await browser.executeScript("arguments[0].style.border='3px solid red'", element(by.className('fb_logo'))); //markElement
    let screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
