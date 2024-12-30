const { Builder, By, Browser } = require("selenium-webdriver");

async function inventory() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://app2.jubelio.com/home/inventory/');

    let textBox = await driver.findElement(By.name('email'));
    let textPassword = await driver.findElement(By.name('password'));

    await textBox.sendKeys('test.Ulfa1@yopmail.com');
    await textPassword.sendKeys('12345678Aa!');

    let sumbitButton = await driver.findElement(By.css('button'));
    await sumbitButton.click();
}

inventory();
