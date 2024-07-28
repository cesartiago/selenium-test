# Projeto simples: Testes Automatizados com Selenium no Sigaa
# Descrição
Este projeto visa desenvolver testes automatizados para o Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA) utilizando Selenium e Jest. O foco é simular interações do usuário com o sistema e validar o comportamento correto do sistema. Utilizando-se JavaScript com o framework Jest e a biblioteca Selenium WebDriver.

# Funcionalidades no teste
> Realizar login automático no sistema SIGAA da UFRRJ.

> Navegar pelo menu "Ensino" e acessar a opção "Consultar Minhas Notas".

> Verificar se a página de notas foi carregada corretamente.

## Pré-requisitos
- Node.js instalado (+nmp)
  
- ChromeDriver compatível com a versão do Google Chrome instalada

- Conta no SIGAA da UFRRJ com as credenciais armazenadas em um arquivo .env
  

# Configuração
Clone este repositório.
### 1º: Clone o repositório

```bash
git clone https://github.com/cesartiago/selenium-test.git
cd selenium-test
```

## 2º: Instale as dependências.
```bash
npm install
```

3º: Configure variáveis de ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis (substitua seu_usuario e sua_senha pelas suas credenciais do SIGAA):

```bash
SIGAA_USER=seu_usuario
SIGAA_PASSWORD=sua_senha
```

4º: Execute os testes

```bash
npx jest
```



