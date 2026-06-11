# Deployment Guide - PowerSport Project

---

## 1. Project Overview

Este projeto é um site de esportes com múltiplas páginas que exibe informações dinâmicas de Hóquei no Gelo, Basquete, Vôlei, Futebol Americano e Lutas (MMA). Ele consome dados em tempo real da API de Esportes por meio da plataforma RapidAPI e está preparado para ser implantado de forma rápida e segura na plataforma Vercel.

Para a segurança do projeto, as chaves de API (tokens de acesso) nunca devem ser expostas diretamente em arquivos públicos do lado do cliente (frontend), tais como arquivos HTML, CSS, scripts de frontend executados no navegador ou arquivos de configuração JSON públicos.

---

## 2. Required Tools

Para trabalhar localmente e implantar o projeto, você precisará das seguintes ferramentas:

- **Node.js**: Ambiente de execução JavaScript para rodar o servidor local.
- **npm (Node Package Manager)**: Gerenciador de pacotes para instalar dependências.
- **Git**: Sistema de controle de versão para gerenciar o código.
- **Conta no GitHub**: Para hospedar o repositório do seu código.
- **Conta na Vercel**: Para hospedar e publicar o site online.
- **Conta na RapidAPI**: Para assinar a API de esportes e obter sua chave de acesso.
- **Editor de Código (IDE)**: Recomendamos o Visual Studio Code (VS Code).

Para verificar se as ferramentas estão devidamente instaladas em sua máquina, execute os seguintes comandos no terminal:

```bash
node -v
npm -v
git --version
```

---

## 3. Recommended Environment Variable Structure

Para proteger suas credenciais, configure variáveis de ambiente. No ambiente de desenvolvimento local, crie um arquivo chamado `.env` na raiz do seu projeto.

Exemplo de conteúdo para o arquivo `.env`:

```env
RAPIDAPI_KEY=seu_token_aqui
RAPIDAPI_HOST=sportapi7.p.rapidapi.com
PORT=3000
```

Para auxiliar outros desenvolvedores do projeto, disponibilize um arquivo de modelo chamado `.env.example` na raiz:

```env
RAPIDAPI_KEY=
RAPIDAPI_HOST=
PORT=3000
```

### Segurança Importante

O arquivo `.env` contém dados sensíveis e **nunca** deve ser enviado para o GitHub. Certifique-se de que ele está listado no arquivo `.gitignore` na raiz do projeto:

```gitignore
node_modules/
.env
.vercel/
.DS_Store
```

---

## 4. How to Change the RapidAPI Key Locally

Quando precisar atualizar ou rotacionar a chave da sua API no ambiente de desenvolvimento local, siga estes passos:

1. Faça login na sua conta da **RapidAPI**.
2. Vá para o painel (Dashboard) da API esportiva à qual você se inscreveu.
3. Na seção de credenciais da API ou na área de testes de endpoints, localize e copie o valor da chave `x-rapidapi-key`.
4. Abra o projeto no seu editor de código (como o VS Code).
5. Abra o arquivo `.env` localizado na raiz do projeto.
6. Localize a variável `RAPIDAPI_KEY` e substitua o valor antigo pelo novo token copiado.
7. Salve o arquivo `.env`.
8. Encerre o processo do servidor local atual no terminal (`Ctrl + C`) e execute o comando de inicialização novamente para carregar as novas variáveis.

Exemplo de alteração:

```env
RAPIDAPI_KEY=nova_chave_aqui
```

> [!IMPORTANT]
> - Não adicione aspas simples ou duplas ao redor do valor da variável, a menos que o projeto possua um leitor específico que exija isso.
> - Nunca faça commit ou compartilhe o seu arquivo `.env` em repositórios públicos do GitHub.
> - Sempre reinicie o servidor do Node.js (`npm run dev` ou `npm start`) após qualquer alteração no arquivo `.env`.

---

## 5. Where the RapidAPI Key Should Be Used

A chave da RapidAPI é uma credencial privada e deve ser utilizada **exclusivamente do lado do servidor (backend)**.

Se o seu projeto utiliza um servidor Express Node.js, recupere os valores de suas variáveis de ambiente utilizando o objeto `process.env`:

```js
const apiKey = process.env.RAPIDAPI_KEY;
const apiHost = process.env.RAPIDAPI_HOST;
```

Abaixo está um padrão recomendado para realizar requisições seguras para a API de terceiros através do seu backend:

```js
const response = await fetch("https://sportapi7.p.rapidapi.com/api/v1/event/15508283/atbat/983367/pitches", {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
  }
});
```

