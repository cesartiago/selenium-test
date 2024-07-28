const { startDriver, loginSIGAA, goToNotasPage, quitDriver, checkSubmenu } = require('../sigaaFunctions');

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
        // Primeiro, faça login para garantir que estamos em uma sessão autenticada
        await loginSIGAA();

        // Em seguida, acesse a página de notas
        const isNotasPageDisplayed = await goToNotasPage();
        expect(isNotasPageDisplayed).toBe(true);
    });

    test('Deve verificar o submenu "Consultar Minhas Notas"', async () => {
        // Primeiro, faça login para garantir que estamos em uma sessão autenticada
        await loginSIGAA();

        // Navegue até o menu "Ensino" e verifique se o submenu "Consultar Minhas Notas" está visível
        const isSubmenuDisplayed = await checkSubmenu();
        expect(isSubmenuDisplayed).toBe(true);
    });
});
