# Arquitetura inicial

## Aplicação

- React e TypeScript com App Router.
- CSS próprio em `app/globals.css`.
- Rotas de aulas em `app/lesson/[slug]`.
- Conteúdo de demonstração em `app/lessons.ts`.

## Hospedagem

- Sites para publicar a aplicação.
- Sem banco de dados ou autenticação no primeiro lançamento.

## Convenções de trabalho

- Uma funcionalidade por branch.
- Cada alteração começa por um caso de uso e critérios de aceitação.
- Revisar o diff antes de publicar.
- O Codex no VS Code deve ler este diretório antes de implementar novas funcionalidades.
