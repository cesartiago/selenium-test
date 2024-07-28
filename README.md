# Executar
node loginTest.js

# Projeto: Testes Automatizados com Selenium
# Descrição
Este projeto visa desenvolver testes automatizados para um sistema web utilizando Selenium. O foco é simular interações do usuário com o sistema e validar o comportamento correto do sistema.

# Funcionalidades
> Realizar login automático no sistema SIGAA da UFRRJ.
> Navegar pelo menu "Ensino" e acessar a opção "Consultar Minhas Notas".
> Verificar se a página de notas foi carregada corretamente.

# Pré-requisitos
- Node.js instalado
  
- ChromeDriver compatível com a versão do Google Chrome instalada

- Conta no SIGAA da UFRRJ com as credenciais armazenadas em um arquivo .env
  

# Configuração
Clone este repositório.

Instale as dependências.

Crie um arquivo .env na raiz do projeto com as seguintes variáveis (substitua seu_usuario e sua_senha pelas suas credenciais do SIGAA):

env
SIGAA_USER=seu_usuario
SIGAA_PASSWORD=sua_senha

