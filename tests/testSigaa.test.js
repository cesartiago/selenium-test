const loginSIGAA = require('../sigaaFunctions');

describe('SIGAA Tests', () => {
    it('Deve logar e consultar notas', async () => {
        await loginSIGAA();
    });
});