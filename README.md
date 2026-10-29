# dip. arquitetura + soluções — Aline Di Prado

Site institucional (página única) da arquiteta Aline Di Prado, Goiânia/GO.

## Tecnologias
React 19, TypeScript, TanStack Start (Vite 7), Tailwind CSS v4. A página é pré-renderizada como HTML estático no build — não há backend.

## Requisitos
Node.js 22+ e npm (ou bun).

## Rodar localmente
```bash
npm install
npm run dev        # http://localhost:8080
```

## Build
```bash
npm run build
```
Saída estática: **`dist/client`** (contém `index.html`, imagens e scripts).

## Publicar no GitHub
```bash
git init
git add .
git commit -m "Site dip. arquitetura"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/dip-arquitetura.git
git push -u origin main
```

## Publicar na Netlify
1. Netlify → *Add new site* → *Import from Git* → escolha o repositório.
2. Build command: `npm run build`
3. Publish directory: `dist/client`
4. Deploy. (Os valores já estão no `netlify.toml`.)

Nenhuma variável de ambiente é necessária.

## Editar conteúdo
- WhatsApp, Instagram e mensagem inicial: `src/lib/contact.ts`
- Textos e seções: `src/routes/index.tsx`
- Imagens: `src/assets/` (substitua mantendo o nome do arquivo)
- Cores e fontes: `src/styles.css`

## Integrações externas
- Google Fonts (Cormorant Garamond e Jost)
- Links para WhatsApp (wa.me) e Instagram

## Limitações conhecidas
- O build fixa o preset `cloudflare-module` (em `vite.config.ts` e `netlify.toml`). Não use o preset `netlify` nem `node-server`: eles quebram a geração da página inicial.
- Sem formulário: o contato é feito pelo WhatsApp.
- Sem depoimentos (nenhum foi fornecido).
