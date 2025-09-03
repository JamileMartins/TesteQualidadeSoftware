# Workflow de validação HTML

Este projeto utiliza o GitHub Actions para validar arquivos HTML automaticamente usando o htmlhint.

## Como funciona
- O workflow instala o htmlhint via npm.
- O arquivo `package-lock.json` permite cache npm para acelerar execuções futuras.
- Os arquivos HTML são verificados em cada push ou pull request.

## Comandos úteis

Instalar dependências:
```bash
npm install
```

Rodar validação local:
```bash
npx htmlhint "**/*.html"
```

## Personalização
Você pode editar o workflow em `.github/workflows/main.yml` para adicionar outros validadores ou etapas.
