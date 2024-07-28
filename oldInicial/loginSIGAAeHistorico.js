# Foi a base para o real

require('dotenv').config();
const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginSIGAA() {
    // Configura o WebDriver
    //O WebDriver é uma API de automação de navegadores que permite controlar e interagir com navegadores da web de forma programática.
    // Permite que os testes automatizados interajam com os elementos da página da web, simulando ações do usuário, como cliques, entrada de texto, navegação, etc.
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Abre a página do SIGAA
        await driver.get('https://sigaa.ufrrj.br/sigaa/verTelaLogin.do');

        // Localiza o campo de usuário e insere o login
        await driver.findElement(By.name('user.login')).sendKeys(process.env.SIGAA_USER);

        // Localiza o campo de senha e insere a senha
        await driver.findElement(By.name('user.senha')).sendKeys(process.env.SIGAA_PASSWORD, Key.RETURN);

        // Espera a página carregar e verifica se o login foi bem-sucedido
        // Espera até que um elemento específico esteja presente
        /*
        Ela usa o método wait() do driver para aguardar até que o elemento seja localizado usando o localizador XPath //*[contains(text(), "Nome do Usuário")].
        O tempo máximo de espera é de 10 segundos (10000 milissegundos). Caso o elemento não seja encontrado nesse intervalo, a operação será interrompida.
        */
        let userElement = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Atualizar Foto e Perfil")]')), 10000);
        
        // Verifica se o elemento está visível
        let isDisplayed = await userElement.isDisplayed();
        if (isDisplayed) {
            console.log("Login realizado com sucesso!");

            // Localiza o item de menu "Ensino" e move o mouse sobre ele
            let ensinoMenu = await driver.findElement(By.xpath('//td[@class="ThemeOfficeMainItem"]//span[contains(text(), "Ensino")]'));
            await driver.actions().move({ origin: ensinoMenu }).perform();

            // Adiciona uma pausa para garantir que o submenu apareça
            await driver.sleep(1000);

            // Espera o submenu aparecer e verificar se está visível
            let consultarNotas = await driver.wait(until.elementLocated(By.xpath('//td[contains(text(), "Consultar Minhas Notas")]')), 10000);
            let isSubmenuDisplayed = await consultarNotas.isDisplayed();
            if (isSubmenuDisplayed) {
                // Clica no item "Consultar Minhas Notas"
                await consultarNotas.click();

                // Verifica se a página de notas foi carregada
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
        // Fecha o navegador
        await driver.quit();
    }
}

loginSIGAA();
