# Projeto simples: Testes Automatizados com Selenium no Sigaa
# Descrição
Este projeto visa desenvolver testes automatizados para o Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA) utilizando Selenium e Jest. O foco é simular interações do usuário com o sistema e validar o comportamento correto do sistema. Utilizando-se JavaScript com o framework Jest e a biblioteca Selenium WebDriver.

## Casos de Teste

### Testes para o SIGAA

#### Teste de Login e Verificação de Usuário Logado

* **Objetivo**: Verificar se o usuário consegue fazer login e se está logado.
* **Resposta Esperada**: O usuário deve estar logado e um elemento específico deve estar presente na página inicial após o login.

#### Teste de Acesso à Página de Notas

* **Objetivo**: Acessar a página de notas após realizar o login.
* **Resposta Esperada**: A página de notas deve ser carregada corretamente.

#### Teste de Verificação do Submenu "Consultar Minhas Notas"

* **Objetivo**: Verificar se o submenu "Consultar Minhas Notas" está visível e acessível após o login.
* **Resposta Esperada**: O submenu "Consultar Minhas Notas" deve estar visível e deve permitir o acesso à página de notas.


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



