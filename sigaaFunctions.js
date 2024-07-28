// sigaaFunctions.js
const { Builder, By, Key, until } = require('selenium-webdriver');
require('dotenv').config();

let driver;

async function startDriver() {
    driver = await new Builder().forBrowser('chrome').build();
}

async function quitDriver() {
    if (driver) {
        await driver.quit();
    }
}

async function loginSIGAA() {
    await driver.get('https://sigaa.ufrrj.br/sigaa/verTelaLogin.do');
    await driver.findElement(By.name('user.login')).sendKeys(process.env.SIGAA_USER);
    await driver.findElement(By.name('user.senha')).sendKeys(process.env.SIGAA_PASSWORD, Key.RETURN);

    let userElement = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Atualizar Foto e Perfil")]')), 10000);
    let isDisplayed = await userElement.isDisplayed();

    return isDisplayed;
}

async function goToNotasPage() {
    let ensinoMenu = await driver.findElement(By.xpath('//td[@class="ThemeOfficeMainItem"]//span[contains(text(), "Ensino")]'));
    await driver.actions().move({ origin: ensinoMenu }).perform();
    await driver.sleep(1000);

    let consultarNotas = await driver.findElement(By.xpath('//td[contains(text(), "Consultar Minhas Notas")]'));
    let isSubmenuDisplayed = await consultarNotas.isDisplayed();
    if (isSubmenuDisplayed) {
        await consultarNotas.click();

        let notasPage = await driver.wait(until.elementLocated(By.xpath('//h3[contains(text(), "Relatório de Notas do Aluno")]')), 10000);
        return await notasPage.isDisplayed();
    }
    return false;
}

async function checkSubmenu() {
    const ensinoMenu = await driver.findElement(By.xpath('//td[@class="ThemeOfficeMainItem"]//span[contains(text(), "Ensino")]'));
    await driver.actions().move({ origin: ensinoMenu }).perform();
    await driver.sleep(1000);

    const consultarNotas = await driver.findElement(By.xpath('//td[contains(text(), "Consultar Minhas Notas")]'));
    return await consultarNotas.isDisplayed();
}

// Função para cadastrar um novo tópico
async function postNewTopic() {
    // Clique no link para cadastrar um novo tópico
    const newTopicButton = await driver.findElement(By.xpath('//a[contains(text(), "Cadastrar novo tópico para este fórum")]'));
    await newTopicButton.click();

    // Preencha o título e o conteúdo do tópico
    await driver.findElement(By.name('form:titulo')).sendKeys('Testando funcionalidade - IGNORE alunos');
    await driver.findElement(By.name('form:descricao')).sendKeys('Testando funcionalidade - IGNORE alunos');

    // Enviar o tópico
    const submitButton = await driver.findElement(By.xpath('//input[@type="submit" and @value="Cadastrar Tópico"]'));
    await submitButton.click();

    // Verifique se o tópico foi criado com sucesso 
    const confirmationMessage = await driver.wait(until.elementLocated(By.xpath('//div[contains(text(), "Cadastrado com sucesso.")]')), 10000);
    return await confirmationMessage.isDisplayed();
}

module.exports = { startDriver, quitDriver, loginSIGAA, goToNotasPage, checkSubmenu, postNewTopic };
