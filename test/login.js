const { Builder, By, Browser } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");


async function Login_Positif() {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://app2.jubelio.com/login');

    let textBox = await Driver.findElement(By.name('email'));
    let textPassword = await Driver.findElement(By.name('password'));

    await textBox. seynKeys('Selenium');
    await textPassword. seynKeys('12345678a');

    let sumbitButton = await Driver.findElement(By.css('button'));
    await sumbitButton.click();
}
Login_Positif();