### Arquitetura de Comunicação do Cliente

O seu código frontend (executado no navegador do usuário) deve fazer requisições para a rota interna criada no seu servidor local, em vez de chamar diretamente os servidores da RapidAPI:

**Forma Correta (Frontend chamando rota local segura):**
```js
fetch("/api/sports")
```

**Forma Incorreta (Expondo a chave secreta diretamente no navegador):**
```js
fetch("https://sportapi7.p.rapidapi.com/api/v1/event/...", {
  headers: {
    "x-rapidapi-key": "8482196756msh999d775a59445f1p145bdbjsnc280c8b02220" // NUNCA FAÇA ISSO!
  }
})
```

---

## 6. How to Test the New API Key Locally

Após atualizar a sua chave local, valide a integração seguindo estes passos:

1. Abra o terminal na raiz do projeto e instale as dependências:
   ```bash
   npm install
   ```
2. Inicialize o servidor local. Inspecione o arquivo `package.json` para verificar qual script de inicialização está configurado. Geralmente são:
   ```bash
   npm run dev
   ```
   Ou:
   ```bash
   npm start
   ```
3. Abra o navegador e acesse a URL local (ex: `http://localhost:3000`).
4. Abra o console do desenvolvedor do navegador (`F12` -> aba *Console*) e verifique se há erros de rede ou de requisições bloqueadas.
5. Inspecione os logs do seu terminal onde o servidor Node.js está executando para garantir que não há registros de erros HTTP como status `401` (Não Autorizado) ou `403` (Proibido).
6. Confirme visualmente na interface se os cards, placares ou rankings de atletas estão carregando os dados corretos ou se estão exibindo o estado de fallback sem erros fatais no console.

### If the API does not work

Se as requisições falharem, verifique as seguintes causas possíveis:

- **Chave incorreta**: Certifique-se de que copiou a chave correta da RapidAPI correspondente à aplicação ativada.
- **Host incorreto**: Valide se o `RAPIDAPI_HOST` está escrito exatamente como esperado na documentação do endpoint.
- **Inscrição Inativa**: Confirme se você está inscrito na API correspondente no console da RapidAPI.
- **Limite Excedido**: Algumas APIs limitam o número de requisições mensais gratuitas. Certifique-se de não ter ultrapassado a cota de uso.
- **Variáveis não carregadas**: O arquivo `.env` pode não estar sendo lido. Verifique se o pacote `dotenv` está sendo importado adequadamente com `require('dotenv').config()`.
- **Servidor não reiniciado**: O servidor Node.js precisa ser reiniciado para reconhecer novas variáveis do arquivo `.env`.
- **Rota estática desatualizada**: Verifique se o frontend ainda está tentando acessar endpoints externos diretamente.
- **Problema de CORS**: O servidor local pode estar bloqueando a requisição se as permissões de origem cruzada não estiverem devidamente configuradas.
- **Caminho de Endpoint Inválido**: Certifique-se de que os caminhos das rotas no Express condizem com os parâmetros solicitados.

---

## 7. Preparing the Project for Vercel

Antes de iniciar a implantação na Vercel, organize seu projeto e envie-o para um repositório no seu GitHub.

1. Inicialize o repositório Git localmente (caso ainda não tenha feito):
   ```bash
   git init
   ```
2. Adicione todos os arquivos ao controle de versão:
   ```bash
   git add .
   ```
3. Realize o commit inicial (certifique-se de que as pastas `node_modules/` e o arquivo `.env` estão devidamente listados no `.gitignore` e não serão enviados):
   ```bash
   git commit -m "Prepare project for Vercel deployment"
   ```
4. Configure o nome da sua branch principal para `main`:
   ```bash
   git branch -M main
   ```
5. Conecte o repositório local ao seu repositório remoto criado no GitHub:
   ```bash
   git remote add origin SEU_REPOSITORIO_URL_DO_GITHUB
   ```
6. Envie o código para o GitHub:
   ```bash
   git push -u origin main
   ```

---

## 8. Deploying to Vercel

A Vercel facilita a publicação de projetos diretamente a partir de um repositório do GitHub. Siga este tutorial passo a passo:

