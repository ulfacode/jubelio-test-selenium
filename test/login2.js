const { Builder, By } = require('selenium-webdriver');

(async function Login_Negative() {
    // Inisialisasi driver untuk Chrome
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Buka halaman login
        await driver.get('https://app2.jubelio.com/login');

        // Temukan elemen email dan isi data
        let textBox = await driver.findElement(By.name('email'));
        await textBox.sendKeys('your_email@example.com');

        // Temukan elemen password dan isi data
        let passwordBox = await driver.findElement(By.name('password'));
        await passwordBox.sendKeys('your_password');

        // Klik tombol login
        let loginButton = await driver.findElement(By.css('button'));
        await loginButton.click();

        // Tunggu proses login selesai
        await driver.sleep(2000); // Hindari sleep jika memungkinkan, gunakan WebDriverWait

        // Verifikasi login berhasil dengan memeriksa URL
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('dashboard')) {
            console.log('Login berhasil!');
        } else {
            console.log('Login gagal.');
        }
    } catch (err) {
        console.error(err);
    } finally {
        // Tutup browser
        await driver.quit();
    }
})();