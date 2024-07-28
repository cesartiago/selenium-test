const { Builder, By, Key, until } = require('selenium-webdriver');
require('dotenv').config();

async function loginSIGAA() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://sigaa.ufrrj.br/sigaa/verTelaLogin.do');
        await driver.findElement(By.name('user.login')).sendKeys(process.env.SIGAA_USER);
        await driver.findElement(By.name('user.senha')).sendKeys(process.env.SIGAA_PASSWORD, Key.RETURN);

        let userElement = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Atualizar Foto e Perfil")]')), 10000);
        let isDisplayed = await userElement.isDisplayed();

        if (isDisplayed) {
            console.log("Login realizado com sucesso!");

            let ensinoMenu = await driver.findElement(By.xpath('//td[@class="ThemeOfficeMainItem"]//span[contains(text(), "Ensino")]'));
            await driver.actions().move({ origin: ensinoMenu }).perform();
            await driver.sleep(1000);

            let consultarNotas = await driver.wait(until.elementLocated(By.xpath('//td[contains(text(), "Consultar Minhas Notas")]')), 10000);
            let isSubmenuDisplayed = await consultarNotas.isDisplayed();
            if (isSubmenuDisplayed) {
                await consultarNotas.click();

                let notasPage = await driver.wait(until.elementLocated(By.xpath('//h3[contains(text(), "Relatório de Notas do Aluno")]')), 10000);
                if (await notasPage.isDisplayed()) {
                    console.log("Página de notas carregada com sucesso!");
                } else {
                    console.log("Falha ao carregar a página de notas.");
                }
            } else {
                console.log("Submenu 'Consultar Minhas Notas' não está visível.");
            }
        } else {
            console.log("Login falhou!");
        }
    } finally {
        await driver.quit();
    }
}

module.exports = loginSIGAA;