1. Faça login na sua conta na **Vercel** (`vercel.com`).
2. No painel de controle principal da Vercel, clique no botão **"Add New"** e selecione **"Project"**.
3. Na lista de repositórios apresentada, localize o repositório do seu projeto do GitHub e clique em **"Import"**.
4. Defina o nome do seu projeto na Vercel.
5. Em **Build and Development Settings**, você pode definir as configurações de build. Seu projeto utiliza um servidor Express Node.js:
   - **Framework Preset**: Selecione **"Other"** (para Express Node.js com servidor customizado).
   - **Build Command**: Deixe em branco (o projeto não requer build step).
   - **Output Directory**: `/public` (diretório contém o arquivo `index.html` e as páginas estáticas).
   - **Install Command**: `npm install`.
6. Expanda a seção **"Environment Variables"** para adicionar as credenciais da RapidAPI (veja o detalhamento na seção 9 abaixo).
7. Clique em **"Deploy"**. O processo levará alguns instantes e, ao final, você receberá um endereço web público para o seu site.

---

## 9. Configuring RapidAPI Environment Variables on Vercel

Para que o site implantado consuma os dados da API com sucesso, configure as chaves na Vercel:

1. No painel do seu projeto na Vercel, clique na aba **"Settings"** (Configurações).
2. No menu lateral esquerdo, clique em **"Environment Variables"**.
3. Insira o par de chaves e valores nos campos correspondentes:
   - No campo **Key**, digite `RAPIDAPI_KEY` e no campo **Value**, cole sua chave privada da RapidAPI.
   - Clique em **"Add"**.
   - No campo **Key**, digite `RAPIDAPI_HOST` e no campo **Value**, cole o host correspondente.
   - Clique em **"Add"**.
4. Mantenha os ambientes **Production**, **Preview** e **Development** selecionados para garantir que as credenciais funcionem em todas as etapas de publicação.
5. Clique em **"Save"**.
6. Para aplicar as variáveis de ambiente ao site publicado, vá para a aba **"Deployments"**, selecione a última implantação realizada, clique no menu de opções (três pontos) e selecione **"Redeploy"**.

| Variable | Example Value | Required |
| --- | --- | --- |
| `RAPIDAPI_KEY` | `8482196756msh999d775a59445f1p145bdbjsnc280c8b02220` | Sim |
| `RAPIDAPI_HOST` | `sportapi7.p.rapidapi.com` | Sim |
| `PORT` | `3000` | Opcional |

---

## 10. Important Vercel Notes for Backend Routes

Se o seu projeto utiliza um servidor Express estruturado em Node.js localmente, a Vercel exige uma adaptação para servir as rotas dinâmicas como funções sem servidor (Serverless Functions). 

Escolha um dos dois modelos abaixo para a sua implantação:

### Option A - Static Frontend Only
Use esta opção se o seu projeto é composto apenas por arquivos HTML estáticos, folhas de estilo CSS, dados JSON locais de fallback e JavaScript simples de interface:
- Mantenha todos os seus arquivos públicos de visualização dentro do diretório `/public` (incluindo o arquivo `index.html`).
- Certifique-se de que os arquivos de mídia estão acessíveis em caminhos relativos ao arquivo HTML.
- **Aviso de Segurança**: Se o seu projeto utilizar apenas arquivos estáticos do lado do cliente, não faça requisições diretas do navegador para a RapidAPI informando a sua chave, pois qualquer usuário poderá inspecionar o seu site e roubar suas credenciais.

### Option B - Frontend + API Routes (Recomendado)
Para proteger sua chave de API e garantir a segurança das requisições na Vercel, crie rotas de API utilizando funções Serverless. A Vercel mapeia automaticamente os arquivos dentro do diretório `/api` como endpoints sem servidor.

Crie arquivos para as rotas em sua estrutura de projeto:
```text
api/
├── basketball.js
├── hockey.js
├── volleyball.js
├── american-football.js
└── fighting.js
```

Exemplo básico de uma função serverless da Vercel (`api/basketball.js`):
```js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/132/season/80229/standings/total", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ 
      error: "Failed to fetch data from RapidAPI", 
      details: error.message 
    });
  }
}
```

No código JavaScript do seu frontend, realize a chamada à rota do servidor Vercel:
```js
const response = await fetch("/api/basketball");
const data = await response.json();
```

---

## 11. Suggested `vercel.json`

O arquivo `vercel.json` na raiz do projeto é utilizado para configurar redirecionamentos, rotas, Headers e comportamento de arquivos estáticos na Vercel.

### Configuração Recomendada (Express Server + Static Assets)

Como seu projeto utiliza um servidor Express que mapeia `/public` como raiz, `/src` e `/assets`, configure o `vercel.json` para garantir que CSS, JavaScript e imagens sejam servidos corretamente:

