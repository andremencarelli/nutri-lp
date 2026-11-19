# Landing Page — Nutricionista Mariana Leão

Landing page de alta conversão (CRO) desenvolvida para a nutricionista **Mariana Leão**, especializada em nutrição clínica, emagrecimento sem dietas restritivas e estética corporal.

Desenvolvida com **HTML5 semântico**, **Tailwind CSS (via CDN)** e **Vanilla JavaScript**, sem dependências pesadas ou necessidade de compilação (*build step*).

---

## 📁 Estrutura de Arquivos

```
mariana-leao-lp/
├── index.html              # Estrutura completa e semântica da página
├── README.md               # Instruções de configuração e publicação
└── assets/
    ├── css/
    │   └── custom.css      # Efeitos orgânicos, glassmorphism e animações
    ├── js/
    │   └── main.js         # Configurações centrais, FAQ accordion e links dinâmicos do WhatsApp
    └── img/
        └── .gitkeep        # Diretório destinado às fotos oficiais
```

---

## ⚙️ 1. Como Editar os Dados da Profissional

Todos os dados institucionais e canais de contato estão centralizados no topo de [`assets/js/main.js`](assets/js/main.js):

```javascript
const CONFIG = {
  whatsappNumber: "5500999999999", // DDI (55) + DDD + Número do WhatsApp (apenas dígitos)
  crn: "CRN-X 00000",             // Registro no Conselho Regional de Nutricionistas
  instagram: "@marianaleao.nutri", // Perfil do Instagram (com ou sem @)
  defaultMessage: "Olá, Mariana! Vim pelo seu site e gostaria de agendar uma consulta online."
};
```

> **Nota:** Ao alterar o objeto `CONFIG`, todos os botões de ação e links do WhatsApp, do Instagram e o registro de CRN espalhados pela página são atualizados de forma automática.

---

## 📸 2. Onde e Como Substituir as Imagens

As fotos atuais utilizam placeholders estilizados com a paleta do projeto. Para substituí-las pelas fotos oficiais:

1. Salve as fotos na pasta `assets/img/` (exemplo: `foto-hero.webp` e `foto-consultorio.webp`).
2. No arquivo [`index.html`](index.html), atualize os atributos `src`:
   - **Foto Principal do Hero (Linha ~223):**  
     Substitua `https://placehold.co/600x720/...` por `assets/img/foto-hero.webp`.
   - **Foto da Seção Sobre (Linha ~624):**  
     Substitua `https://placehold.co/540x640/...` por `assets/img/foto-consultorio.webp`.

---

## 🚀 3. Guia Rápido de Publicação (Deploy)

Como o projeto é 100% estático (HTML/CSS/JS puros), ele pode ser publicado gratuitamente ou em qualquer servidor compartilhado em minutos:

### Opção A: Vercel (Recomendado — Gratuito com SSL Automático)
1. Conecte este repositório no dashboard da [Vercel](https://vercel.com).
2. Clique em **Deploy** (não é necessário alterar nenhuma configuração de build nem output).
3. Caso use o terminal: instale `npm i -g vercel`, execute o comando `vercel` na pasta do projeto e confirme as opções padrão.

### Opção B: Hostinger (Hospedagem Compartilhada / cPanel)
1. Acesse o **Gerenciador de Arquivos** no painel da Hostinger (hPanel).
2. Abra a pasta pública da sua hospedagem: `public_html/`.
3. Faça o upload direto de todos os arquivos do projeto (`index.html` e a pasta `assets/`).

---

## ⚖️ Conformidade com o Conselho Federal de Nutricionistas (CFN)
- A página foi construída em estrita conformidade com o Código de Ética do CFN.
- **Não há exibição de imagens de "antes e depois"** corporais.
- Os depoimentos são baseados em relatos reais sobre a qualidade do atendimento, acolhimento e sustentabilidade do método, acompanhados de nota de aviso legal e isenção de promessas de resultados idênticos.
