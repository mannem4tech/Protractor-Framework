
import { Before, BeforeAll, After, AfterAll, Status, setDefaultTimeout, World } from 'cucumber';
import { browser } from "protractor";


BeforeAll(function () {
    // Does some slow browser/filesystem/network actions
});
setDefaultTimeout(60 * 10000);

Before(function () {
    //login details
});

After(function () {
    //login details
});


AfterAll(async function (): Promise<void> {
    await browser.quit();
});