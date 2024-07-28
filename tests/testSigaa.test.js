// testSigaa.test.js
const { startDriver, loginSIGAA, goToNotasPage, quitDriver, checkSubmenu, postNewTopic } = require('../sigaaFunctions');

describe('SIGAA Tests', () => {
    beforeAll(async () => {
        await startDriver();
    });

    afterAll(async () => {
        await quitDriver();
    });

    test('Deve fazer login com sucesso', async () => {
        const isLoggedIn = await loginSIGAA();
        expect(isLoggedIn).toBe(true);
    });

    test('Deve acessar a página de notas', async () => {
        await loginSIGAA();
        const isNotasPageDisplayed = await goToNotasPage();
        expect(isNotasPageDisplayed).toBe(true);
    });

    test('Deve verificar o submenu "Consultar Minhas Notas"', async () => {
        await loginSIGAA();
        const isSubmenuDisplayed = await checkSubmenu();
        expect(isSubmenuDisplayed).toBe(true);
    });

    test('Deve cadastrar um novo tópico no fórum', async () => {
        await loginSIGAA();
        const isTopicPosted = await postNewTopic();
        expect(isTopicPosted).toBe(true);
    });
});
