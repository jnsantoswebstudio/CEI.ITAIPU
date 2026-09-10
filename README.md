# CEI Itaipu — Site

Projeto institucional preparado para publicação no **GitHub Pages** com Next.js.

## Publicação

1. Crie um repositório no GitHub.
2. Extraia este ZIP e envie **todos os arquivos e pastas** para a raiz do repositório.
3. Use o branch `main`.
4. No GitHub, abra **Settings > Pages**.
5. Em **Build and deployment > Source**, selecione **GitHub Actions**.
6. Abra a aba **Actions** e acompanhe o workflow **Deploy CEI Itaipu to GitHub Pages**.
7. Quando os jobs `build` e `deploy` ficarem verdes, o endereço aparecerá em **Settings > Pages**.

O workflow detecta automaticamente o nome do repositório e configura o caminho base necessário para sites publicados em `usuario.github.io/NOME-DO-REPOSITORIO/`.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Build estático

```bash
npm run build
```

A saída é gerada na pasta `out/`.