```json
{
  "version": 2,
  "public": true,
  "buildCommand": "npm run build || echo 'No build needed'",
  "outputDirectory": "public",
  "headers": [
    {
      "source": "/src/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "routes": [
    {
      "src": "/src/(.*)",
      "dest": "/$1"
    },
    {
      "src": "/assets/(.*)",
      "dest": "/$1"
    },
    {
      "src": "/basketball",
      "dest": "/pages/basketball/basketball.html"
    },
    {
      "src": "/hockey",
      "dest": "/pages/hockey/hockey.html"
    },
    {
      "src": "/volleyball",
      "dest": "/pages/volleyball/volleyball.html"
    },
    {
      "src": "/american-football",
      "dest": "/pages/american-football/american-football.html"
    },
    {
      "src": "/fighting",
      "dest": "/pages/fighting/fighting.html"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### Verificação de Caminhos de CSS

Certifique-se de que seus arquivos HTML referenciam o CSS corretamente:

**Exemplo correto:**
```html
<link rel="stylesheet" href="/src/css/styles.css">
<link rel="stylesheet" href="/src/css/global/base.css">
```

> [!IMPORTANT]
> - Os arquivos CSS devem estar localizados em `/src/css/` no seu projeto local.
> - A Vercel precisa mapear corretamente o diretório `/src` através do `vercel.json`.
> - Imagens e assets devem estar em `/assets/` e também serão servidos através das rotas configuradas.
> - Se os arquivos CSS ainda não carregarem, verifique o console do navegador (`F12`) para confirmar os caminhos exatos solicitados.

---

## 12. After Deployment Checklist

Após realizar o deploy, use esta lista para certificar-se de que tudo está funcionando perfeitamente em produção:

- [ ] A página inicial (landing page principal) carrega sem erros.
- [ ] O menu de navegação direciona para os esportes corretos.
- [ ] A página de Basquete carrega corretamente.
- [ ] A página de Hóquei no Gelo carrega corretamente.
- [ ] A página de Vôlei carrega corretamente.
- [ ] A página de Futebol Americano carrega corretamente.
- [ ] A página de Lutas (MMA) carrega corretamente.
- [ ] As folhas de estilo CSS são carregadas em todas as páginas.
- [ ] Os scripts JavaScript de controle de interface funcionam corretamente.
- [ ] Todas as imagens de background (hero) e fotos de atletas aparecem normalmente.
- [ ] Os dados JSON de fallback local são lidos sem gerar falhas caso os endpoints dinâmicos falhem.
- [ ] Dados reais de classificação ou placares da RapidAPI são exibidos nas tabelas.
- [ ] A chave da RapidAPI não é exibida no código-fonte das páginas ou console do desenvolvedor.
- [ ] O Console do Desenvolvedor do navegador está limpo de mensagens de erros de requisições de rede.
- [ ] Os logs de funções da Vercel (aba *Logs* do projeto) não apresentam erros fatais de exceções não tratadas.
- [ ] As variáveis de ambiente estão salvas e ativas nas configurações de produção do dashboard Vercel.
- [ ] O site é totalmente utilizável através da URL de produção fornecida pela Vercel (`.vercel.app`).

---

## 13. Common Problems and Fixes

| Problem | Possible Cause | Solution |
| --- | --- | --- |
| **API retorna erro 401** | Token inválido ou chave da RapidAPI digitada incorretamente. | Verifique sua chave no painel da RapidAPI e atualize o valor da variável de ambiente `RAPIDAPI_KEY`. |
| **API retorna erro 403** | Assinatura inativa na API específica ou chave não autorizada. | Acesse a RapidAPI e verifique se realizou a inscrição no plano (mesmo que gratuito) da API correspondente. |
| **API retorna erro 429** | Limite de requisições do seu plano foi excedido. | Aguarde a renovação da cota de requisições ou atualize para um plano com maior limite de chamadas na RapidAPI. |
| **API funciona localmente, mas falha na Vercel** | Variáveis de ambiente ausentes ou desatualizadas nas configurações do projeto na Vercel. | Acesse o painel da Vercel, configure a `RAPIDAPI_KEY` e a `RAPIDAPI_HOST` e realize um novo deploy para carregar as alterações. |
| **Imagens do site não carregam** | Caminhos relativos de arquivos de imagem incorretos no HTML/JS. | Verifique se os caminhos relativos condizem com a nova profundidade de pastas (por exemplo, usando `../../../assets/` nas subpáginas). |
| **Estilos CSS não são aplicados** | Caminho incorreto no link da folha de estilo no arquivo HTML. | Valide a tag `<link rel="stylesheet">` nos cabeçalhos dos arquivos HTML. |
| **Lógica JavaScript falha silenciosamente** | Caminho do script src incorreto na tag `<script>` do HTML. | Verifique se a tag `<script src="...">` no HTML aponta corretamente para a pasta `src/js/`. |
| **Arquivo JSON local retorna 404** | O caminho relativo do arquivo JSON local de fallback não foi encontrado. | Valide se o caminho para a pasta `src/data/` está correto a partir da profundidade da página HTML atual. |
| **Rota de página retorna erro 404** | A rota ou pasta de páginas não coincide com o endereço acessado na URL. | Verifique se os arquivos HTML estão dentro da pasta `/public/pages/` e se os mapeamentos do `vercel.json` estão corretos. |
| **A variável de ambiente retorna `undefined`** | O arquivo `.env` não foi importado no arquivo de servidor backend, ou a variável não foi declarada na Vercel. | Verifique a importação do pacote `dotenv` com `require('dotenv').config()` no servidor Express, ou adicione as chaves ausentes na Vercel. |
| **Erro de CORS no navegador** | O navegador bloqueou a requisição direta do frontend para a API externa. | Crie e utilize uma rota de API no backend Express ou utilize as Vercel API Routes para realizar a chamada do lado do servidor. |
| **Página em branco após a publicação** | Erro fatal de sintaxe JavaScript ou erro de carregamento das dependências principais. | Abra o console do desenvolvedor (`F12`), verifique qual linha gerou o erro de runtime e confira os caminhos dos arquivos. |

---

## 14. Safe RapidAPI Key Rotation Checklist

Siga este checklist quando precisar alterar ou rotacionar de forma segura as suas chaves de API:

- [ ] Obtenha a nova credencial válida no painel de desenvolvedor da RapidAPI.
- [ ] Atualize o valor da variável de ambiente `RAPIDAPI_KEY` no seu arquivo `.env` local.
- [ ] Reinicie o servidor local Node.js para aplicar as novas chaves.
- [ ] Realize testes locais no site e confirme se os dados estão sendo buscados corretamente com a nova chave.
- [ ] Acesse o dashboard da Vercel, navegue até as configurações de variáveis de ambiente do projeto e atualize o valor da variável `RAPIDAPI_KEY`.
- [ ] Faça um novo deploy do projeto na Vercel para aplicar a nova chave em produção.
- [ ] Abra o endereço web público do projeto e teste o carregamento de dados em tempo real.
- [ ] Certifique-se de que a chave antiga foi revogada no console da RapidAPI.
- [ ] Inspecione o repositório Git e histórico de commits para garantir que a nova chave de API não foi acidentalmente exposta ou versionada em arquivos de frontend.
- [ ] Confirme que o arquivo `.env` permanece na lista do `.gitignore` do projeto.

---

## 15. Recommended Final Project Scripts

Adicione ou ajuste os scripts abaixo em seu arquivo `package.json` para facilitar a inicialização local em harmonia com o caminho estruturado do seu servidor backend:

```json
{
  "scripts": {
    "dev": "node src/server/sportServer.js",
    "start": "node src/server/sportServer.js"
  }
}
```

> [!NOTE]
> Se o seu projeto estiver configurado para rodar na Vercel utilizando exclusivamente rotas serverless do diretório `/api`, o servidor Express local em `src/server/sportServer.js` servirá prioritariamente como ambiente de simulação e desenvolvimento local, não sendo obrigatório seu início em produção na Vercel.

---

## 16. Final Notes

- **Mantenha segredos em segurança**: Chaves privadas devem sempre ser tratadas como segredos confidenciais. Nunca armazene senhas ou tokens diretamente no seu repositório Git.
- **Evite exposição no frontend**: Lembre-se sempre de criar um intermediário (backend) para realizar requisições a APIs externas que necessitem de autenticação.
- **Redeploys são obrigatórios**: A Vercel não atualiza de forma retroativa as variáveis de ambiente em deploys já existentes. Sempre realize um "Redeploy" após editar suas variáveis de ambiente.
- **Mantenha documentações atualizadas**: Sempre que alterar variáveis de ambiente ou adicionar rotas de API, atualize os arquivos `.env.example`, `README.md` e este guia de implantação.
- **Utilize rotas Serverless**: Para deploys serverless escaláveis e seguros na Vercel, priorize a modularização dos arquivos em `/api/*`.
