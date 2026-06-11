# PowerSport Dashboard

Um website de esportes moderno, responsivo e de alto desempenho que cobre Hóquei no Gelo, Basquete, Vôlei, Futebol Americano e Lutas (MMA). O projeto integra dados reais de jogos e classificação via RapidAPI com fallbacks locais resilientes.

## 📂 Estrutura de Pastas Organizada

O projeto foi reorganizado a partir de uma estrutura plana para uma arquitetura limpa, escalável e profissional agrupada por propósitos e modalidades:

```
Arena/
├── assets/                       # Mídias visuais organizadas por esporte
│   ├── american-football/        # Imagens de Futebol Americano (hero, feed, thumbnails, ícones)
│   ├── basketball/               # Imagens de Basquete
│   ├── fighting/                 # Imagens de Lutas (MMA)
│   ├── hockey/                   # Imagens de Hóquei no Gelo
│   ├── volleyball/               # Imagens de Vôlei
│   └── shared/                   # Ativos compartilhados (backgrounds globais, etc.)
│
├── config/                       # Arquivos de mapeamento e configurações do sistema
│   └── asset-map.json            # Mapeamento do nome antigo do arquivo para a nova pasta
│
├── public/                       # Arquivos estáticos visíveis ao cliente
│   ├── index.html                # Página principal (Landing Page de seleção de esportes)
│   └── pages/                    # Subpáginas específicas de cada esporte
│       ├── american-football/    # american-football.html
│       ├── basketball/           # basketball.html
│       ├── fighting/             # fighting.html
│       ├── hockey/               # hockey.html
│       └── volleyball/           # volleyball.html
│
├── src/                          # Código fonte do projeto
│   ├── css/                      # Estilos CSS organizados
│   │   ├── global/               # Folhas de estilo globais (reset, base, variáveis, utilitários)
│   │   ├── pages/                # Estilos de cada página de esporte
│   │   └── styles.css            # Estilos da landing page principal
│   │
│   ├── data/                     # Dados estáticos JSON locais de fallback
│   │   ├── american-football/    # american-football-page.json
│   │   ├── basketball/           # basketball-page.json
│   │   ├── fighting/             # fighting-page.json
│   │   ├── hockey/               # hockey-page.json
│   │   └── volleyball/           # volleyball-page.json
│   │
│   ├── js/                       # Código de lógica JavaScript
│   │   ├── core/                 # Scripts principais (main.js, paths.js)
│   │   ├── pages/                # Scripts de controle de cada esporte
│   │   └── tests/                # Scripts utilitários de testes
│   │
│   └── server/                   # Servidor backend Express
│       └── sportServer.js        # sportServer.js
│
├── package.json                  # Dependências e scripts npm
└── .env                          # Chaves de API e variáveis de ambiente (privado)
```

---

## 🚀 Como Executar o Servidor Local

1. Instale as dependências caso ainda não o tenha feito:
   ```bash
   npm install
   ```

2. Configure suas credenciais da API de Esportes no arquivo `.env` localizado na raiz do projeto:
   ```env
   PORT=3000
   RAPIDAPI_KEY=sua_chave_aqui
   RAPIDAPI_HOST=sportapi7.p.rapidapi.com
   ```

3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   *O website estará disponível em `http://localhost:3000`.*

---

## 🔌 Recursos e Arquitetura Técnica

### 1. Resiliência e Fallback Offline (`file://`)
Todos os arquivos HTML utilizam referências de caminhos relativos unificados com o prefixo `../../../` (profundidade 3). Isso possibilita duas experiências perfeitas:
- **Acesso direto via sistema de arquivos:** Você pode dar um duplo clique diretamente em `public/pages/basketball/basketball.html`, por exemplo, e a página abrirá perfeitamente offline, carregando os dados do arquivo JSON local correspondente em `src/data/`.
- **Servido via Servidor Express:** Ao rodar no servidor local, as requisições de mídias e dependências são resolvidas de forma transparente através de middlewares de rotas estáticas expressas em `sportServer.js`.

### 2. Rotas Estáticas no Express
O backend Express mapeia os recursos de forma limpa:
```javascript
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/src', express.static(path.join(__dirname, '..')));
app.use('/assets', express.static(path.join(__dirname, '../../assets')));
```
Isso permite que as rotas relativas do browser se resolvam exatamente iguais tanto no protocolo `http://` quanto no `file://`.
