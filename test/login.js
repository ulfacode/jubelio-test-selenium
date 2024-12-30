const { Builder, By, Browser } = require("selenium-webdriver");
// const { Driver } = require("selenium-webdriver/chrome");


async function Login_Positif() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://app2.jubelio.com/login');

    let textBox = await driver.findElement(By.name('email'));
    let textPassword = await driver.findElement(By.name('password'));

    await textBox.sendKeys('test.Ulfa1@yopmail.com');
    await textPassword.sendKeys('12345678Aa!');

    let sumbitButton = await driver.findElement(By.css('button'));
    await sumbitButton.click();
}

async function Login_Negative1() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://app2.jubelio.com/login');
    
    let textBox = await driver.findElement(By.name('email'));
    let textPassword = await driver.findElement(By.name('password'));
    
    await textBox.sendKeys('test.ulfa1');  //email tidak valid
    await textPassword.sendKeys('12345678Aa!');
    
    let sumbitButton = await driver.findElement(By.css('button'));
    await sumbitButton.click();
}

async function Login_Negative2() { //email tidak terdaftar
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://app2.jubelio.com/login');
    
    let textBox = await driver.findElement(By.name('email'));
    let textPassword = await driver.findElement(By.name('password'));
    
    await textBox.sendKeys('test.ulfa2@yopmail.com');
    await textPassword.sendKeys('12345678Aa!');
    
    let sumbitButton = await driver.findElement(By.css('button'));
    await sumbitButton.click();
}

async function Login_Negative3() { //pass tidak sesuai
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://app2.jubelio.com/login');
    
    let textBox = await driver.findElement(By.name('email'));
    let textPassword = await driver.findElement(By.name('password'));
    
    await textBox.sendKeys('test.ulfa1@yopmail.com');
    await textPassword.sendKeys('12345678Aa');
    
    let sumbitButton = await driver.findElement(By.css('button'));
    await sumbitButton.click();
}

Login_Positif();
Login_Negative1();
Login_Negative2();
Login_Negative3();