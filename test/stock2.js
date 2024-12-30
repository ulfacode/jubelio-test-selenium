const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testInventory() {
  // 1. Membuat instance WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // 2. Membuka URL aplikasi inventaris
    await driver.get('https://app2.jubelio.com/home/inventory/');
    await driver.manage().setTimeouts({ implicit: 10000 }); // Tunggu hingga elemen muncul

    // 3. Login (jika diperlukan)
    const usernameInput = await driver.findElement(By.name('email'));
    const passwordInput = await driver.findElement(By.name('password'));
    const loginButton = await driver.findElement(By.css('button[type="submit"]'));

    await usernameInput.sendKeys('test.ulfa1@yopmail.com'); 
    await passwordInput.sendKeys('12345678Aa!');
    await loginButton.click();

    // 4. Tunggu hingga halaman inventaris selesai dimuat
    await driver.get('https://app2.jubelio.com/home/inventory/');

    // 5. Mendapatkan data persediaan barang (contoh: mengambil nama barang pertama)
    const firstItemName = await driver.findElement(By.css('document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div.react-grid-Container > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(6) > div > div > span > div")')).getText();
    console.log('Nama barang pertama:', firstItemName);

    // 6. Mengatur persediaan barang (contoh: klik tombol edit pada barang pertama)
    const editButton = await driver.findElement(By.css('table tbody tr:first-child td:last-child button.edit-btn')); // Sesuaikan selector
    await editButton.click();

  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
  } finally {
    // 10. Tutup browser
    await driver.quit();
  }
})();
